import { notification } from 'antd';

export const openNotification = ({
  message,
  description,
  icon,
}) => {
  notification.open({
    message,
    description,
    icon,
  });
};
