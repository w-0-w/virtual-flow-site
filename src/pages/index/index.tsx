import { definePageConfig } from 'ice';

import { NAME, PageMeta } from '@/config/page';
import { BizIndex } from '@/components/Biz/BizIndex';

export default function Index() {
  return <BizIndex />;
}

export const pageConfig = definePageConfig(() => {
  return {
    meta: PageMeta,
    title: NAME,
  };
});
