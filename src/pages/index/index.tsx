import { definePageConfig } from 'ice';

import { BizIndex } from '@/components/Biz/BizIndex';

export default function Index() {
  return <BizIndex />;
}

export const pageConfig = definePageConfig(() => {
  return {
    title: '购买',
  };
});
