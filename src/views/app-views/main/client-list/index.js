import React, {Component} from 'react'
import {Button, Card, message, Table, Tooltip} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {deleteClient, getClient} from "../../../../redux/reducers/Clients";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";


export class UserList extends Component {

  componentDidMount() {
    this.props.getClient()
  }

  deleteUser = userId => {
    this.props.deleteClient(userId)
    message.success({content: `Deleted user ${userId}`, duration: 2});
  }

  render() {
    const tableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: {
          compare: (a, b) => a.name.length - b.name.length,
        },
        render: (text, user) => <Link to={`user/${user.id}`}>{text}</Link>,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        sorter: {
          compare: (a, b) => a.name.length - b.name.length,
        },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        sorter: {
          compare: (a, b) => a.name.length - b.name.length,
        },
      },
      {
        title: 'Website',
        dataIndex: 'website',
        sorter: {
          compare: (a, b) => a.name.length - b.name.length,
        },
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="Delete">
              <Button danger icon={<DeleteOutlined/>} onClick={() => {
                this.deleteUser(elm.id)
              }} size="small"/>
            </Tooltip>
          </div>
        )
      }
    ];
    return (
      <Card bodyStyle={{'padding': '0px'}}>
        <Table
          columns={tableColumns}
          dataSource={this.props.clients}
          rowKey='id'
          loading={this.props.isLoading}/>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  clients: state.clients.clients,
  isLoading: state.clients.isLoading
})

export default withRouter(connect(mapStateToProps, {getClient, deleteClient})(UserList))
