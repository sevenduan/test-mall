import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import { history } from 'umi';

const menu = [
  {
    title: 'HomePage',
    link: '/',
    icon: 'home',
  },
  {
    title: 'Cart',
    link: '/cart',
    icon: 'cart',
  },
  {
    title: 'OrderList',
    link: '/orderlist',
    icon: 'list',
  },
  {
    title: 'Account',
    link: '/user',
    icon: 'ui-user',
  },
];

interface BottomNavProps {
  pathname: string;
}
export default class BottomNav extends Component<BottomNavProps> {
  render() {
    const { pathname } = this.props;
    return (
      <TabBar tintColor="red">
        {menu.map(({ title, link, icon }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<span className={'icofont-' + icon}></span>}
            selectedIcon={<span className={'red icofont-' + icon}></span>}
            selected={pathname === link}
            onPress={() => {
              history.push(link);
            }}
          />
        ))}
      </TabBar>
    );
  }
}
