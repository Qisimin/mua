import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox,Card } from 'antd';
import Style from './index.module.less'
import {Link} from 'react-router-dom'

class Login extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={Style.login}>
                <Card title='用户登录' className={Style.loginCard}>
                  <div className="login-form">
                    <Form.Item>
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                      })(
                        <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="password"
                          placeholder="Password"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>记住密码</Checkbox>)}
                      <a className="login-form-forgot" href="">
                        忘记密码
                      </a>
                      <br/>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>{
                          this.props.history.push('/admin')
                        }}>
                            登录
                        </Button>
                      <br/>
                      Or <Link to='/reg'>现在去注册</Link>
                    </Form.Item>
                  </div>
                </Card>
            </div>
        );
      }
    
}

export default Form.create()(Login)

