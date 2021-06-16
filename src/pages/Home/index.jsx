import React, { useState, useEffect } from 'react';
import { List, Space, Skeleton, Tag, Col, Row } from 'antd';
import { openNotification } from '../../utils/notifications';
import { Title } from '../../components/Typography';
import { useGetRequestsQuery, usePickRequestMutation } from '../../services/serviceProviderApi';

const Home = () => {
  const [options, setOptions] = useState([]);
  const { data: response, isLoading, isSuccess } = useGetRequestsQuery();
  const [pickRequest, { isLoading: isPickRequestLoading }] = usePickRequestMutation();

  useEffect(() => {
    if (isSuccess && response) {
      const finalOptions = response.data.map(item => {
        const requestSkills = item.requestSkills.map(skillItem => skillItem.skill.name);

        return {
          ...item,
          skills: requestSkills
        }
      });

      setOptions(finalOptions);
    }
  }, [isSuccess, response]);

  const onPickingRequest = async (item, index) => {
    try {
      await pickRequest(item.id).unwrap();

      // show success notification
      openNotification({
        message: 'Success', 
        description: `Accepted Request: ${item.title}`
      });


      // remove request from list
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    } catch (e) {
      // show error in notification
      if (e.data) {
        openNotification({
          message: 'Error', 
          description: e.data.message
        });

        return;
      } else {
        openNotification('Something went wrong, please try again.', '', null);
      }
      
      console.log('e', e);
    }
  }

  if (isLoading) {
    return <Skeleton />
  }

  return (
    <Space direction="vertical" size='large' style={{ width: '100%' }}>
      <Title level={3}>Pick Requests</Title>
      <List
        size="large"
        bordered
        dataSource={options}
        renderItem={(item, index) => (
          <List.Item
            className='hoverable'
            onClick={() => onPickingRequest(item, index)}
          >
            <List.Item.Meta
              title={item.title}
              description={item.description}
            />
            <Col>
              <Row justify='end'>Start Date: <strong>{item.dateFrom}</strong></Row>
              <Row justify='end'>End Date: <strong>{item.dateTo}</strong></Row>
              <Row justify='end'>
                {item.skills.map(skill => <Tag style={{ marginLeft: 8, marginRight: 0 }} color="red">{skill}</Tag>)}
              </Row>
            </Col>
          </List.Item>
        )}
      />
    </Space>
  )
};

export default Home;
