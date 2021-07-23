import React, { useState, useEffect } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import colors from '../../config/colors';

function AlertComponent({ onShow, onHide, title, message }) {

    const [alert, setAlert] = useState(false);


    useEffect(() => {
        setAlert(onShow);
    }, [onShow])


    return (
        <AwesomeAlert
            show={alert}
            showProgress={false}
            title={title}
            message={message}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText="Try again"
            confirmButtonColor={colors.primary}
            onConfirmPressed={onHide}
        />
    );
}

export default AlertComponent;