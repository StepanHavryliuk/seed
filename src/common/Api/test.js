/**
 * @author v4 <lucky6616888@163.com>
 * Created by v4 on 2019-09-27 10:35
 */

import { post } from '../Fetch';
let resultArr = [
  {
    name: '/test',
    number: 0,
    data: []
  },
  {

  }
];

export const testApi = (data, resolve) => {
  if (resultArr[0].number) {
    resolve(resultArr[0].data)
  } else {
    post('/test', data).then(res => resolve(res));
  };
  resultArr[0].number += 1;
};
