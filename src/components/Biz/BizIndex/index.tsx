import { definePageConfig } from 'ice';

import LogoIcon from '@/assets/logo-icon.png';
import HomeBanner from '@/assets/home-banner.jpg';

import { FormComp } from './FormComp';

// import { PageTitle } from './config';

import styles from './index.module.css';

export function BizIndex() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <img
          src={LogoIcon}
          className={styles.pageHeaderLogoIcon}
          alt="logo"
        />
        {/* <div className={styles.pageHeaderLogo} /> */}
        {/* <div className={styles.pageHeaderText}>{PageTitle}</div> */}
      </div>
      <div className={styles.pageMiddleStatic}>
        <img
          src={HomeBanner}
          className={styles.pageMiddleImg}
          alt="banner"
        />
      </div>
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
