export function base64URLEncode(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function base64URLDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (
    str.length % 4 // Padding to make a multiple of 4
  ) {
    case 0:
      break;
    case 2:
      str += '==';
      break;
    case 3:
      str += '=';
      break;
    default:
      throw 'Illegal base64url string!';
  }
  return atob(str);
}

export const paramsStringify = (params: Record<string, string>) => {
  return Object.keys(params)
    .map((item) => `${item}=${params[item]}`)
    .join('&');
};

export const encodeParamsAsStr = (params: Record<string, string>) => {
  return base64URLEncode(paramsStringify(params));
};

export const parseParamMapFromUrl = (fullUrl: string) => {
  const paramMap: Record<string, string> = {};

  const url = new URL(fullUrl);
  const params = new URLSearchParams(url.search);
  for (let [p0, p1] of params) {
    // console.log(param[0] + ': ' + param[1]); // 输出每个参数的键和值
    paramMap[p0] = p1;
  }

  return paramMap;
};
