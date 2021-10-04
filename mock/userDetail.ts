var Mock = require('mockjs');
import { Request, Response } from 'express';

export default {
  'GET /api/getUserDetail': {
    status: 1,
    id: '001',
    name: 'Seven Duan',
    icon: 'https://tva1.sinaimg.cn/large/00831rSTly1gdm7eok2oij301s01sgli.jpg',
    email: 'shakespeare@kkb.com',
    signature: 'hello world',
    title: 'buy',
    tags: [
      {
        key: '0',
        label: 'buy',
      },
      {
        key: '1',
        label: 'buy buy',
      },
      {
        key: '2',
        label: 'buy buy buy~',
      },
    ],
    country: 'AU',
    address: 'NSW',
    phone: '02-12345678',
  },
};
