import React from 'react'
import { Menu, Icon, Switch } from 'antd';
import {withRouter} from 'react-router-dom'
const { SubMenu } = Menu;
const sliderList=[
    {
        name:'首页',
        path:'/admin/home',
        key:'/admin/home'      
    },
    {
        name:'用户管理',
        path:'/admin/user',
        key:'/admin/user' ,
        children:[
                {
                    name:'添加用户信息',
                    path:'/admin/user/add',
                    key:'/admin/user/add',
                },                     
                {
                    name:'查询用户信息',
                    path:'/admin/user/select',
                    key:'/admin/user/select',
                },  
                {
                    name:'更新用户信息',
                    path:'/admin/user/update',
                    key:'/admin/user/update',
                },                         
            ]     
    },
    {
        name:'图书管理',
        path:'/admin/book',
        key:'/admin/book' ,
        children:[
                {
                    name:'添加图书信息',
                    path:'/admin/book/add',
                    key:'/admin/book/add',
                },                     
                {
                    name:'查询图书信息',
                    path:'/admin/book/select',
                    key:'/admin/book/select',
                },  
                {
                    name:'更新图书信息',
                    path:'/admin/book/update',
                    key:'/admin/book/update',
                },                         
            ]     
    },
    {
        name:'借阅信息管理',
        path:'/admin/borrow',
        key:'/admin/borrow' ,
        children:[
                {
                    name:'添加用户借阅信息',
                    path:'/admin/borrow/add',
                    key:'/admin/borrow/add',
                },                     
                {
                    name:'查询用户借阅信息',
                    path:'/admin/borrow/select',
                    key:'/admin/borrow/select',
                },  
                {
                    name:'更新用户借阅信息',
                    path:'/admin/borrow/update',
                    key:'/admin/borrow/update',
                },                         
            ]     
    },
    {
        name:'最喜爱书籍',
        path:'/admin/favourite',
        key:'/admin/favourite'      
    },
    {
        name:'退出',
        path:'/admin/logout',
        key:'/admin/logout'      
    }
]
class Slider extends React.Component{

    constructor(){
        super()
        this.state={
            theme: 'dark',
            current: '1',
        }
    }
    changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
    };
 handleClick = e => {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  jump=(path)=>{
    // console.log(this)
    this.props.history.push(path)
    }
    //根据穿的数据进行循环渲染
    renderItem=(data)=>{
        //1.判断有没有children   有 sub    没有 item
        return  data.map((item,index)=>{
            if(item.children){
                //渲染次级导航
                return(
                    <SubMenu title={item.name}>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return(
                    <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>
                        {item.name}
                    </Menu.Item>
                )
            }       
        })
    }

    render(){
        return(
            <div>
            <Switch
              checked={this.state.theme === 'dark'}
              onChange={this.changeTheme}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
            <br />
            <br />
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 256 ,opacity:0.8}}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
            {this.renderItem(sliderList)}
            </Menu>
          </div>
        )
    }
}
export default withRouter(Slider)