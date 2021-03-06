var Mock = require('mockjs');
import { Request, Response } from 'express';

function getList() {
  let res = [];
  for (let i = 0; i < 2; i++) {
    res.push({
      id: i + '',
      title: i % 2 ? 'Mobile Phone' : 'News paper' + Mock.Random.ctitle(5, 50),
      img: '//img10.360buyimg.com/mobilecms/11833/105e2f6e-5b46-4c9d-8996-bf1542b77a95.jpg',
      price: 100,
      count: 2,
      checked: !!(i % 2),
    });
  }

  return res;
}

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/getDefaultReceivingInfo': {
    name: 'Seven',
    tel: '0449 012 345',
    address: '201 Pacific Hwy, Hornsby, NSW 2077',
  },
};
