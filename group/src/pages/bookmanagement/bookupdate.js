import React from 'react';
import { Card, message } from 'antd';
import Style from './index.module.less';

/**
 * 1. 修改按钮 显示修改组件
 * 2. 组件内部显示默认数据
 * 3. 点击提交调用接口
 * 4. 成功 关闭当前页面
 * 5. 刷新列表页
 */

 class BookUpdate extends React.Component {
  constructor (props) {
    super()
    // console.log(props)
    this.state = props.data
  }
  submit = () => {
    let {name,booktype,pic,price,desc,_id} = this.state
    this.$axios.post('/api/admin/book/update',{name,booktype,pic,price,desc,_id})
    .then((data) => {
      if (data.err === 0) {
        message.success('修改成功')
        this.props.cacelUpdate(1)
      }
    })
  }
  render () {
    let {name,booktype,pic,price,desc} = this.state
    return (
      <div className={Style.upDate}>
        <Card>
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
            <button onClick={this.submit}>修改</button>
            <button onClick={() => {
              this.props.cacelUpdate(0)
            }}>关闭</button>
        </Card>
      </div>
    )
  }
 }

 export default BookUpdate