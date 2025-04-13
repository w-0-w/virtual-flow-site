import { encodeParamsAsStr } from '@/utils';

import { TypePageParams } from './config';

export const buildFlowPageUrl = ({
  //
  pageOrderHref,
  pageParams,
  platform,
}: {
  pageOrderHref: string;
  pageParams: TypePageParams;
  platform: string;
}) => {
  const fullPathUrl = `${pageOrderHref.split('/order?')?.[0] || ''}/flow`;
  const str = encodeParamsAsStr({
    ...pageParams,
    platform,
  });

  return `${fullPathUrl}?_=${str}`;
};
