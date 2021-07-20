import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: 280,
        height: 50,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default styles;
