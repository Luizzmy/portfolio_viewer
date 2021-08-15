import React from 'react'
import {Col, Row, Typography, Button} from 'antd'
import { useContextData } from '../hooks/context';
import { Redirect} from 'react-router-dom'
import Upload from '../components/Upload';
import AllPortfolios from '../components/AllPortfolios';

const {Title}=Typography
function Home() {
    const { user } = useContextData()
    // console.log(user)

    return user ? (
    // return(
        
        <div>
            

<Row>
<Col sm={24}>

    <Title level={1}> Welcome to the Portfolio Viewer App</Title>
    <Title level={2}> Please upload a portfolio as a CSV file, look at your previous portfolios or choose one from the sider to view the detail and be able to edit</Title>
    <AllPortfolios/>
    <br/>
    <Upload/>
    <br/>
</Col>
</Row>

        </div>
    )
     :<Redirect to={"/"}/>
}

export default Home
