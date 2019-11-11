import React from 'react'
import {Table,Divider} from 'antd';
// import Style from './userselect.module.less'


const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: '借阅数量',
      dataIndex: 'num',
    },
    {
      title: '操作',
      dataIndex: 'do',
      render: (text, record) => (
        <span>
          <a>edit {record.name}</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      ),
    },
  ];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `name ${i}`,
      age: 32,
      num: `total: ${i}`,
    
    });
  }
class Login extends React.Component{
    render(){
        return(
           <div>
              
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />
             
           </div>
        )
    }
}
export default Login
