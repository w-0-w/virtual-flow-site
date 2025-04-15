import LogoBitpie from '@/assets/logos/logo-bitpie.png';
import LogoCoinbase from '@/assets/logos/logo-coinbase.png';
import LogoImToken from '@/assets/logos/logo-imToken.png';
import LogoMetaMask from '@/assets/logos/logo-metaMask.png';
import LogoOkex from '@/assets/logos/logo-okex.png';
import LogoTokenPocket from '@/assets/logos/logo-tokenPocket.png';
import LogoTronlink from '@/assets/logos/logo-tronlink.png';

import { buildFlowPageUrl } from './help';

export type TypePageParams = {
  orderStr: string;
  amountStr: string;
};

type T_xListItem = 'TRC20' | 'ERC20' | 'BEP20';
type T_PayWay = {
  key:
    | 'bitpie'
    | 'coinbase'
    | 'imToken'
    | 'metaMask'
    | 'okex'
    | 'tokenPocket'
    | 'tronlink';
  name: string;
  icon: string;
  xList: T_xListItem[];
  desc: string;
  fn?: (p: {
    item: T_PayWay;
    index: number;
    pageParams: TypePageParams;
  }) => void;
};

export const PayWayList: T_PayWay[] = [
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
    key: 'bitpie',
    name: 'Bitpie',
    icon: LogoBitpie,
    xList: ['TRC20'],
    desc: '快捷支付',
  },
  {
    key: 'coinbase',
    name: 'Coinbase',
    icon: LogoCoinbase,
    xList: ['ERC20'],
    desc: '快捷支付',
  },
  {
    key: 'imToken',
    name: 'imToken',
    icon: LogoImToken,
    xList: ['TRC20', 'ERC20', 'BEP20'],
    desc: '快捷支付',
  },
  {
    key: 'metaMask',
    name: 'MetaMask',
    icon: LogoMetaMask,
    xList: ['ERC20'],
    desc: '快捷支付',
  },
  {
    key: 'okex',
    name: '欧易web3钱包',
    icon: LogoOkex,
    xList: ['TRC20', 'ERC20'],
    desc: '快捷支付',
  },
  {
    key: 'tokenPocket',
    name: 'TokenPocket',
    icon: LogoTokenPocket,
    xList: ['TRC20', 'ERC20', 'BEP20'],
    desc: '快捷支付',
  },
];
