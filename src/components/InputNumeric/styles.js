import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    
    inputNumeric: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    input: {
        borderColor: colors.primary,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        width: 61,
    },
    labelInput: {
        color: colors.primary,
        fontWeight: 'bold',
    }
});

export default styles;