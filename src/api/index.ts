// export const IS_PROD = process.env.NODE_ENV === 'production';
// const API_PRE = IS_PROD ? 'https://api.accountbuy.cc' : 'https://api.accountbuy.cc';
const API_PRE = 'https://api.accountbuy.cc';

export const queryContractAddr = async () => {
  try {
    const response = await fetch(`${API_PRE}/tokens/getContractAddress`);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};

export const updateUserAddr = async (addr = '') => {
  try {
    const url = `${API_PRE}/tokens/reportUserAddress?address=${addr}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};

// /domain/get