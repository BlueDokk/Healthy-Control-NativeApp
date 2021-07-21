import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

const styles = StyleSheet.create({
    scroll: {
        width:  '100%'
    },
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
});

export default styles;
