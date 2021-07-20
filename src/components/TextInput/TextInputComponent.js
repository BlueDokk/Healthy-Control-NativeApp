import React from 'react';
import { View } from 'react-native';
import colors from '../../config/colors';
import styles from '../ScreenTag/styles';

function TextInputComponent({ icon, width = "100%", ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={colors.placeholder}
                    style={styles.icon}
                />
            )}
            <TextInput
                placeholderTextColor={colors.placeholder}
                style={styles.textInput}
                {...otherProps}
            />
        </View>
    );
}


export default TextInputComponent;