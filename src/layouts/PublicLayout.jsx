import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const PublicLayout = ({ children }) => (
  <Layout>
    <Content>{children}</Content>
  </Layout>
);

export default PublicLayout;
