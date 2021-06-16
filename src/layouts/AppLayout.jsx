import React from 'react';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header, Content } = Layout;

const AppLayout = ({ children }) => {
  const history = useHistory();
  
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item onClick={() => {
            window.localStorage.removeItem('jwt');
            window.localStorage.removeItem('skillsSet');
            history.push('/login')
          }} key="1">Log out</Menu.Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
    </Layout>
  ); 
};

export default AppLayout;
