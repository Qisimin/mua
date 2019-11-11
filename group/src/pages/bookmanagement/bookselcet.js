import React,{Fragment} from 'react';
import { Card, Table, message, Spin, Pagination, Popconfirm, Button } from 'antd';

import BookAdd from './bookadd.js';
import BookUpdate from './bookupdate.js';

class BookList extends React.Component {
  columns = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 0,
    },
    {
      title: '类型',
      dataIndex: 'booktype',
      key: 1,
    },
    {
      title: '照片',
      dataIndex: 'pic',
      key: 2,
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 3,
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 4,
    },
    {
      title: '操作',
      key: 5,
      render: (data) => {
        // console.log(data)
        return (
          <Fragment>
            <Popconfirm
              title="你确定要删除吗?"
              onConfirm={this.delBook.bind(this,data._id)}
            >
              <Button size="small">删除</Button>
            </Popconfirm>
              <Button size="small" onClick={this.updataBook.bind(this,data)}>修改</Button>
        </Fragment>
        )
      },
    },
  ];
  constructor () {
    super()
    this.state = {
      dataSource: [],
      name: '',
      booktype: '',
      pic: '',
      price: '',
      desc: '',
      page: 1, // 当前页码
      pageSize: 3, // 每页放的条数
      total: 0, // 数据总条数 默认 0
      spinning: true,
      updateShow: false,
      addShow: false,
    }
  }
  cacelAdd = (state) => {
    if (state) {
      this.getBookList(this.state.page,this.state.pageSize)
      this.setState({addShow: false})
    } else {
      this.setState({addShow: false})
    }
  }
  cacelUpdate = (state) => {
    if (state) {
      this.getBookList(this.state.page,this.state.pageSize)
      this.setState({updateShow: false})
    } else {
      this.setState({updateShow: false})
    }
  }
  addBook = () => {
    this.setState({addShow: true})
  }
  updataBook = (data) => {
    this.data = data
    this.setState({updateShow: true})
  }
  delBook = (_id) => {
    this.$axios.post('/api/admin/book/del',{_id})
    .then((data) => {
      // console.log(data)
      if (data.err === 0) {
        message.success('删除成功')
        // 删除成功之后 请求最新数据 刷新页面
        this.pageChange(this.state.page,this.state.pageSize)
      }
    })
  }
  componentDidMount () {
    this.getBookList(this.state.page,this.state.pageSize)
  }
  getBookList (page,pageSize) {
    console.log(page,pageSize)
    if (page == 0) {
      page ++
    }
    this.setState({spinning: true})
    // console.log(this)
    this.$axios.post('/api/admin/book/reader',{page,pageSize})
    .then((data) => {
      // console.log(data)
      if (data.err === 0) {
        let tmppage = page
        if (Math.ceil(data.total/this.state.pageSize) < page) {
          tmppage = Math.ceil(data.total/this.state.pageSize)
        }
        // console.log(page,pageSize,'111')
        // console.log(this.state.dataSource,'111')
          this.setState({total: data.total,spinning: false,page: tmppage,dataSource: data.list},()=>{
            console.log(this.state.dataSource)
            if (this.state.dataSource.length == 0) {
              if (page > 1) {
                page--
              } else {
                return
              }
              // console.log(123)
              this.getBookList(page,pageSize)
            } else {
            }
          }
          )
      }
    })
  }
  pageChange = (page,pageSize) => {
    // console.log('分页改变',page,pageSize)
    // 分页的页码发生改变
    // 当页面发生改变重新请求数据
    // 总条数 每页条数 每页的数据显示
    this.getBookList(page,pageSize)
  }
  render () {
    let {dataSource,page,pageSize,total,spinning,updateShow,addShow} = this.state
    let data = this.data
    let {name,booktype,pic,price,desc} = this.state
    return (
      <div>
        <Button onClick={this.addBook}>添加图书</Button>
        <Card>
          <Spin spinning={spinning}>
            <Table 
              columns={this.columns} 
              dataSource={dataSource} 
              pagination={false}
              rowKey={dataSource.key}
            >
            </Table>
            <Pagination 
                simple current={page} 
                pageSize={pageSize}
                total={total} 
                onChange={this.pageChange}
              />
          </Spin>
        </Card>
        {!updateShow || <BookUpdate cacelUpdate={this.cacelUpdate}
        data={data}
        >
        </BookUpdate> }
        {!addShow || <BookAdd
          cacelAdd={this.cacelAdd}
          date={{name,booktype,pic,price,desc}}
        >

        </BookAdd>}
      </div>
    )
  }
}

export default BookList