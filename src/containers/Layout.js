import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link, withRouter} from 'react-router-dom'
import * as actions from "../store/actions/auth";
import {connect} from "react-redux";

const { Header, Content, Footer } = Layout;



class CustomLayout extends React.Component{

  render() {
    return (
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
              {
                this.props.isAuthenticated ?
                    <Menu.Item key="2" onClick={this.props.logout}>
                      Logout
                    </Menu.Item>
                    :
                    <Menu.Item key="2">
                      <Link to="/login">Login</Link>
                    </Menu.Item>

              }
              <Menu.Item key="1">
                <Link to="/"></Link>
              </Menu.Item>

            </Menu>
          </Header>
          <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to="/"></Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/"></Link></Breadcrumb.Item>

            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>

              {this.props.children}

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Kennedy W</Footer>
        </Layout>
    )

  }
}


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  }
}


export default withRouter(connect(mapDispatchToProps)(CustomLayout))