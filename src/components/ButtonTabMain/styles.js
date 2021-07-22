import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.5,
        elevation: 5,
        width: 80,
        height:80,
        borderRadius:40,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 8,
    }
});

export default styles;