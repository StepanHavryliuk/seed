/**
 * @author v4 <lucky6616888@163.com>
 * Created by v4 on 2019-09-27 10:32
 */
import axios from 'axios';
import qs from 'qs';
import Router from '../../router';

const BASEURL = '/api';

function startLoading() {

}

function endLoading() {

}

let needLoadingRequestCount = 0;

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

axios.interceptors.request.use(config => {
  config.data = qs.parse(config.data);
  showFullScreenLoading();
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  tryHideFullScreenLoading();
  return response
}, error => {
  return Promise.resolve(error.response)
});

function checkStatus (response) {
  return response && (response.status === 200 || response.status === 304 || response.status === 400)
}

function checkErrorCode (response) {
  let { code, message } = response.data;
  switch (code) {
    case 302:
      setTimeout(() => {
        Router.push('/');
      }, 3000);
      break;
    default:

      break;
  }
}

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      baseURL: BASEURL,
      url: url,
      data: data,
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest"
      },
      timeout: 20000,
      withCredentials: true
    }).then(res => {
      if (checkStatus(res)) {
        if (res.data.code === 100 || res.data.code === 200) {
          resolve(res.data.data)
        } else {
          checkErrorCode(res);
        }
      } else {
        setTimeout(() => {
          endLoading();
        }, 3000);
        reject(res);
      }
    }).catch(e => {
      reject(e);
      setTimeout(() => {
        endLoading();
      }, 3000);
    })
  })
};
