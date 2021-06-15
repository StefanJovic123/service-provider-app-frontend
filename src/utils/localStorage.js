export const setObjectItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getObjectItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const setItem = (key) => {
  localStorage.setItem(key);
};

export const getItem = (key) => {
  localStorage.getItem(key);
};
