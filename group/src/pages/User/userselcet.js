import React from 'react'
import { Input, Card,Table } from 'antd';
import Style from './userselect.module.less'
const { Search } = Input;

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
  ];
  
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      num: `total: ${i}`,
    });
  }
class Select extends React.Component{
    render(){
        return(
           <div>
                <Search className={Style.input}
                placeholder="input search username"
                enterButton="Search"
                size="large"
                onSearch={value => console.log(value)}
              />
              <br/>
              <Card className={Style.list}>
                搜索结果为：<br/>
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 240 }} />
              </Card>
           </div>
        )
    }
}
export default Select
