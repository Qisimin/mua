
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import CustomSlider from '../../components/customSlider/customSlider'
const { Header, Content, Footer, Sider } = Layout;


export default class Admin extends Component {
    render() {
        return (
            <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
    <CustomSlider></CustomSlider>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
        )
    }
}

import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import CustomSlider from '../../components/slider/slider'
import {withRouter} from 'react-router-dom'
import Style from './admin.module.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Admin extends React.Component{
    render(){
        console.log(this)
        return(
            <div>
            <Layout>
                <Header className={Style.header}>
                
                </Header>
                <Layout>
                    <Sider width={255} style={{ background: '#fff'}} className={Style.up}>
                        <CustomSlider></CustomSlider>
                    </Sider>
                    <Layout style={{ padding: '5px' }}>
                        
                        <Content 
                        style={{
                            // background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 450,
                            // maxHeight:550
                        }}
                        className={Style.bg}
                        >
                            {this.props.children} 
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            </div>
        )
    }
}
export default withRouter(Admin)
