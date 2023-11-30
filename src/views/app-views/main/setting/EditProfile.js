import React, {Component} from 'react';
import {Avatar, Button, Col, Form, Input, message, Row, Spin, Upload} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import {fetchClient} from "../../../../redux/reducers/Clients";
import {connect} from "react-redux";

export class EditProfile extends Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchClient(id)
  }

  state= {
  	avatarUrl: '/img/avatars/thumb-6.jpg',
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  render() {
    const onFinish = values => {
      const key = 'updatable';
      message.loading({content: 'Updating...', key});
      setTimeout(() => {
        this.props.history.push('/app/main/client-list')
        message.success({content: 'Done!', key, duration: 2});
      }, 1000);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const onUploadAavater = info => {
      const key = 'updatable';
      if (info.file.status === 'uploading') {
        message.loading({content: 'Uploading...', key, duration: 1000});
        return;
      }
      if (info.file.status === 'done') {
        this.getBase64(info.file.originFileObj, imageUrl =>
          this.setState({
            avatarUrl: imageUrl,
          }),
        );
        message.success({content: 'Uploaded!', key, duration: 1.5});
      }
    };

    const onRemoveAvater = () => {
      this.setState({
        avatarUrl: ''
      })
    }

    const {avatarUrl} = this.state;

    return (
      <>
        {this.props.isLoading
          ? <Flex justifyContent="center" alignItems="center">
            <Spin/>
          </Flex>
          : <>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
              <Avatar size={90} src={avatarUrl} icon={<UserOutlined/>}/>
              <div className="ml-md-3 mt-md-0 mt-3">
                <Upload onChange={onUploadAavater} showUploadList={false} action={this.avatarEndpoint}>
                  <Button type="primary">Change Avatar</Button>
                </Upload>
                <Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
              </div>
            </Flex>
            <div className="mt-4">
              <Form
                name="basicInformation"
                layout="vertical"
                initialValues={
                  {
                    'name': this.props.user?.name,
                    'email': this.props.user?.email,
                    'username': this.props.user?.username,
                    'phoneNumber': this.props.user?.phone,
                    'website': this.props.user?.website,
                    'address': this.props.user?.address.street,
                    'city': this.props.user?.address.city,
                    'postcode': this.props.user?.address.zipcode
                  }
                }
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={16}>
                    <Row gutter={ROW_GUTTER}>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your name!',
                            },
                          ]}
                        >
                          <Input/>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your username!'
                            },
                          ]}
                        >
                          <Input/>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[{
                            required: true,
                            type: 'email',
                            message: 'Please enter a valid email!'
                          }]}
                        >
                          <Input/>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Phone Number"
                          name="phoneNumber"
                        >
                          <Input/>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Website"
                          name="website"
                        >
                          <Input/>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24}>
                        <Form.Item
                          label="Address"
                          name="address"
                        >
                          <Input/>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="City"
                          name="city"
                        >
                          <Input/>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12}>
                        <Form.Item
                          label="Post code"
                          name="postcode"
                        >
                          <Input/>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                      Save Change
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.clients.client,
  isLoading: state.clients.isLoading
})

export default connect(mapStateToProps, {fetchClient})(EditProfile)
