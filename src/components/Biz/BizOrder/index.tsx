import { useSearchParams } from 'ice';
import { useState, useEffect, Fragment } from 'react';
import { Icon } from '@alifd/next';

import { base64URLDecode, parseParamMapFromUrl } from '@/utils';

import { TypePageParams, PayWayList4Render } from './config';

import styles from './index.module.css';

export function BizOrder() {
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
          {PayWayList4Render.map((pw, pwIdx) => {
            return (
              <Fragment key={pw.key}>
                <div
                  className={styles.payWayItem}
                  onClick={(evt) => {
                    evt.stopPropagation();
                    pw.fn({ item: pw.oriItem, index: pwIdx, pageParams });
                  }}
                >
                  <img
                    src={pw.icon}
                    alt={pw.displayName}
                    className={styles.payWayIcon}
                  />
                  <div className={styles.payWayItemRight}>
                    <div
                      className={styles.payWayItemRightText}
                      style={
                        pw.displayName?.length < 35
                          ? {}
                          : {
                              fontSize: '14px',
                            }
                      }
                    >
                      {pw.displayName}
                    </div>
                    <div className={styles.payWayItemRightDesc}>{pw.desc}</div>
                  </div>
                </div>
                {pw.isLast ? null : (
                  <div className={styles.payWayItemDivider} />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
