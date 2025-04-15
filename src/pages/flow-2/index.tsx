import { definePageConfig } from 'ice';

import { BizFlow } from '@/components/Biz/BizFlow';

export default function Flow() {
  return <BizFlow />;
}

export const pageConfig = definePageConfig(() => {
  return {
    title: '立即支付',
  };
});
