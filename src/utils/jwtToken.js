import { getObjectItem, setObjectItem, removeObjectItem } from './localStorage';

const JWT_KEY = 'jwt';

export const saveJwt = (jwt) => {
  setObjectItem(JWT_KEY, jwt);
};

export const clearJwt = () => {
  removeObjectItem(JWT_KEY);
};

export const getJwt = () => {
  return getObjectItem(JWT_KEY);
};
