import {notification} from 'antd';
import 'antd/dist/antd.css';

export const openNotificationWithIcon = (props) => {
    notification[props.type]({
        message: props.message,
        duration: 2
    });
};