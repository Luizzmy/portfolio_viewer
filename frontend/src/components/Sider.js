import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    TableOutlined,
    LogoutOutlined,
    AreaChartOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useContextData } from '../hooks/context'
import { logoutFn } from '../services/index'
// import { useContextData } from '../hooks/context'

const { SubMenu } = Menu;


const { Sider } = Layout;


function SiderMenu({history}) {

const { user, logout } = useContextData()

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