import React,{ useState, createContext, useContext, useEffect } from 'react'
import { Col, Row, Input, Form, Button, message, Typography } from 'antd'
import { loginFn } from '../services/index'
import { useContextData } from '../hooks/context'
import { Redirect } from 'react-router'

const errormessage=(errmessage)=>{
  message.error(errmessage)
}

const {Title}=Typography


function Login({history}) {

    const [form] = Form.useForm()
    const { login, user } = useContextData()
  
  
    async function handleSubmit(userInput) {

        console.log(userInput)
      loginFn(userInput)
      .then(data => {
        login({ data })
        history.push('/home')
      })
      .catch(err => {
        const errorInfo = err.response.data.message
        errormessage(errorInfo)
      })

  }
return  user ?
  <Redirect to={"/home"}/>
  :
(
    // <div style={{
    //     // backgroundColor:"yellow",
    // backgroundImage:"url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm218-bb-01_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=7e342c655542531730ffb8c14dbae12b)", backgroundSize: "cover",
    // height: "100vh"}}>
    <div>
      <Row align="middle" justify="space-around">
        <Col flex="center">
        </Col>

      </Row>
      <Row align="middle" justify="space-around">
        <Col flex="center">
        <Title level={1}>Welcome to the Portfolio Viewer App</Title>
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item name='email' label="Email:" rules={[{ required: true, type: 'email', message: 'please input your email' }]}>
              <Input />
            </Form.Item>
            <Form.Item name='password' label="Password:" rules={[{ required: true, message: 'password is required' }]}>
              <Input.Password />
            </Form.Item>
            <Button type="primary" block htmlType="submit">
              Login
            </Button>

          </Form>
        </Col>

      </Row>

    </div>
    // </div>
  )
}
export default Login
