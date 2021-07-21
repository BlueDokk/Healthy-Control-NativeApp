import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    error: { 
        color: colors.white,
        backgroundColor: colors.alert,
        textAlign: 'center',
        paddingVertical: 2,
        borderRadius: 5,
        width: 280,
        height: 30,
        marginTop: 10, 
    },
});

export default styles;
