import { definePageConfig, useSearchParams } from 'ice';
import { useState, useEffect, Fragment } from 'react';
import { Icon, Message } from '@alifd/next';

import { base64URLDecode, parseParamMapFromUrl } from '@/utils';

import { TypePageParams, PayWayList } from './config';

import styles from './index.module.css';

export default function Order() {
  const [searchParams] = useSearchParams();

  const [pageParams, setPageParams] = useState<TypePageParams>({
    orderStr: '',
    amountStr: '',
  });

  useEffect(() => {
    const encodeStr = searchParams.get('_');

    const fUrl = `https://x.com?${base64URLDecode(encodeStr)}`;
    const { orderStr, amountStr } = parseParamMapFromUrl(fUrl);
    setPageParams({
      orderStr: orderStr || '',
      amountStr: amountStr || '',
    });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={`${styles.pageTop} gl-cls-block`}>
        <div className={styles.topHeader}>
          <Icon
            type="success-filling"
            size="large"
            className={styles.topHeaderIcon}
          />
          <div className={styles.topHeaderText}>订单信息</div>
        </div>
        <div className={styles.topOrderInfo}>
          <div>订单号：{pageParams.orderStr || '-'}</div>
          <div>付款金额：{pageParams.amountStr || '-'} USDT</div>
        </div>
        <div className={styles.topDesc}>
          由于第三方充值风控限制，目前只能USDT充值，请针对相应钱包进行转账充值,充值成功自动到账。
        </div>
      </div>
      <div className={`${styles.pagePayWays} gl-cls-block`}>
        <div className={styles.payWayList}>
          {PayWayList.map((pw, pwidx) => {
            return (
              <Fragment key={pw.key}>
                <div
                  className={styles.payWayItem}
                  onClick={(evt) => {
                    evt.stopPropagation();
                    if (pw.fn) {
                      pw.fn({ item: pw, index: pwidx, pageParams });
                    } else {
                      Message.show({
                        type: 'warning',
                        align: 'cc cc',
                        content: '请期待！',
                      });
                    }
                  }}
                >
                  <img
                    src={pw.icon}
                    alt={pw.name}
                    className={styles.payWayIcon}
                  />
                  <div className={styles.payWayItemRight}>
                    <div className={styles.payWayItemRightText}>
                      {pw.name} - {pw.xList.join(' / ')}
                    </div>
                    <div className={styles.payWayItemRightDesc}>{pw.desc}</div>
                  </div>
                </div>
                {pwidx < PayWayList.length - 1 ? (
                  <div className={styles.payWayItemDivider} />
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: '下单',
  };
});
