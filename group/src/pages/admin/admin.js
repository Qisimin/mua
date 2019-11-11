
import React from 'react'
import { Layout, Menu } from 'antd';
import CustomSlider from '../../components/slider/slider'
import {withRouter} from 'react-router-dom'
import Style from './admin.module.less'
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Admin extends React.Component{
    render(){
        // console.log(this)
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
