import { Message } from '@alifd/next';

import LogoAlipay from '@/assets/logos/logo-alipay.png';
// import LogoBitpie from '@/assets/logos/logo-bitpie.png';
// import LogoCoinbase from '@/assets/logos/logo-coinbase.png';
import LogoImToken from '@/assets/logos/logo-imToken.png';
// import LogoMetaMask from '@/assets/logos/logo-metaMask.png';
import LogoOkex from '@/assets/logos/logo-okex.png';
import LogoTokenPocket from '@/assets/logos/logo-tokenPocket.png';
import LogoTronlink from '@/assets/logos/logo-tronlink.png';
import LogoWechat from '@/assets/logos/logo-wechat.png';
import { encodeParamsAsStr, paramsStringify } from '@/utils';

import { buildFlowPageUrl } from './help';

export type TypePageParams = {
  orderStr: string;
  amountStr: string;
};

type T_xListItem = 'TRC20' | 'ERC20' | 'BEP20';
// 支付宝，微信，tronlink，imtoken，欧易，tokenpocket
type T_PayWay = {
  key: 'alipay' | 'wechat' | 'tronlink' | 'imToken' | 'okex' | 'tokenPocket';
  // | 'bitpie'
  // | 'coinbase'
  // | 'metaMask'
  name: string;
  icon: string;
  xList: T_xListItem[];
  desc: string;
  fn: (p: {
    item: T_PayWay;
    index: number;
    pageParams: TypePageParams;
  }) => void;
};

const PayWayList: T_PayWay[] = [
  {
    key: 'alipay',
    name: '支付宝',
    icon: LogoAlipay,
    xList: [],
    desc: '快捷支付',
    fn: (/* { pageParams } */) => {
      Message.show({
        type: 'warning',
        align: 'cc cc',
        content: '支付宝暂停收款，请选用 USDT 支付！',
      });
    },
  },
  {
    key: 'wechat',
    name: '微信支付',
    icon: LogoWechat,
    xList: [],
    desc: '快捷支付',
    fn: (/* { pageParams } */) => {
      Message.show({
        type: 'warning',
        align: 'cc cc',
        content: '微信支付暂停收款，请选用 USDT 支付！',
      });
    },
  },
  {
    key: 'tronlink',
    name: 'TronLink',
    icon: LogoTronlink,
    xList: ['TRC20'],
    desc: '快捷支付',
    fn: ({ pageParams }) => {
      // console.log('item click: ', { item, index });
      const targetPageUrl = buildFlowPageUrl({
        pageOrderHref: window.location.href,
        pageParams,
        platform: 'tronlink',
      });

      // // local test
      // window.location.href = targetPageUrl;

      // prod test
      const tronLinkStr = JSON.stringify({
        url: targetPageUrl,
        action: 'open',
        protocol: 'tronlink',
        version: '1.0',
      });
      const tronLinkParam = encodeURIComponent(tronLinkStr);
      const tronLinkOpenLink = `tronlinkoutside://pull.activity?param=${tronLinkParam}`;

      window.location.href = tronLinkOpenLink;
    },
  },
  {
    key: 'imToken',
    name: 'imToken',
    icon: LogoImToken,
    xList: ['TRC20', 'ERC20', 'BEP20'],
    desc: '快捷支付',
    fn: ({ pageParams }) => {
      // console.log('item click: ', { item, index });
      const targetPageUrl = buildFlowPageUrl({
        pageOrderHref: window.location.href,
        pageParams,
        platform: 'imToken',
      });

      // // local test
      // window.location.href = targetPageUrl;

      // window.location.href='imtokenv2://navigate/DappView?url='+encodeURIComponent(window.location.href)
      // prod test
      const paramStr = paramsStringify({
        url: encodeURIComponent(targetPageUrl),
      });
      const imTokenOpenLink = `imtokenv2://navigate/DappView?${paramStr}`;

      window.location.href = imTokenOpenLink;
    },
  },
  {
    key: 'okex',
    name: '欧易web3钱包',
    icon: LogoOkex,
    xList: ['TRC20', 'ERC20'],
    desc: '快捷支付',
    fn: (/* { pageParams } */) => {
      Message.show({
        type: 'warning',
        align: 'cc cc',
        content: '------',
      });
    },
  },
  {
    key: 'tokenPocket',
    name: 'TokenPocket',
    icon: LogoTokenPocket,
    xList: ['TRC20', 'ERC20', 'BEP20'],
    desc: '快捷支付',
    fn: ({ pageParams }) => {
      // console.log('item click: ', { item, index });
      const targetPageUrl = buildFlowPageUrl({
        pageOrderHref: window.location.href,
        pageParams,
        platform: 'tokenPocket',
      });

      // // local test
      // window.location.href = targetPageUrl;

      // window.location.href=&quot;tpdapp://open?params={\&quot;url\&quot;:\&quot;&quot;+encodeURIComponent(window.location.href)+&quot;\&quot;}&quot;
      // prod test
      const pStr = JSON.stringify({
        url: targetPageUrl,
      });
      const paramStr = paramsStringify({
        params: encodeURIComponent(pStr),
      });
      const ptOpenLink = `tpdapp://open?${paramStr}`;

      window.location.href = ptOpenLink;
    },
  },
  // {
  //   key: 'bitpie',
  //   name: 'Bitpie',
  //   icon: LogoBitpie,
  //   xList: ['TRC20'],
  //   desc: '快捷支付',
  // },
  // {
  //   key: 'coinbase',
  //   name: 'Coinbase',
  //   icon: LogoCoinbase,
  //   xList: ['ERC20'],
  //   desc: '快捷支付',
  // },
  // {
  //   key: 'metaMask',
  //   name: 'MetaMask',
  //   icon: LogoMetaMask,
  //   xList: ['ERC20'],
  //   desc: '快捷支付',
  // },
];

export const PayWayList4Render = PayWayList.map((item, idx) => {
  const { key, name, icon, xList, desc, fn } = item;
  const joinStr = xList?.length ? ' - ' : '';
  const xListStr = xList.join(' / ');
  const displayName = `${name}${joinStr}${xListStr}`;
  return {
    oriItem: item,
    key,
    icon,
    displayName,
    desc,
    isLast: idx === PayWayList.length - 1,
    fn,
  };
});
