import React, { Component } from 'react'
// import {withRouter} from 'react-router-dom'
import { Menu } from 'antd';
const { SubMenu } = Menu;
const root = [
  {
      name:'网站管理',
      path:'',
      key:'1',
      children:[
          {
              name:'系统管理',
              path:'',
              key:'2',
              childrern:[
                  {
                      name:'重新登陆',
                      path:'',
                      key:'3',
                      
                  }
              ]
          },{
              name:'学生管理',
              path:'',
              key:'2',
              childrern:[
                  {
                      name:'添加学生信息',
                      path:'',
                      key:'3',
                      
                  },
                  {
                      name:'查询学生信息',
                      path:'',
                      key:'3',
                      
                  },
                  {
                      name:'修改学生信息',
                      path:'',
                      key:'3',
                      
                  },
                  {
                      name:'删除学生信息',
                      path:'',
                      key:'3',
                      
                  }
              ]
          },{
              name:'图书管理',
              path:'/admin/bookmanagement',
              key:'2',
              childrern:[
                  {
                      name:'图书信息',
                      path:'/admin/bookmanagement/selcet',
                      key:'3',
                      
                  },
              ]
          },{
              name:'借阅信息管理',
              path:'',
              key:'2',
              childrern:[
                  {
                      name:'添加学生借阅信息',
                      path:'',
                      key:'3',
                      
                  },
                  {
                      name:'查询学生借阅信息',
                      path:'',
                      key:'3',
                      
                  },
                  {
                      name:'修改学生借阅信息',
                      path:'',
                      key:'3',
                      
                  },
                  {
                      name:'删除学生借阅信息',
                      path:'',
                      key:'3',
                      
                  }
              ]
          },{
              name:'关于我们',
              path:'',
              key:'2',
              children:[
                  {
                      name:'投票',
                      path:'',
                      key:'3',
                  }
              ]
          }
      ]
  },
  {
      name:'友情链接',
      path:'',
      key:'1'
  },
  {
      name:'退出',
      path:'',
      key:'1'
  }
]
export default class customSlider extends Component {
    jump=(path)=>{
      this.props.history.push(path)
    }
    renderItem = (data)=>{
      return data.map((item,index)=>{
        if(item.children){
          return(
            <SubMenu title={item.name} key={index} >
              {this.renderItem(item.children)}
            </SubMenu>
          )
        }else{
          return(
            <Menu
              mode="inline"
              style={{ width: 256 }}
            >
            {item.name}
          </Menu>
          )
        }
      })
    }
    render() {
        return (
          <Menu
            mode="inline"
            style={{ width: 256 }}
          >
            {this.renderItem(root)}
          </Menu>
        );
    }
    
}
