import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import CustomSlider from '../../components/slider/slider'
import Style from './admin.module.less'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class Admin extends React.Component{
    render(){
        return(
            <div>
            <Layout>
                <Header className={Style.header}>
                
                </Header>
                <Layout>
                    <Sider width={255} style={{ background: '#fff' }} className={Style.up}>
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
                            Content......................
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            </div>
        )
    }
}
export default Admin