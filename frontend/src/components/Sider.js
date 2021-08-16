import React from 'react'
import { Layout, Menu } from 'antd';
import {
  LogoutOutlined,
} from '@ant-design/icons';

import { useContextData } from '../hooks/context'
import { logoutFn } from '../services/index'

const { Sider } = Layout;

function SiderMenu() {

  const { logout } = useContextData()

  async function handleLogout() {
    await logoutFn()
    sessionStorage.clear()
    logout()
  }

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  )

}

export default SiderMenu