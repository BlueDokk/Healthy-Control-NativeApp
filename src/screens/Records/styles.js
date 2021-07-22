import { StyleSheet } from 'react-native';
import Constants from "expo-constants";
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 30,
        alignItems: 'center',
        flex: 1,
    },
    row: {
        backgroundColor: colors.secondary,
        borderRadius: 6,
        marginVertical: 4,
    },
    text: {
        color: colors.white,
    },
});

export default styles;