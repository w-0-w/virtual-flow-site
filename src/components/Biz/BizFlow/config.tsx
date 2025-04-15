export const Infos: Record<
  //
  // TypePlatform,
  'tronlink',
  TypeFlowInfoItem
> = {
  // bitpie: {},
  // coinbase: {},
  // imToken: {},
  // metaMask: {},
  // okex: {},
  // tokenPocket: {},
  tronlink: {
    wallet: 'tronLink',
    chain: 'tron',
    uca: {
      // Nile测试网USDT合约地址
      test: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
      // 正式地址
      main: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    },
    trxLimit: {
      value: 25000000,
      readable: '2.5 TRX',
    },
    amount:
      '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  },
};
