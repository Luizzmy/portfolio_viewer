import React from 'react'
import { Col, Row, Typography } from 'antd'
import { useContextData } from '../hooks/context';
import { Redirect } from 'react-router-dom'
import Upload from '../components/Upload';
import AllPortfolios from '../components/AllPortfolios';
import LayoutApp from '../components/Layout';
const { Title } = Typography
function Home() {
    const { user } = useContextData()

    return user ? (
        <div>
            <LayoutApp>
                <Row>
                    <Col sm={24}>

                        <Title level={1}> Welcome to the Portfolio Viewer App</Title>
                        <Title level={3}> Please upload a portfolio as a CSV file or choose a previously uploaded portfolio to view the detail and be able to edit</Title>
                        <AllPortfolios />
                        <br />
                        <Upload />
                        <br />
                    </Col>
                </Row>
            </LayoutApp>

        </div>
    )
        : <Redirect to={"/"} />
}

export default Home
