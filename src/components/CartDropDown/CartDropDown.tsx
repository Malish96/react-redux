import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import './CartDropDown.css';

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const CartDropDown: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a className="cart-style" onClick={(e) => e.preventDefault()}>
      Cart
      <DownOutlined />
    </a>
  </Dropdown>
);

export default CartDropDown;
