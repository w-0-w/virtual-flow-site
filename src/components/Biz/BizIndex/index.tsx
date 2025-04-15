import { definePageConfig } from 'ice';

import { FormComp } from './FormComp';

import {
  //
  PageTitle,
} from './config';

import styles from './index.module.css';

export function BizIndex() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderLogo} />
        <div className={styles.pageHeaderText}>{PageTitle}</div>
      </div>
      <div className={styles.pageMiddleStatic} />
      <div className={`${styles.pageBottomBiz} gl-cls-block`}>
        <FormComp />
      </div>
    </div>
  );
}

export const pageConfig = definePageConfig(() => {
  return {
    title: '购买',
  };
});
