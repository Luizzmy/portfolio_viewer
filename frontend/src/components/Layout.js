import React, { useEffect } from 'react'
import { Layout, Row, Col} from 'antd';
import SiderMenu from './Sider'
// import { useContextData } from '../hooks/context';

import { Redirect} from 'react-router-dom'

const { Header, Content} = Layout;

function LayoutApp({children}) {



    return (
      <>
      
      <Layout style={{ minHeight: '100vh' }}>
      <Header className="site-layout-background" style={{ padding: 0}}>
      </Header>
      <Layout className="site-layout">
      <SiderMenu/>
        <Row justify="end" align="middle" style>
        </Row>
        <Content style={{ margin: '0 16px', textAlign:"left" }}>
          <div className="site-layout-background" 
          style={{ padding: 24, minHeight: 360, backgroundColor:"white" }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
    {/* :
    <Redirect to={'/login'}/> */}
    {/* } */}

      </>
    )
}


export default LayoutApp
