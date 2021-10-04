import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';
import { Location, connect, Dispatch } from 'umi';
import { ConnectState } from '@/models/connect';
import '@/static/icofont/icofont.min.css';
import styles from './BasicLayout.less';

interface BasicLayoutProps {
  location: Location;
  dispatch: Dispatch;
  user: any;
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
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(BasicLayout);
