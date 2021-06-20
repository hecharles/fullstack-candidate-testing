import memoryCache from "memory-cache";

export const cacheGet = (url = "") => {
  return memoryCache.get(url);
};

export const cachePut = (url = "", data = {}, timeout = 0) => {
  return memoryCache.put(url, data, timeout);
};
