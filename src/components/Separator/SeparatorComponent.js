import React from 'react';
import { View } from 'react-native';

import styles from './styles';

function SeparatorComponent({style}) {
    return (
        <View
            style={[styles.separator, style]}
        />
    );
}

export default SeparatorComponent;