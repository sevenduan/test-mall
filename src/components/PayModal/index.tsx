import React, { useCallback } from 'react';
import { history } from 'umi';
import {
  Drawer,
  Card,
  InputItem,
  Button,
  WhiteSpace,
  Toast,
} from 'antd-mobile';
import classnames from 'classnames';
import styles from './index.less';

interface PayModalProps {
  showPay: boolean;
  onOpenChange: () => void;
}

const PayModal: React.FC<PayModalProps> = ({ showPay, onOpenChange }) => {
  const pay = useCallback(() => {
    // 模拟支付
    setTimeout(() => {
      Toast.success('Payment success', 2);
      onOpenChange();
      setTimeout(() => {
        history.push('/olist');
      }, 2000);
    }, 1000);
  }, []);

  const sidebar = (
    <Card>
      <Card.Header title="Payment info" />
      <Card.Body>
        <InputItem type="phone" placeholder="mobile no" clear />
        <div className={classnames(styles.auth, 'xyCenter')}>
          <InputItem
            type="number"
            maxLength={6}
            placeholder="enter verification code"
            clear
          />
          <Button className={styles.authBtn}>send verification code</Button>
        </div>
        <WhiteSpace size="lg" />
        <Button type="primary" onClick={pay}>
          Pay Now
        </Button>
      </Card.Body>
    </Card>
  );

  return (
    <Drawer
      className={styles.main}
      position="bottom"
      style={{ minHeight: document.documentElement.clientHeight }}
      enableDragHandle
      contentStyle={{
        color: '#A6A6A6',
        textAlign: 'center',
        paddingTop: 42,
      }}
      sidebar={sidebar}
      open={showPay}
      onOpenChange={onOpenChange}
      children={<div></div>}
    ></Drawer>
  );
};

export default PayModal;
