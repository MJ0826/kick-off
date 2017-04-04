import axios from 'axios';
import url from 'url';

const host = 'localhost';

function getAdvocacyUrlObj() {
  const originUrlObj = host;
  return originUrlObj;
}

function baseAxios(options) {
  const defaultHeaders = {
    'Cache-Control': 'no-cache,no-store',
    Pragma: 'no-cache',
    Expires: '0'
  };
  return axios.create({
    baseURL: url.format(options.baseURL || getAdvocacyUrlObj()),
    timeout: options.timeout || 30000,
    headers: defaultHeaders || options.headers
  });
}

function executeRequest(method, pathname, data, options = {}) {
  const body = method === 'get' || !data ? {} : { data };
  const reqObj = { method, url: pathname, params: options.query, ...body };

  return baseAxios(options).request(reqObj);
}

export default {
  get(pathname, options) {
    return executeRequest('get', pathname, null, options);
  },

  post(pathname, data, options) {
    return executeRequest('post', pathname, data, options);
  },

  put(pathname, data, options) {
    return executeRequest('put', pathname, data, options);
  },

  delete(pathname, data, options) {
    return executeRequest('delete', pathname, data, options);
  },

  all(promises) {
    return axios.all(promises);
  },

  getAdvocacyUrlObj
};
