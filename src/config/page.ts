const NAME = '账号通';
const DESC = `${NAME},提供appleid购买,苹果id购买,推特账号购买,电报Telegram账号购买,TikTok账号购买,各类游戏,社交媒体账号购买批发,购买账号就找${NAME}.`;
const SITE_URL = 'https://www.easybuys.cc/';

const pageMeta = [
  // <meta charset="UTF-8">
  { charset: 'UTF-8' },
  // <meta http-equiv="X-UA-Compatible" content="IE=edge">
  { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
  // <meta name="viewport"
  //   content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover">
  {
    name: 'viewport',
    content:
      'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover',
  },
  // <meta data-react-helmet="true" name="keywords" content="账号星球">
  {
    name: 'keywords',
    content: NAME,
  },
  // <meta data-react-helmet="true" name="description"
  //   content="账号星球商城提供苹果id购买,国外ID购买,电报Telegram 账号等各类游戏,社交媒体账号购买批发,购买账号就找账号星球.">
  {
    name: 'description',
    content: DESC,
  },
  // <meta property="og:type" content="website">
  {
    property: 'og:type',
    content: 'website',
  },
  // <meta data-react-helmet="true" property="og:title" content="苹果id购买|国外ID购买|电报Telegram 账号购买-账号星球">
  {
    property: 'og:title',
    content: `苹果id购买|国外ID购买|电报Telegram账号购买-${NAME}`,
  },
  // <meta data-react-helmet="true" property="og:keywords" content="账号星球">
  {
    property: 'og:keywords',
    content: NAME,
  },
  // <meta data-react-helmet="true" property="og:description"
  //   content="账号星球商城提供苹果id购买,国外ID购买,电报Telegram 账号等各类游戏,社交媒体账号购买批发,购买账号就找账号星球.">
  {
    property: 'og:description',
    content: DESC,
  },
  // <meta data-react-helmet="true" property="og:site_name" content="账号星球">
  {
    property: 'og:site_name',
    content: NAME,
  },
  // <meta data-react-helmet="true" property="og:url" content="https://www.accountboy.com/">
  {
    property: 'og:url',
    content: SITE_URL,
  },
  // <meta data-react-helmet="true" property="og:image"
  //   content="https://files.accountboy.com/demon/ablogo-2b1fd2a561c84270b1d1625eee5b8d11.png">
  {
    property: 'og:image',
    content: 'https://pbs.twimg.com/media/Gp8Mng8awAEl-Sa?format=png&name=900x900',
  },
  // <meta data-react-helmet="true" name="robots"
  //   content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large">
  {
    name: 'robots',
    content:
      'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  },
];

export const Conf = {
  '/': {
    title: '账号通',
    pageMeta,
  },
  '/order': {
    title: '下单',
    pageMeta,
  },
  '/flow': {
    title: '立即支付',
    pageMeta,
  },
};
