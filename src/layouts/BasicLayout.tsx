import BottomNav from '@/components/BottomNav';
import React, { useEffect } from 'react';
import { Location } from 'umi';
import '@/static/icofont/icofont.min.css';
import styles from './BasicLayout.less';

interface BasicLayoutProps {
  location: Location;
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const { children, location } = props;
  useEffect(() => {}, []);
  const { pathname } = location;
  return (
    <div className={styles.main}>
      <article>{children}</article>
      <footer>
        <BottomNav pathname={pathname} />
      </footer>
    </div>
  );
};

export default BasicLayout;
