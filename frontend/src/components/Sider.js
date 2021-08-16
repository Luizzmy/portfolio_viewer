import React, {useState} from 'react'
import { Layout, Menu } from 'antd';
import {
  LogoutOutlined,
} from '@ant-design/icons';

import { useContextData } from '../hooks/context'
import { logoutFn } from '../services/index'

const { Sider } = Layout;

function SiderMenu() {

  const [collapsed, setCollapsed] = useState(false)

  const { logout } = useContextData()

  const onCollapse = () => {
    if (collapsed) {
        setCollapsed(false)
    } else {
        setCollapsed(true)
    }

}

  async function handleLogout() {
    await logoutFn()
    sessionStorage.clear()
    logout()
  }

  return (
    <Sider width={130} breakpoint="md" collapsible collapsed={collapsed} onCollapse={onCollapse} >
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