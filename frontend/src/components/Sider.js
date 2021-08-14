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
  logout()
  console.log(history)

}
    
    return (
        <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="Latest Portfolios">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<AreaChartOutlined />}>
                    View all Portfolios
            </Menu.Item>
          <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
                    Logout
            </Menu.Item>
        </Menu>
      </Sider>
    )

}

export default SiderMenu