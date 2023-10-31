import NavMenu from './NavMenu';
import Logo from './Logo';
import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

const NavBar = (props) => {
  if (props.landingPage) {
    console.log('랜딩페이지')
  } else if (props.smartBuy) {
    console.log('스마트 견적')
  }
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