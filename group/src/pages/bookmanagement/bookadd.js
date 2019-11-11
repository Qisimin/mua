import React from 'react';
import { Card, message } from 'antd';

import Style from './index.module.less';

class BookAdd extends React.Component {
  constructor (props) {
    super()
    this.state = props.date
  }
  submit = () => { 
    let {name,booktype,pic,price,desc} = this.state
    this.$axios.post('/api/admin/book/add',{name,booktype,pic,price,desc})
    .then((data) => {
      // console.log(data)
      if (data.err === 0) {
        message.success('添加成功')
        this.props.cacelAdd(1)
      } else {
        message.success('添加失败')
      }
    })
  }
  render () {
    let {name,booktype,pic,price,desc} = this.state
    return (
      <div className={Style.upDate}>
        <Card title="图书添加">
          <label htmlFor="名字">名字: </label>
          <input type="text" value={name} onChange={(e) => {
            this.setState({name: e.target.value})
          }} />
          <br/>
          <label htmlFor="类型">类型: </label>
          <input type="text" value={booktype} onChange={(e) => {
            this.setState({booktype: e.target.value})
          }} />
          <br/>
          <label htmlFor="图片">图片: </label>
          <input type="text" value={pic} onChange={(e) =>{
            this.setState({pic: e.target.value})
          }} />
          <br/>
          <label htmlFor="价格">价格: </label>
          <input type="text" value={price} onChange={(e) => {
            this.setState({price: e.target.value})
          }} />
          <br/>
          <label htmlFor="介绍">介绍: </label>
          <input type="text" value={desc} onChange={(e) => {
            this.setState({desc: e.target.value})
          }} />
          <br/>
          <button onClick={this.submit}>添加</button>
          <button onClick={() => {
              this.props.cacelAdd(0)
            }}>关闭</button>
        </Card>
      </div>
    )
  }
}

export default BookAdd