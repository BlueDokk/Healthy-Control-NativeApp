import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    calculator: {
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 40,
        borderRadius: 15,
        width: '85%',
    },
    backgroundCalculator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '110%',
    },
    image: {
        width: 124,
        height: 240,
    },
    separator: {
        marginBottom: 15,
    },
    bmiNumber: {
        fontSize: 40,
        marginTop: 5,
        marginBottom: 0,
    },
    bmiText: {
        fontSize: 20,
        marginTop: 0,
        marginBottom: 10,
    },
    inputNumeric: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderColor: colors.primary,
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