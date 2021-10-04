import React, { useEffect } from 'react';
import { Link } from 'umi';
import classnames from 'classnames';
import styles from './index.less';
import { Card, WingBlank } from 'antd-mobile';

const grids = [
  {
    icon: 'card',
    text: 'pay',
    to: '/orderlist',
  },
  {
    icon: 'package',
    text: 'Ready to patch',
    to: '/orderlist',
  },

  {
    icon: 'vehicle-delivery-van',
    text: 'delivery',
    to: '/orderlist',
  },
  {
    icon: 'ui-rate-blank',
    text: 'rate',
    to: '/orderlist',
  },
];

const MyList = () => {
  return (
    <WingBlank size="lg" className={styles.main}>
      <Card full>
        <Card.Header
          title="My Orders"
          extra={<Link to="/orderlist">All orders</Link>}
          className={classnames(styles.header, 'font12')}
        />

        <Card.Body>
          <div className={classnames(styles.grids, 'xyCenter ', 'font12')}>
            {grids.map((item, index) => (
              <Link key={'link' + index} to={item.to} className={styles.grid}>
                <i
                  className={classnames('font16 icon', 'icofont-' + item.icon)}
                />
                <div>{item.text}</div>
              </Link>
            ))}
          </div>
        </Card.Body>
      </Card>
    </WingBlank>
  );
};

export default MyList;
