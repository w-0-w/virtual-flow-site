import SvgCS from '@/assets/cs.svg';

import styles from './index.module.css';

export const BizCS = () => {
  return (
    <div className={styles.bizCSWrap}>
      <img
        src={SvgCS}
        className={styles.bizCSImg}
        alt="cs"
      />
      <a
        className={styles.bizCSLink}
        href="https://t.me/accountbuy001"
        target="_blank"
      >
        {' '}
      </a>
    </div>
  );
};
