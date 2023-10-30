import NavMenu from './NavMenu';
import Logo from './Logo';
import React from 'react';
import { Layout } from 'antd';
import Login from '../Login/Login';

const { Header } = Layout;

const NavBar = () => {
  return (
    <Layout className="layout"
      style={{ margin: '20px 5% 0' }}
    >
      <Header
        style={{
          position: 'relative',
          backgroundColor: '#fff',
          width: '100%',
          height: '150px',
          borderBottom: '1px solid #ccc',
        }}>
        <Logo />
        <NavMenu />
        {/* 현재 메뉴명 */}
      </Header>
    </Layout >
  );
};
export default NavBar;