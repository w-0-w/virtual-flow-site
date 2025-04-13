export const formItemAttrProps = {
  required: true,
  help: '',
};

export const EmailEmptyTxt = '-';

/**
 * 请看下面注释！！！这还不懂的话那还是算了吧 ╮(╯▽╰)╭
 * 'price-地区id' 里的'地区id'就是 countryArr 数组里对象的 'id'值
 * 如 countryArr 数组中
    {
        id: 2,
        name: 'US/美国',
    }
    则 goodsObject 数据中的 'price-2': 9.99 即为美国的价格

    如 goodsObject 中 "微博产品" 数组的 第二、三个对象 不写price-1 price-2 则统一价格为 price：0.3 ；也可以给某些地区加上price-id给定价格 其余的则用price值统一价格
 */
export const GoodsObject = {
  微博产品: [
    {
      id: 102,
      name: '微博白号',
      price: 0.5, // 若没有提供'price-地区id'键值对(如以下price-1,price-2) 则会用这个price
      'price-1': 0.5, // price-地区id 为对应地区的价格

      stock: 6582,
      deletetime: null,
      incategory_id: 9,
    },
    {
      id: 103,
      name: '微博ck号',
      price: 0.22,
      'price-3': 0.11,
      stock: 54693,
      deletetime: null,
      incategory_id: 9,
    },
    {
      id: 104,
      name: '微博--信用分510以上---6-9级老号',
      price: 2,
      'price-2': 1.9,
      stock: 535,
      deletetime: null,
      incategory_id: 9,
    },
    {
      id: 105,
      name: '微博0-20级',
      price: 2.8,

      stock: 653,
      deletetime: null,
      incategory_id: 9,
    },
    {
      id: 106,
      name: '黄v微博500粉',
      price: 15,

      stock: 363,
      deletetime: null,
      incategory_id: 9,
    },
    {
      id: 107,
      name: '黄v微博2000粉',
      price: 20,
      'price-1': 20,

      stock: 135,
      deletetime: null,
      incategory_id: 9,
    },
  ],
  百度产品: [
    {
      id: 98,
      name: '百度贴吧 手动号',
      price: 0.8,

      stock: 597,
      deletetime: null,
      incategory_id: 10,
    },
    {
      id: 99,
      name: '软件专用号',
      price: 0.18,

      stock: 3525,
      deletetime: null,
      incategory_id: 10,
    },
    {
      id: 100,
      name: '百度网盘账号',
      price: 0.5,

      stock: 1555,
      deletetime: null,
      incategory_id: 10,
    },
    {
      id: 101,
      name: '百度网盘账号 VIP',
      price: 3.5,

      stock: 876,
      deletetime: null,
      incategory_id: 10,
    },
    {
      id: 231,
      name: '百家号',
      price: 2,
      'price-1': 2,

      stock: 85,
      deletetime: null,
      incategory_id: 10,
    },
  ],
  sou灵魂产品: [
    {
      id: 94,
      name: 'sou灵魂白号',
      price: 1.5,

      stock: 868,
      deletetime: null,
      incategory_id: 11,
    },
    {
      id: 95,
      name: '满月实名',
      price: 15,

      stock: 163,
      deletetime: null,
      incategory_id: 11,
    },
    {
      id: 96,
      name: '半年实名',
      price: 25,

      stock: 335,
      deletetime: null,
      incategory_id: 11,
    },
    {
      id: 97,
      name: '一年实名',
      price: 29,
      'price-1': 29,

      stock: 46,
      deletetime: null,
      incategory_id: 11,
    },
  ],
  小红书产品: [
    {
      id: 88,
      name: '小红书白号',
      price: 0.8,

      stock: 3663,
      deletetime: null,
      incategory_id: 12,
    },
    {
      id: 89,
      name: '小红书实名号  【7-15天】',
      price: 9,

      stock: 227,
      deletetime: null,
      incategory_id: 12,
    },
    {
      id: 90,
      name: '小红书半年实名',
      price: 15,

      stock: 252,
      deletetime: null,
      incategory_id: 12,
    },
    {
      id: 91,
      name: '小红书一年实名',
      price: 20,

      stock: 252,
      deletetime: null,
      incategory_id: 12,
    },
    {
      id: 92,
      name: '小红书千粉实名',
      price: 20,

      stock: 63,
      deletetime: null,
      incategory_id: 12,
    },
    {
      id: 93,
      name: '小红书万粉实名',
      price: 85,
      'price-1': 40,

      stock: 25,
      deletetime: null,
      incategory_id: 12,
    },
  ],
  珍爱网实名号: [
    {
      id: 84,
      name: '珍爱白号',
      price: 2,

      stock: 597,
      deletetime: null,
      incategory_id: 13,
    },
    {
      id: 85,
      name: '实名不带会员 满月号',
      price: 15,

      stock: 264,
      deletetime: null,
      incategory_id: 13,
    },
    {
      id: 86,
      name: '实名不带会员 半年号',
      price: 20,

      stock: 252,
      deletetime: null,
      incategory_id: 13,
    },
    {
      id: 87,
      name: '实名不带会员  一年号',
      price: 25,

      stock: 47,
      deletetime: null,
      incategory_id: 13,
    },
    {
      id: 171,
      name: '实名带3个月会员号',
      price: 45,
      'price-1': 45,

      stock: 20,
      deletetime: null,
      incategory_id: 13,
    },
  ],
  陌陌实名号: [
    {
      id: 30,
      name: '未实名05-09级【5-9月】',
      price: 10,

      stock: 664,
      deletetime: null,
      incategory_id: 14,
    },
    {
      id: 31,
      name: '未实名10-12级【6-12月】',
      price: 12,

      stock: 646,
      deletetime: null,
      incategory_id: 14,
    },
    {
      id: 32,
      name: '私人直登未实名20-29（8-9年)活跃',
      price: 14,

      stock: 363,
      deletetime: null,
      incategory_id: 14,
    },
    {
      id: 33,
      name: '实名15-20级【6-12月】',
      price: 19,

      stock: 333,
      deletetime: null,
      incategory_id: 14,
    },
    {
      id: 34,
      name: '实名20-29级【6-12月】',
      price: 21,

      stock: 246,
      deletetime: null,
      incategory_id: 14,
    },
    {
      id: 35,
      name: '私人直登实名15-19级(8-9年)活跃',
      price: 23,

      stock: 222,
      deletetime: null,
      incategory_id: 14,
    },
    {
      id: 36,
      name: '实名30-35级【1-5年】',
      price: 25,
      'price-1': 25,

      stock: 97,
      deletetime: null,
      incategory_id: 14,
    },
  ],
  探探实名号: [
    {
      id: 79,
      name: '探探白号',
      price: 1.5,

      stock: 709,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 80,
      name: '满月实名号',
      price: 10,

      stock: 367,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 81,
      name: '半年实名号',
      price: 15,

      stock: 322,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 82,
      name: '一年实名号',
      price: 20,

      stock: 252,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 83,
      name: '两年实名号',
      price: 26,

      stock: 46,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 245,
      name: '探探实名号（带1个月会员）联系客服开通',
      price: 3.5,

      stock: 9,
      deletetime: null,
      incategory_id: 15,
    },
  ],
  代实名业务: [
    {
      id: 790,
      name: '微信/QQ代实名',
      price: 5,

      stock: 710,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 791,
      name: '支付宝代实名',
      price: 5,

      stock: 397,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 792,
      name: '抖音/快手代实名',
      price: 5,

      stock: 3222,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 793,
      name: '淘宝/闲鱼代实名',
      price: 5,

      stock: 252,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 794,
      name: '国外代实名业务',
      price: 5,

      stock: 46,
      deletetime: null,
      incategory_id: 15,
    },
    {
      id: 795,
      name: '其他代实名',
      price: 5,

      stock: 9,
      deletetime: null,
      incategory_id: 15,
    },
  ],
  快手产品: [
    {
      id: 108,
      name: '快手  白号',
      price: 0.8,

      stock: 6376,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 109,
      name: '快手满月实名号',
      price: 8.8,

      stock: 333,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 110,
      name: '快手半年实名号',
      price: 12.8,

      stock: 704,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 111,
      name: '快手一年实名号',
      price: 15.8,

      stock: 332,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 112,
      name: '快手私人千粉号【真实粉丝】',
      price: 18.8,

      stock: 373,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 240,
      name: '快手万粉号（游戏领域）',
      price: 100,

      stock: 3,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 241,
      name: '快手万粉号（美女号）',
      price: 100,

      stock: 15,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 242,
      name: '快手万粉号（好物推荐）',
      price: 100,

      stock: 14,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 243,
      name: '快手万粉号（宠物号）',
      price: 100,

      stock: 9,
      deletetime: null,
      incategory_id: 16,
    },
    {
      id: 244,
      name: '快手万粉号（影视号）',
      price: 100,

      stock: 6,
      deletetime: null,
      incategory_id: 16,
    },
  ],
  抖音产品: [
    {
      id: 73,
      name: '抖音白号。【新注册3-7天】',
      price: 2.5,

      stock: 579,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 74,
      name: '满月实名号',
      price: 9.5,

      stock: 363,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 75,
      name: '半年实名号',
      price: 15,

      stock: 265,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 76,
      name: '一年实名号（等级1）',
      price: 20,

      stock: 246,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 77,
      name: '千粉私人号（等级2）',
      price: 30,

      stock: 362,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 78,
      name: '万粉私人号（等级3）',
      price: 68,

      stock: 333,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 78,
      name: '抖音黄V号',
      price: 35,

      stock: 89,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 147,
      name: '抖音苹果ID登录【佐罗实名号】',
      price: 13,

      stock: 74,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 148,
      name: '抖音TOKEN号，CK号【满月】',
      price: 3,

      stock: 650,
      deletetime: null,
      incategory_id: 17,
    },
    {
      id: 170,
      name: '抖音蓝V号',
      price: 45,
      'price-1': 45,

      stock: 18,
      deletetime: null,
      incategory_id: 17,
    },
  ],
  世纪佳缘实名号: [
    {
      id: 69,
      name: '世纪佳缘白号',
      price: 2.5,

      stock: 377,
      deletetime: null,
      incategory_id: 18,
    },
    {
      id: 70,
      name: '满月带会员',
      price: 20,

      stock: 373,
      deletetime: null,
      incategory_id: 18,
    },
    {
      id: 71,
      name: '半年带会员',
      price: 25,

      stock: 153,
      deletetime: null,
      incategory_id: 18,
    },
    {
      id: 72,
      name: '一年带会员',
      price: 30,
      'price-1': 30,

      stock: 135,
      deletetime: null,
      incategory_id: 18,
    },
  ],
  钉钉实名账号: [
    {
      id: 65,
      name: '钉钉白号',
      price: 0.5,

      stock: 997,
      deletetime: null,
      incategory_id: 19,
    },
    {
      id: 66,
      name: '满月双认证',
      price: 15,

      stock: 246,
      deletetime: null,
      incategory_id: 19,
    },
    {
      id: 67,
      name: '半年双认证',
      price: 20,

      stock: 265,
      deletetime: null,
      incategory_id: 19,
    },
    {
      id: 68,
      name: '一年双认证',
      price: 26,
      'price-1': 26,

      stock: 153,
      deletetime: null,
      incategory_id: 19,
    },
  ],
  京东账号: [
    {
      id: 62,
      name: '京东账号新号',
      price: 2.5,

      stock: 1567,
      deletetime: null,
      incategory_id: 20,
    },
    {
      id: 64,
      name: '京东账号实名带支付密码',
      price: 18,

      stock: 363,
      deletetime: null,
      incategory_id: 20,
    },
    {
      id: 189,
      name: '京东企业号',
      price: 85,
      'price-1': 85,

      stock: 35,
      deletetime: null,
      incategory_id: 20,
    },
  ],
  微信公众号: [
    {
      id: 113,
      name: '微信公众号（订阅号，可评论）：现货(名称随机) 现货（名字：XX网络XX科技XX信息XX商贸）',
      price: 35,

      stock: 13,
      deletetime: null,
      incategory_id: 21,
    },
    {
      id: 114,
      name: '微信公众号(订阅号)：定制(指定名称) 定制（提供指定名称包认证通过 被占用除外）',
      price: 45,

      stock: 1,
      deletetime: null,
      incategory_id: 21,
    },
    {
      id: 246,
      name: '微信公众号(服务号)：定制(指定名称) 定制（提供指定名称包认证通过 被占用除外）',
      price: 45,

      stock: 1,
      deletetime: null,
      incategory_id: 21,
    },
    {
      id: 247,
      name: '微信公众号（服务号，可评论）：现货(名称随机) 现货（名字：XX网络XX科技XX信息XX商贸）',
      price: 35,

      stock: 8,
      deletetime: null,
      incategory_id: 21,
    },
  ],
  企业微信产品: [
    {
      id: 47,
      name: '公司绿主体号',
      price: 65,

      stock: 34,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 48,
      name: '个体绿主体号',
      price: 45,

      stock: 34,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 49,
      name: '白标主体号',
      price: 26,

      stock: 164,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 50,
      name: '2021年公司绿标',
      price: 70,

      stock: 25,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 51,
      name: '2020年公司绿标',
      price: 80,

      stock: 17,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 52,
      name: '2019年公司绿标',
      price: 105,

      stock: 16,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 53,
      name: '企业微信主体红标：当天',
      price: 9.5,

      stock: 333,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 54,
      name: '企业微信主体红标：满月',
      price: 13,

      stock: 246,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 55,
      name: '企业微信主体红标：2-10月',
      price: 15,

      stock: 223,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 56,
      name: '企业微信主体红标：20年',
      price: 35,

      stock: 135,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 57,
      name: '企业微信主体白标：新白',
      price: 15,

      stock: 34,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 58,
      name: '企业微信主体白标：20年',
      price: 55,

      stock: 62,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 59,
      name: '当天团队号',
      price: 16,

      stock: 336,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 60,
      name: '红白绿客服号',
      price: 20,

      stock: 264,
      deletetime: null,
      incategory_id: 22,
    },
    {
      id: 61,
      name: '国内万人绿子号',
      price: 45,
      'price-1': 45,

      stock: 212,
      deletetime: null,
      incategory_id: 22,
    },
  ],
  闲鱼实名账号: [
    {
      id: 131,
      name: '闲鱼白号【未实名】',
      price: 1.5,

      stock: 663,
      deletetime: null,
      incategory_id: 23,
    },
    {
      id: 132,
      name: '闲鱼白号【已实名】',
      price: 15,

      stock: 67,
      deletetime: null,
      incategory_id: 23,
    },
    {
      id: 133,
      name: '闲鱼白号【未实名】1-8年老号',
      price: 10,

      stock: 373,
      deletetime: null,
      incategory_id: 23,
    },
    {
      id: 134,
      name: '闲鱼白号【已实名】1-8年老号',
      price: 26,

      stock: 74,
      deletetime: null,
      incategory_id: 23,
    },
    {
      id: 248,
      name: '闲鱼认证【实名、支付宝认证】',
      price: 20,

      stock: 20,
      deletetime: null,
      incategory_id: 23,
    },
  ],
  '手机卡/移动联通电信卡流量卡(已实名/0月租)': [
    {
      id: 40,
      name: '广电电话卡',
      price: 40,

      stock: 979,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 41,
      name: '香港跨境王',
      price: 35,

      stock: 853,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 42,
      name: '香港流量王 联通',
      price: 45,

      stock: 574,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 43,
      name: '联通流量卡',
      price: 20,

      stock: 695,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 44,
      name: '电信流量卡',
      price: 25,

      stock: 647,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 45,
      name: '联通电销卡',
      price: 60,

      stock: 242,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 46,
      name: '电信实名卡【买断邮寄】下单后需发邮寄地址给客服',
      price: 55,

      stock: 534,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 144,
      name: '联通实名卡【买断邮寄】下单后需发邮寄地址给客服',
      price: 50,

      stock: 162,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 178,
      name: '台湾中华电信流量卡(30天1000GB)下单后需发邮寄地址给客服',
      price: 35,

      stock: 33,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 192,
      name: '移动电销卡',
      price: 65,

      stock: 65,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 193,
      name: '电信电销卡',
      price: 70,

      stock: 43,
      deletetime: null,
      incategory_id: 24,
    },
    {
      id: 224,
      name: '台湾中华电信电话卡(10GB上网流量300分钟通话)',
      price: 21,

      stock: 52,
      deletetime: null,
      incategory_id: 24,
    },
  ],
  支付宝业务: [
    {
      id: 24,
      name: '直登V2老龄支付宝【永久使用永不找回】',
      price: 23,

      stock: 80,
      deletetime: null,
      incategory_id: 25,
    },
    {
      id: 25,
      name: '直登V3老龄支付宝【永久使用永不找回】',
      price: 25,

      stock: 69,
      deletetime: null,
      incategory_id: 25,
    },
    {
      id: 25,
      name: '个人V2环境号（稳如老狗/直接甩包给你）',
      price: 18,

      stock: 69,
      deletetime: null,
      incategory_id: 25,
    },
    {
      id: 25,
      name: '企业产品主号号（面列表产品都可以代开）',
      price: 130,

      stock: 69,
      deletetime: null,
      incategory_id: 25,
    },
    {
      id: 28,
      name: '企业支付宝主号 ',
      price: 85,

      stock: 26,
      deletetime: null,
      incategory_id: 25,
    },
    {
      id: 29,
      name: '企业支付宝子号',
      price: 45,
      'price-1': 45,

      stock: 46,
      deletetime: null,
      incategory_id: 25,
    },
  ],
  QQ业务: [
    {
      id: 15,
      name: 'QQ邮箱',
      price: 0.05,

      stock: 680,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 16,
      name: 'QQ号出售【星星直登】（不可解封） ',
      price: 1,

      stock: 979,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 17,
      name: 'QQ号出售【月亮直登】（不可解封） ',
      price: 1.5,

      stock: 879,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 18,
      name: 'QQ号出售【单太直登】 （不可解封）',
      price: 3,

      stock: 543,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 19,
      name: '纯私人单太QQ直登可改绑',
      price: 6,

      stock: 79,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 20,
      name: '纯私人双太QQ直登可改绑',
      price: 9,

      stock: 69,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 21,
      name: '纯私人三太QQ直登可改绑',
      price: 15,

      stock: 47,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 22,
      name: 'QQ靓号',
      price: 5,
      'price-1': 5,

      stock: 376,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 23,
      name: '纯私人9位皇冠QQ直登可改绑',
      price: 25,

      stock: 23,
      deletetime: null,
      incategory_id: 26,
    },
    {
      id: 268,
      name: '企业QQ(每工号)',
      price: 200,
      'price-1': 200,

      stock: 50,
      deletetime: null,
      incategory_id: 26,
    },
  ],
  微信业务: [
    {
      id: 6,
      name: '8-15天手工精养实名绑卡带支付',
      price: 15,

      stock: 363,
      deletetime: null,
      incategory_id: 27,
    },
    {
      id: 7,
      name: '满月手工精养实名绑卡带支付',
      price: 25,

      stock: 276,
      deletetime: null,
      incategory_id: 27,
    },
    {
      id: 8,
      name: '私人3月号带实名带账单带圈带支付',
      price: 30,

      stock: 264,
      deletetime: null,
      incategory_id: 27,
    },
    {
      id: 9,
      name: '私人半年号带实名带账单带圈带支付',
      price: 35,

      stock: 163,
      deletetime: null,
      incategory_id: 27,
    },
    {
      id: 10,
      name: '私人一年号带实名带账单带圈带支付',
      price: 40,

      stock: 146,
      deletetime: null,
      incategory_id: 27,
    },
    {
      id: 11,
      name: '私人两年号带实名带账单带圈带支付',
      price: 45,

      stock: 79,
      deletetime: null,
      incategory_id: 27,
    },
    {
      id: 12,
      name: '私人三年号带实名带账单带圈带支付',
      price: 50,

      stock: 64,
      deletetime: null,
      incategory_id: 27,
    },
    {
      id: 13,
      name: '私人四年号带实名带账单带圈带支付',
      price: 55,

      stock: 34,
      deletetime: null,
      incategory_id: 27,
    },
  ],
  '苹果 ID/apple id': [
    {
      id: 115,
      name: '美国苹果ID账号独享带密保（五年以上）',
      price: 3,

      stock: 252,
      deletetime: null,
      incategory_id: 28,
    },
    {
      id: 116,
      name: '小火箭id购买',
      price: 3,

      stock: 525,
      deletetime: null,
      incategory_id: 28,
    },
    {
      id: 117,
      name: '国外id共享',
      price: 0.3,

      stock: 456,
      deletetime: null,
      incategory_id: 28,
    },
    {
      id: 118,
      name: '小火箭id【共享】',
      price: 0.6,

      stock: 266,
      deletetime: null,
      incategory_id: 28,
    },
    {
      id: 139,
      name: '美国苹果ID购买独享【带密保】【3年】',
      price: 2.5,

      stock: 46,
      deletetime: null,
      incategory_id: 28,
    },
    {
      id: 140,
      name: '德国苹果ID购买独享【带密保】【1年】',
      price: 2.5,

      stock: 56,
      deletetime: null,
      incategory_id: 28,
    },
    {
      id: 141,
      name: '中国苹果ID购买独享【带密保】【3年】',
      price: 2.5,

      stock: 58,
      deletetime: null,
      incategory_id: 28,
    },
    {
      id: 239,
      name: '苹果开发者个人账户',
      price: 99,

      stock: 12,
      deletetime: null,
      incategory_id: 28,
    },
  ],
  知乎账号: [
    {
      id: 119,
      name: '知乎账号【新号】',
      price: 0.5,

      stock: 1553,
      deletetime: null,
      incategory_id: 29,
    },
    {
      id: 120,
      name: '知乎盐值350分',
      price: 1.5,
      'price-1': 1.5,

      stock: 264,
      deletetime: null,
      incategory_id: 29,
    },
  ],
  淘宝阿里巴巴1688: [
    {
      id: 121,
      name: '淘宝卖家账号1心店铺',
      price: 15,

      stock: 252,
      deletetime: null,
      incategory_id: 30,
    },
    {
      id: 122,
      name: '淘宝卖家账号3心店铺',
      price: 17,

      stock: 153,
      deletetime: null,
      incategory_id: 30,
    },
    {
      id: 123,
      name: '淘宝卖家账号1钻石店铺',
      price: 33,

      stock: 43,
      deletetime: null,
      incategory_id: 30,
    },
    {
      id: 128,
      name: '淘宝买家号3钻',
      price: 25,

      stock: 647,
      deletetime: null,
      incategory_id: 30,
    },
    {
      id: 129,
      name: '淘宝买家号5钻',
      price: 35,

      stock: 242,
      deletetime: null,
      incategory_id: 30,
    },
    {
      id: 130,
      name: '淘宝买家号88VIP',
      price: 15,

      stock: 47,
      deletetime: null,
      incategory_id: 30,
    },
    {
      id: 168,
      name: '阿里巴巴买家号',
      price: 0.7,

      stock: 36,
      deletetime: null,
      incategory_id: 30,
    },
    {
      id: 169,
      name: '阿里巴巴商家号',
      price: 15,

      stock: 29,
      deletetime: null,
      incategory_id: 30,
    },
    {
      id: 223,
      name: '淘特卖家号',
      price: 17,
      'price-1': 17,

      stock: 23,
      deletetime: null,
      incategory_id: 30,
    },
  ],
  拼多多账号: [
    {
      id: 124,
      name: '拼多多买家号',
      price: 8,

      stock: 643,
      deletetime: null,
      incategory_id: 31,
    },
    {
      id: 125,
      name: '拼多多实名老号',
      price: 26,
      'price-1': 26,

      stock: 132,
      deletetime: null,
      incategory_id: 31,
    },
  ],
  '阿里云/腾讯云/华为云(账号)': [
    {
      id: 172,
      name: '阿里云未实名',
      price: 1,

      stock: 23,
      deletetime: null,
      incategory_id: 32,
    },
    {
      id: 173,
      name: '阿里云已实名账户',
      price: 60,

      stock: 25,
      deletetime: null,
      incategory_id: 32,
    },
    {
      id: 174,
      name: '腾讯云未实名账户',
      price: 1,

      stock: 44,
      deletetime: null,
      incategory_id: 32,
    },
    {
      id: 175,
      name: '腾讯云已实名账号',
      price: 60,

      stock: 26,
      deletetime: null,
      incategory_id: 32,
    },
    {
      id: 176,
      name: '华为云未实名',
      price: 1,

      stock: 18,
      deletetime: null,
      incategory_id: 32,
    },
    {
      id: 177,
      name: '华为云已实名',
      price: 60,
      'price-1': 60,

      stock: 19,
      deletetime: null,
      incategory_id: 32,
    },
  ],
  蝙蝠账号: [
    {
      id: 126,
      name: '蝙蝠账号新号',
      price: 0.5,

      stock: 466,
      deletetime: null,
      incategory_id: 37,
    },
    {
      id: 127,
      name: '蝙蝠账号一年以上老号',
      price: 15,

      stock: 373,
      deletetime: null,
      incategory_id: 37,
    },
  ],
  伊对账号: [
    {
      id: 135,
      name: '伊对白号',
      price: 1.3,

      stock: 634,
      deletetime: null,
      incategory_id: 38,
    },
    {
      id: 136,
      name: '伊对实名号【7-15天】',
      price: 14,

      stock: 363,
      deletetime: null,
      incategory_id: 38,
    },
    {
      id: 137,
      name: '伊对实名号【满月号】',
      price: 18,

      stock: 67,
      deletetime: null,
      incategory_id: 38,
    },
    {
      id: 138,
      name: '伊对实名号【3-6个月号】',
      price: 25,

      stock: 43,
      deletetime: null,
      incategory_id: 38,
    },
  ],
  今日头条账户: [
    {
      id: 142,
      name: '头条新号',
      price: 3.5,

      stock: 663,
      deletetime: null,
      incategory_id: 39,
    },
    {
      id: 143,
      name: '今日头条【半年号】',
      price: 5.5,

      stock: 147,
      deletetime: null,
      incategory_id: 39,
    },
  ],
  '58同城账户': [
    {
      id: 145,
      name: '58同城新号',
      price: 2.5,

      stock: 707,
      deletetime: null,
      incategory_id: 40,
    },
    {
      id: 146,
      name: '58同城实名认证',
      price: 13.5,

      stock: 74,
      deletetime: null,
      incategory_id: 40,
    },
    {
      id: 198,
      name: '58企业认证号',
      price: 30,
      'price-1': 30,

      stock: 12,
      deletetime: null,
      incategory_id: 40,
    },
  ],
  '哔哩哔哩 B站账号': [
    {
      id: 149,
      name: 'B站 4级号',
      price: 3.5,

      stock: 52,
      deletetime: null,
      incategory_id: 41,
    },
    {
      id: 150,
      name: 'B站5级号',
      price: 5.5,

      stock: 25,
      deletetime: null,
      incategory_id: 41,
    },
    {
      id: 151,
      name: 'B站 6级号',
      price: 6,
      'price-1': 6,

      stock: 98,
      deletetime: null,
      incategory_id: 41,
    },
  ],
  转转二手账户: [
    {
      id: 152,
      name: '未实名白号',
      price: 3.5,

      stock: 65,
      deletetime: null,
      incategory_id: 42,
    },
    {
      id: 153,
      name: '已实名满月号',
      price: 8.5,

      stock: 74,
      deletetime: null,
      incategory_id: 42,
    },
    {
      id: 154,
      name: '转转已实名 半年号',
      price: 10,
      'price-1': 10,

      stock: 53,
      deletetime: null,
      incategory_id: 42,
    },
  ],
  连信: [
    {
      id: 155,
      name: '连信',
      price: 0.15,
      'price-1': 0.15,

      stock: 552,
      deletetime: null,
      incategory_id: 43,
    },
  ],
  他趣: [
    {
      id: 156,
      name: '他趣新号',
      price: 0.6,

      stock: 46,
      deletetime: null,
      incategory_id: 44,
    },
    {
      id: 157,
      name: '他趣半年老号',
      price: 5,
      'price-1': 1.6,

      stock: 70,
      deletetime: null,
      incategory_id: 44,
    },
  ],
  蚂蚁邀请码: [
    {
      id: 158,
      name: '蚂蚁邀请码',
      price: 1,

      stock: 153,
      deletetime: null,
      incategory_id: 45,
    },
  ],
  企业邮箱: [
    {
      id: 159,
      name: '腾讯企业邮箱',
      price: 10,

      stock: 34,
      deletetime: null,
      incategory_id: 46,
    },
    {
      id: 160,
      name: '网易企业邮箱',
      price: 12,

      stock: 25,
      deletetime: null,
      incategory_id: 46,
    },
    {
      id: 161,
      name: '搜狐企业邮箱',
      price: 9,

      stock: 47,
      deletetime: null,
      incategory_id: 46,
    },
    {
      id: 162,
      name: '新浪企业邮箱',
      price: 8,
      'price-1': 8,

      stock: 56,
      deletetime: null,
      incategory_id: 46,
    },
  ],
  YY账号: [
    {
      id: 163,
      name: 'YY新号',
      price: 0.3,
      stock: 234,
      deletetime: null,
      incategory_id: 47,
    },
    {
      id: 164,
      name: 'YY半年号',
      price: 1.5,
      'price-1': 1.5,

      stock: 55,
      deletetime: null,
      incategory_id: 47,
    },
  ],
  TT账号: [
    {
      id: 300,
      name: 'TT新号',
      price: 0.3,
      stock: 277,
      deletetime: null,
      incategory_id: 47,
    },
    {
      id: 301,
      name: 'TT半年号',
      price: 1.5,
      'price-1': 1.5,

      stock: 75,
      deletetime: null,
      incategory_id: 47,
    },
  ],
  blued: [
    {
      id: 163,
      name: 'blued新号',
      price: 0.3,

      stock: 34,
      deletetime: null,
      incategory_id: 47,
    },
    {
      id: 164,
      name: 'blued(半年老号)',
      price: 3,
      'price-1': 3,

      stock: 47,
      deletetime: null,
      incategory_id: 47,
    },
  ],
  walmart沃尔玛: [
    {
      id: 165,
      name: '新号(15-30天)',
      price: 0.4,

      stock: 36,
      deletetime: null,
      incategory_id: 48,
    },
    {
      id: 166,
      name: '老号(半年-1年)',
      price: 1.1,

      stock: 44,
      deletetime: null,
      incategory_id: 48,
    },
    {
      id: 167,
      name: '老号有购买记录(半年-1年)',
      price: 5,

      stock: 28,
      deletetime: null,
      incategory_id: 48,
    },
  ],
  'vpn小火箭机场节点/clash节点': [
    {
      id: 180,
      name: '香港节点(50G)一个月',
      price: 1,

      stock: 65,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 181,
      name: '台湾节点(50G)一个月',
      price: 1,

      stock: 47,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 182,
      name: '日本节点(50G)一个月',
      price: 1,

      stock: 52,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 183,
      name: '新加坡节点(50G)一个月',
      price: 1,

      stock: 56,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 184,
      name: '美国节点(50G)一个月',
      price: 1,

      stock: 85,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 185,
      name: '英国节点(50G)一个月',
      price: 1,

      stock: 36,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 186,
      name: '土耳其节点(50G)一个月',
      price: 1,

      stock: 34,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 187,
      name: '巴西节点(50G)一个月',
      price: 1,

      stock: 36,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 212,
      name: '上海节点(50G)一个月',
      price: 1,

      stock: 34,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 213,
      name: '广州节点(50G)一个月',
      price: 1,

      stock: 56,
      deletetime: null,
      incategory_id: 49,
    },
  ],
  豆瓣: [
    {
      id: 188,
      name: '豆瓣小号',
      price: 0.5,
      'price-1': 0.6,

      stock: 89,
      deletetime: null,
      incategory_id: 50,
    },
  ],
  数据号业务: [
    {
      id: 180,
      name: '和平数据号20-100级(无人脸,下单备注安卓/ios)',
      price: 0.2,

      stock: 65,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 181,
      name: '和平数据号50-99级(无人脸,99%带皮肤)',
      price: 1,

      stock: 47,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 182,
      name: '和平数据号超高极品号',
      price: 3,

      stock: 52,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 183,
      name: '三角洲18-80级',
      price: 1.5,

      stock: 56,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 184,
      name: '火影忍者高质量',
      price: 1,

      stock: 85,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 185,
      name: 'DY追踪',
      price: 1,

      stock: 36,
      deletetime: null,
      incategory_id: 49,
    },
    {
      id: 186,
      name: '其他数据号(联系客服咨询)',
      price: 1,

      stock: 34,
      deletetime: null,
      incategory_id: 49,
    },
  ],
  美团: [
    {
      id: 190,
      name: '美团小号',
      price: 0.3,

      stock: 123,
      deletetime: null,
      incategory_id: 51,
    },
    {
      id: 191,
      name: '美团商家号',
      price: 35,
      'price-1': 35,

      stock: 36,
      deletetime: null,
      incategory_id: 51,
    },
  ],
  银行卡四件套: [
    {
      id: 194,
      name: '银行卡（一类卡）+盾+手机卡+身份复印件 【原件照片 】 【对公】出售！',
      price: 2000,

      stock: 12,
      deletetime: null,
      incategory_id: 52,
    },
    {
      id: 195,
      name: '银行卡（二类卡）+盾+手机卡+身份复印件 【原件照片 】 【对公】出售！',
      price: 400,

      stock: 20,
      deletetime: null,
      incategory_id: 52,
    },
  ],
  滴滴出行: [
    {
      id: 196,
      name: '乘客实名账号',
      price: 15,

      stock: 13,
      deletetime: null,
      incategory_id: 53,
    },
    {
      id: 197,
      name: '滴滴司机实名认证号',
      price: 40,

      stock: 25,
      deletetime: null,
      incategory_id: 53,
    },
  ],
  代理ip: [
    {
      id: 199,
      name: '德国住宅ip（1天）',
      price: 0.1,

      stock: 99,
      deletetime: null,
      incategory_id: 54,
    },
    {
      id: 200,
      name: '美国住宅ip（1天）',
      price: 0.1,

      stock: 78,
      deletetime: null,
      incategory_id: 54,
    },
    {
      id: 201,
      name: '香港住宅ip（1天）',
      price: 0.1,

      stock: 55,
      deletetime: null,
      incategory_id: 54,
    },
    {
      id: 202,
      name: '日本东京住宅ip（1天）',
      price: 0.11,

      stock: 56,
      deletetime: null,
      incategory_id: 54,
    },
    {
      id: 203,
      name: '韩国首尔住宅ip（1天）',
      price: 0.11,

      stock: 63,
      deletetime: null,
      incategory_id: 54,
    },
    {
      id: 204,
      name: '英国住宅ip（1天）',
      price: 0.12,

      stock: 63,
      deletetime: null,
      incategory_id: 54,
    },
    {
      id: 205,
      name: '以色列住宅ip（1天）',
      price: 0.1,

      stock: 66,
      deletetime: null,
      incategory_id: 54,
    },
    {
      id: 216,
      name: '广州住宅ip（1天）',
      price: 1,

      stock: 51,
      deletetime: null,
      incategory_id: 54,
    },
    {
      id: 217,
      name: '上海住宅ip（1天）',
      price: 1,
      'price-1': 1,

      stock: 65,
      deletetime: null,
      incategory_id: 54,
    },
  ],
  积目: [
    {
      id: 206,
      name: '积目白号（7-15天）',
      price: 0.3,

      stock: 151,
      deletetime: null,
      incategory_id: 56,
    },
    {
      id: 207,
      name: '积目老号（30-90天）',
      price: 1.6,

      stock: 50,
      deletetime: null,
      incategory_id: 56,
    },
  ],
  智联招聘: [
    {
      id: 208,
      name: '智联招聘企业号(网络公司主体，已认证)',
      price: 20,

      stock: 6,
      deletetime: null,
      incategory_id: 57,
    },
  ],
  'vivo/oppo/小米': [
    {
      id: 209,
      name: '小米账号',
      price: 0.9,

      stock: 22,
      deletetime: null,
      incategory_id: 58,
    },
    {
      id: 210,
      name: 'oppo账号',
      price: 0.8,

      stock: 12,
      deletetime: null,
      incategory_id: 58,
    },
    {
      id: 211,
      name: 'vivo账号',
      price: 0.8,
      'price-1': 0.8,

      stock: 23,
      deletetime: null,
      incategory_id: 58,
    },
  ],
  boss直聘: [
    {
      id: 214,
      name: 'boss直聘企业号/招聘号(已认证)',
      price: 30,

      stock: 23,
      deletetime: null,
      incategory_id: 60,
    },
    {
      id: 215,
      name: 'boss直聘找工作号(个人号已实名)',
      price: 7,

      stock: 36,
      deletetime: null,
      incategory_id: 60,
    },
  ],
  宝塔: [
    {
      id: 218,
      name: '宝塔面板账号',
      price: 5,
      'price-1': 5,

      stock: 25,
      deletetime: null,
      incategory_id: 61,
    },
  ],
  'openvpn/letsvpn': [
    {
      id: 219,
      name: 'openvpn香港节点(50G 1个月)',
      price: 1,

      stock: 23,
      deletetime: null,
      incategory_id: 62,
    },
    {
      id: 240,
      name: 'letsvpn快连/月(购买几个月就拍几个数量)',
      price: 3.5,

      stock: 36,
      deletetime: null,
      incategory_id: 62,
    },
    {
      id: 220,
      name: 'openvpn美国节点(50G 1个月)',
      price: 0.9,

      stock: 55,
      deletetime: null,
      incategory_id: 62,
    },
    {
      id: 221,
      name: 'openvpn台湾节点(50G 1个月)',
      price: 1,

      stock: 36,
      deletetime: null,
      incategory_id: 62,
    },
    {
      id: 222,
      name: 'openvpn日本节点(50G 1个月)',
      price: 1,

      stock: 25,
      deletetime: null,
      incategory_id: 62,
    },
  ],
  身份证: [
    {
      id: 225,
      name: '身份证10张(1990-2005年)',
      price: 12,

      stock: 562,
      deletetime: null,
      incategory_id: 64,
    },
    {
      id: 226,
      name: '身份证10张(1960-1969年)',
      price: 12,

      stock: 265,
      deletetime: null,
      incategory_id: 64,
    },
    {
      id: 227,
      name: '身份证10张(1980-1989年)',
      price: 12,

      stock: 655,
      deletetime: null,
      incategory_id: 64,
    },
    {
      id: 228,
      name: '身份证10张(1970-1979年)',
      price: 12,

      stock: 456,
      deletetime: null,
      incategory_id: 64,
    },
  ],
  微信辅助: [
    {
      id: 229,
      name: '微信解封',
      price: 10,

      stock: 999,
      deletetime: null,
      incategory_id: 65,
    },
    {
      id: 230,
      name: '微信认证',
      price: 25,
      'price-1': 25,

      stock: 999,
      deletetime: null,
      incategory_id: 65,
    },
  ],
  搜狐号: [
    {
      id: 232,
      name: '搜狐号(游戏领域)',
      price: 5,

      stock: 54,
      deletetime: null,
      incategory_id: 66,
    },
    {
      id: 233,
      name: '搜狐号(财经领域)',
      price: 5,

      stock: 87,
      deletetime: null,
      incategory_id: 66,
    },
    {
      id: 234,
      name: '搜狐号(体育领域)',
      price: 5,
      'price-1': 5,

      stock: 98,
      deletetime: null,
      incategory_id: 66,
    },
  ],
  饿了么: [
    {
      id: 235,
      name: '饿了么商家号',
      price: 35,

      stock: 56,
      deletetime: null,
      incategory_id: 67,
    },
    {
      id: 236,
      name: '饿了么小号',
      price: 0.3,
      'price-1': 0.3,

      stock: 351,
      deletetime: null,
      incategory_id: 67,
    },
  ],
  牵手: [
    {
      id: 237,
      name: '牵手新号',
      price: 0.5,

      stock: 58,
      deletetime: null,
      incategory_id: 68,
    },
    {
      id: 238,
      name: '牵手实名认证号',
      price: 1.2,
      'price-1': 1.2,

      stock: 47,
      deletetime: null,
      incategory_id: 68,
    },
  ],
  简书: [
    {
      id: 237,
      name: '简书新号',
      price: 0.5,

      stock: 147,
      deletetime: null,
      incategory_id: 68,
    },
    {
      id: 238,
      name: '简书实名老号',
      price: 1.2,
      'price-1': 1.2,

      stock: 349,
      deletetime: null,
      incategory_id: 68,
    },
  ],
  '虎牙/斗鱼/美拍/映客': [
    {
      id: 249,
      name: '映客小号',
      price: 0.2,

      stock: 98,
      deletetime: null,
      incategory_id: 69,
    },
    {
      id: 250,
      name: '斗鱼小号',
      price: 0.2,

      stock: 101,
      deletetime: null,
      incategory_id: 69,
    },
    {
      id: 251,
      name: '虎牙小号',
      price: 0.2,

      stock: 143,
      deletetime: null,
      incategory_id: 69,
    },
    {
      id: 252,
      name: '美拍小号',
      price: 0.2,

      stock: 145,
      deletetime: null,
      incategory_id: 69,
    },
    {
      id: 253,
      name: '美拍主播号(已实名认证)',
      price: 7,

      stock: 13,
      deletetime: null,
      incategory_id: 69,
    },
    {
      id: 254,
      name: '映客主播号(已实名认证)',
      price: 7,

      stock: 26,
      deletetime: null,
      incategory_id: 69,
    },
    {
      id: 255,
      name: '虎牙主播号(已实名认证)',
      price: 7,

      stock: 35,
      deletetime: null,
      incategory_id: 69,
    },
    {
      id: 256,
      name: '虎牙主播号(已实名认证)',
      price: 7,

      stock: 65,
      deletetime: null,
      incategory_id: 69,
    },
  ],
  'cvv信用卡/visa万事达': [
    {
      id: 257,
      name: 'visa万事达500美元余额',
      price: 505,

      stock: 4,
      deletetime: null,
      incategory_id: 70,
    },
    {
      id: 258,
      name: 'visa万事达1000美元余额',
      price: 1005,

      stock: 2,
      deletetime: null,
      incategory_id: 70,
    },
    {
      id: 259,
      name: 'visa万事达300美元余额',
      price: 305,

      stock: 4,
      deletetime: null,
      incategory_id: 70,
    },
    {
      id: 260,
      name: 'visa万事达100美元余额',
      price: 105,

      stock: 5,
      deletetime: null,
      incategory_id: 70,
    },
  ],
  'cvv信用卡/美国运通': [
    {
      id: 261,
      name: '美国运通300美元余额',
      price: 305,

      stock: 9,
      deletetime: null,
      incategory_id: 71,
    },
    {
      id: 262,
      name: '美国运通100美元余额',
      price: 105,

      stock: 11,
      deletetime: null,
      incategory_id: 71,
    },
    {
      id: 263,
      name: '美国运通1000美元余额',
      price: 1005,

      stock: 5,
      deletetime: null,
      incategory_id: 71,
    },
    {
      id: 264,
      name: '美国运通500美元余额',
      price: 505,

      stock: 7,
      deletetime: null,
      incategory_id: 71,
    },
  ],
  爱聊: [
    {
      id: 265,
      name: '爱聊白号',
      price: 0.2,

      stock: 154,
      deletetime: null,
      incategory_id: 72,
    },
    {
      id: 266,
      name: '爱聊女号(已实名)',
      price: 2,

      stock: 97,
      deletetime: null,
      incategory_id: 72,
    },
    {
      id: 267,
      name: '爱聊男号(已实名)',
      price: 2,
      'price-1': 2,

      stock: 54,
      deletetime: null,
      incategory_id: 72,
    },
  ],
  '腾讯云代实名代充（联系客服）': [
    {
      id: 268,
      name: '代实名代充',
      price: 7,

      stock: 999,
      deletetime: null,
      incategory_id: 73,
    },
  ],
  '亚马逊云代实名代充（联系客服）': [
    {
      id: 269,
      name: '代实名代充',
      price: 7,

      stock: 999,
      deletetime: null,
      incategory_id: 74,
    },
  ],
  '谷歌云代实名代充（联系客服）': [
    {
      id: 270,
      name: '代实名代充',
      price: 7,

      stock: 999,
      deletetime: null,
      incategory_id: 75,
    },
  ],
  '微软云代实名代充（联系客服）': [
    {
      id: 271,
      name: '代实名代充',
      price: 7,

      stock: 999,
      deletetime: null,
      incategory_id: 76,
    },
  ],
  '华为云代实名代充（联系客服）': [
    {
      id: 272,
      name: '代实名代充',
      price: 7,

      stock: 999,
      deletetime: null,
      incategory_id: 77,
    },
  ],
  微信解封: [
    {
      id: 273,
      name: '微信解封',
      price: 10,

      stock: 999,
      deletetime: null,
      incategory_id: 78,
    },
  ],
  cmb解封: [
    {
      id: 274,
      name: 'cmb解封',
      price: 1,

      stock: 999,
      deletetime: null,
      incategory_id: 79,
    },
  ],
  '代充值-抖音/快手/QQ/虎牙/YY': [
    {
      id: 275,
      name: '抖音币充值-1000币',
      price: 8,

      stock: 99999,
      deletetime: null,
      incategory_id: 80,
    },
    {
      id: 275,
      name: '快手币充值-1000币',
      price: 8,

      stock: 99999,
      deletetime: null,
      incategory_id: 80,
    },
    {
      id: 275,
      name: 'QQ币充值-100币',
      price: 7,

      stock: 99999,
      deletetime: null,
      incategory_id: 80,
    },
    {
      id: 275,
      name: '虎牙币充值-100币',
      price: 7,

      stock: 99999,
      deletetime: null,
      incategory_id: 80,
    },
    {
      id: 275,
      name: 'YY币充值-100币',
      price: 7,

      stock: 99999,
      deletetime: null,
      incategory_id: 80,
    },
    {
      id: 275,
      name: '代实名代充补差价',
      price: 1,

      stock: 99999,
      deletetime: null,
      incategory_id: 80,
    },
  ],
  抖音解封: [
    {
      id: 276,
      name: '抖音解封补差价',
      price: 1,

      stock: 999,
      deletetime: null,
      incategory_id: 81,
    },
  ],
  头条解封: [
    {
      id: 277,
      name: '头条解封补差价',
      price: 1,

      stock: 999,
      deletetime: null,
      incategory_id: 82,
    },
  ],
  快手解封: [
    {
      id: 278,
      name: '快手解封补差价',
      price: 1,

      stock: 999,
      deletetime: null,
      incategory_id: 83,
    },
  ],
  雷速体育: [
    {
      id: 279,
      name: '雷速体育',
      price: 0.9,

      stock: 999,
      deletetime: null,
      incategory_id: 84,
    },
  ],
  FB不限账号: [
    {
      id: 280,
      name: 'FB不限户',
      price: 5,

      stock: 999,
      deletetime: null,
      incategory_id: 85,
    },
  ],
  西瓜视频: [
    {
      id: 281,
      name: '西瓜视频',
      price: 0.9,

      stock: 999,
      deletetime: null,
      incategory_id: 86,
    },
  ],
  斗鱼账号: [
    {
      id: 282,
      name: '斗鱼账号',
      price: 0.5,

      stock: 999,
      deletetime: null,
      incategory_id: 87,
    },
  ],
  '爱奇艺/腾讯/优酷账号': [
    {
      id: 283,
      name: '爱奇艺/腾讯/优酷账号',
      price: 2.3,

      stock: 999,
      deletetime: null,
      incategory_id: 88,
    },
  ],
  心遇: [
    {
      id: 284,
      name: '心遇男号(30天-60天)',
      price: 2,

      stock: 157,
      deletetime: null,
      incategory_id: 89,
    },
    {
      id: 285,
      name: '心遇女号(15-30天)',
      price: 1.2,

      stock: 125,
      deletetime: null,
      incategory_id: 90,
    },
    {
      id: 286,
      name: '心遇女号(30天-60)',
      price: 2,

      stock: 147,
      deletetime: null,
      incategory_id: 91,
    },
    {
      id: 287,
      name: '心遇男号(15-30天)',
      price: 1.2,
      'price-1': 1.2,

      stock: 54,
      deletetime: null,
      incategory_id: 92,
    },
  ],
  '腾讯/爱奇艺/优酷/会员代充值': [
    {
      id: 494,
      name: '腾讯会员一个月/可登电视TV',
      price: 1,

      stock: 997,
      deletetime: null,
      incategory_id: 89,
    },
    {
      id: 385,
      name: '爱奇艺会员一个月/可登电视TV',
      price: 1.2,

      stock: 928,
      deletetime: null,
      incategory_id: 90,
    },
    {
      id: 286,
      name: '优酷会员一个月/可登电视TV',
      price: 1,

      stock: 947,
      deletetime: null,
      incategory_id: 91,
    },
    {
      id: 287,
      name: 'APP会员代充',
      price: 1,
      'price-1': 1,

      stock: 1954,
      deletetime: null,
      incategory_id: 92,
    },
  ],
  话费充值: [
    {
      id: 284,
      name: '移动/联通/电信-面值￥100',
      price: 11.5,

      stock: 957,
      deletetime: null,
      incategory_id: 89,
    },
    {
      id: 285,
      name: '香港鸭聊卡HK100',
      price: 9.5,

      stock: 725,
      deletetime: null,
      incategory_id: 90,
    },
    {
      id: 286,
      name: '台湾电信NT300',
      price: 7.5,

      stock: 947,
      deletetime: null,
      incategory_id: 91,
    },
    {
      id: 287,
      name: '全球运营商代充$15-(官方直充)',
      price: 12,
      'price-1': 12,

      stock: 54,
      deletetime: null,
      incategory_id: 92,
    },
  ],
  '其他产品/补差价': [
    {
      id: 284,
      name: '其他业务及补差价专用',
      price: 1,

      stock: 1980,
      deletetime: null,
      incategory_id: 89,
    },
  ],
};

export const DataGoodsCateList = Object.keys(GoodsObject).map((item, index) => {
  return {
    label: item,
    value: index,
  };
});

export const DataCountryList = [
  {
    label: '随机',
    value: 1,
  },
];

export const getGoodsNameListByGoodsCate = (goodsCateIdx: number) => {
  return (
    GoodsObject[DataGoodsCateList[goodsCateIdx].label]
      //
      .map((item, index) => {
        return {
          label: item.name,
          value: index,
        };
      })
  );
  //   goodsObject[classifyArr[value]].forEach((item, i) => {
  //     productOptions += `<option value="${i}"}>${item.name}</option>`
  // });
};

export const generateOrder = () => {
  const orderUnit: string[] = [];
  for (let idx = 0; idx < 13; idx++) {
    orderUnit.push(`${Math.floor(Math.random() * 10)}`);
  }

  return orderUnit.join('');
};
