/// <reference types="@ice/app/types" />

interface Window {
  tron: any;
  tronLink: any;
  tronWeb: any;
}

type TypePlatform =
  | 'bitpie'
  | 'coinbase'
  | 'imToken'
  | 'metaMask'
  | 'okex'
  | 'tokenPocket'
  | 'tronlink';

type TypeXListItem = 'TRC20' | 'ERC20' | 'BEP20';

type TypePayWay = {
  key: TypePlatform;
  name: string;
  icon: string;
  xList: TypeXListItem[];
  desc: string;
  fn?: (p: { item: TypePayWay; index: number }) => void;
};

type TypeWallet =
  | ''
  | 'okxwallet'
  | 'imToken'
  | 'tokenPocket'
  | 'bitKeep'
  | 'tronLink'
  | 'bitpie';

type TypeChain = '' | 'eth' | 'bsc' | 'tron' | 'okxc';

type TypeFlowInfoItem = {
  wallet: TypeWallet;
  chain: TypeChain;
  trxLimit: {
    value: number;
    readable: string;
  };
  amount: string;
};
