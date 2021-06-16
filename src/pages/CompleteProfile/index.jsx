import React, { useState, useEffect } from 'react';
import { List, Space, Skeleton, Rate, Modal } from 'antd';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Title } from '../../components/Typography';
import { openNotification } from '../../utils/notifications';
import { useGetSkillsQuery, useCompleteProfileMutation } from '../../services/serviceProviderApi';

const CompleteProfile = () => {
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { data: response, isLoading, isSuccess } = useGetSkillsQuery();
  const [completeProfile, { isLoading: isCompleteProfileLoading }] = useCompleteProfileMutation();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (isSuccess && response) {
      setOptions(response.data.map(item => ({ ...item, checked: false, experience: 0 })))
    }
    
  }, [isSuccess, response])

  const toggleItem = (item, index) => {
    const newOptions = [...options];
    newOptions[index] = {
      ...item,
      checked: !item.checked,
      experience: item.checked ? 1 : item.experience || 1
    };

    setOptions(newOptions);

    if (!item.checked) {
      setModalData({
        item: {
          ...item,
          checked: !item.checked,
        },
        index
      });

      setIsModalVisible(true)
    }
  }

  const updateItem = () => {
    const newOptions = [...options];
    newOptions[modalData.index] = modalData.item;

    setOptions(newOptions);
    setIsModalVisible(false);
  }

  const onCompleteProfile = async () => {
    try {
      const skillsToSubmit = [];
      options.map(item => {
        if (item.checked) {
          const { id, experience } = item;
          skillsToSubmit.push({
            experience,
            skillId: id
          });
        }
      });

      if (skillsToSubmit.length < 3) {
        openNotification({
          message: 'Error', 
          description: 'Please choose at least 3 Skills from the list'
        });
        return;
      }

      const response = await completeProfile(skillsToSubmit).unwrap();
      window.localStorage.setItem('skillsSet', response.data.skillsSet);

      history.push('/home');
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
      <Title level={3}>Pick Skills</Title>
      <List
        size="large"
        bordered
        dataSource={options}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button
                type='primary'
                onClick={() => toggleItem(item, index)}>
                  {item.checked ? 'Unselect' : 'Select'}
                </Button>, 
              item.checked ? <Button
                onClick={() => {
                  setModalData({
                    item,
                    index
                  });

                  setIsModalVisible(true);
                }}
              >
                Edit
              </Button> : null
            ]}
          >
            <List.Item.Meta
              title={item.name}
            />
          </List.Item>
        )}
      />

      <Button
        type='primary'
        onClick={onCompleteProfile}
        loading={isCompleteProfileLoading}
      >
        Complete Profile
      </Button>

      <Modal title="Set Experience" visible={isModalVisible} onOk={() => updateItem()} onCancel={() => setIsModalVisible(false)}>
        <Rate 
          count={10}
          value={modalData ? modalData.item.experience : 0}
          onChange={value => setModalData({ 
            ...modalData,
            item: {
              ...modalData.item,
              experience: value
            }
           })}
          defaultValue={0}
        />
      </Modal>
    </Space>
  )
};

export default CompleteProfile;
