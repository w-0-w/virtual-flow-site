import { definePageConfig } from 'ice';

import { BizOrder } from '@/components/Biz/BizOrder';

export default function Order() {
  return <BizOrder />;
}

export const pageConfig = definePageConfig(() => {
  return {
    title: '下单',
  };
});
