import { StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.white,
        borderColor: colors.primary,
        borderWidth: 8,
        ...Platform.select({
            iod: {
                zIndex: 5,
            },
            android: {
                elevation: 5,
            }
        }),
    }
});

export default styles;