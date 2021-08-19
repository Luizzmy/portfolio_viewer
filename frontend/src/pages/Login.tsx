import React from 'react'
import { Col, Row, Input, Form, Button, message, Typography } from 'antd'
import { loginFn } from '../services/index'
import { useContextData } from '../hooks/context'
import { Redirect } from 'react-router'

const { Title } = Typography

const errormessage = (prop:{errmessage: string}) => {
  message.error(prop.errmessage)
}

interface UserInput{
  email:string,
  password:string,
}


function Login(prop:{ history:any }) {

  const [form] = Form.useForm()
  const { login, user } = useContextData()

const{history}=prop

////FIXME no esta bien definido el prop
  async function handleSubmit(obj:UserInput) {

    loginFn(obj)
      .then(data => {
        login({ data })
        history.push('/home')
      })
      .catch(err => {
        console.log(err)
        errormessage({errmessage:"Wrong Credentials"})
      })

  }
  return user ?
    <Redirect to={"/home"} />
    :
    (
      <div>
        <Row align="middle" justify="space-around">
          <Col xs={0} sm={0} md={24} flex="center">
            <div style={{ marginTop: "20vh" }}></div>
          </Col>
        </Row>
        <Row align="middle" justify="space-around">
          <Col flex="center">
            <Title level={1}>Welcome to the Portfolio Viewer App</Title>
            <br />
            <Title level={2}>Please login to enter</Title>
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
              <Form.Item
                name='email'
                label="Email:"
                rules={[{ required: true, type: 'email', message: 'Please input your email' }]}>
                <Input />
              </Form.Item>
              <Form.Item
                name='password'
                label="Password:"
                rules={[{ required: true, message: 'Password is required' }]}>
                <Input.Password />
              </Form.Item>
              <Button type="primary" block htmlType="submit">
                Login
              </Button>

            </Form>
          </Col>

        </Row>

      </div>

    )
}
export default Login
