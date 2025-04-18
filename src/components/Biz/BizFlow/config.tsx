export const Infos: Record<
  //
  // TypePlatform,
  'tronlink' | 'imToken' | 'tokenPocket',
  TypeFlowInfoItem
> = {
  // bitpie: null,
  // coinbase: null,
  // metaMask: null,
  // okex: null,
  // tokenPocket: null,
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
  imToken: {
    wallet: 'imToken',
    chain: 'tron',
    uca: {
      test: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
      main: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    },
    trxLimit: {
      value: 25000000,
      readable: '2.5 TRX',
    },
    amount: '123456789123456789123456789',
  },
  tokenPocket: {
    wallet: 'tokenPocket',
    chain: 'tron',
    uca: {
      test: 'TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf',
      main: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    },
    trxLimit: {
      value: 25000000,
      readable: '2.5 TRX',
    },
    amount: '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  },
} as const;

export const Platforms = Object.keys(Infos).reduce((kPrev, kItem) => {
  if (Infos[kItem] !== null) {
    kPrev.push(kItem);
  }
  return kPrev;
}, [] as string[]);
