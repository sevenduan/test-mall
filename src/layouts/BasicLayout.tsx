import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import { ConnectState, ConnectProps, UserModelState } from '@/models/connect';
import '@/static/icofont/icofont.min.css';
import styles from './BasicLayout.less';

interface BasicLayoutProps extends ConnectProps {
  // location: Location;
  // dispatch: Dispatch;
  user: UserModelState;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, location, dispatch, user } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []);
  const { pathname } = location;

  console.log('props', props);
  const showBottomNav = pathname !== '/login';
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>{showBottomNav && <BottomNav pathname={pathname} />}</footer>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
