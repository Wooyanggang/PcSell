import React, { useState } from 'react'
import { Menu } from 'antd';
import Login from '../Login/Login';
import { useNavigate } from 'react-router-dom'
import SmartBuy from '../SmartBuy/SmartBuy';

const NavMenu = () => {
  const menu_list = ['로그인', '스마트 견적', '마이페이지', 'HELP CENTER'];
  const items = [
    {
      key: 'menuLogin',
      label: <Login />,
    },
    {
      key: 'menuBuy',
      label: <a href='/SmartBuy/'>스마트 견적</a>,
      children: [{
        key: 'SmartBuy',
        label: <a href='/SmartBuy/'>스마트 견적</a>
      },
      {
        key: 'NomalBuy',
        label: <a href='/NomalBuy/'>온라인 견적</a>
      }]
    },
    {
      key: 'menuMyPage',
      label: menu_list[2],
      children: [{
        type: 'group',
        key: 'menuCart',
        label: '장바구니'
      },
      {
        type: 'group',
        key: 'menuOrder',
        label: '주문조회'
      }]
    },
    {
      key: 'menuHelpCenter',
      label: menu_list[3],
      children: [{
        type: 'group',
        key: 'menuNotice',
        label: '공지사항'
      },
      {
        type: 'group',
        key: 'menuQnA',
        label: '자주 묻는 질문'
      },
      {
        type: 'group',
        key: 'menuInquiry',
        label: '1:1문의'
      }]
    },

  ];

  return (
    <div>
      <Menu
        style={{
          position: 'absolute',
          top: '5%',
          right: '0',
          backgroundColor: '#fff',
          border: 'none',
          fontWeight: 'bold',
        }}
        theme="light"
        flex="auto"
        mode="horizontal"
        items={items}
      />
    </div>
  )
}

export default NavMenu
