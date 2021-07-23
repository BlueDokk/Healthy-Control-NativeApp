import { StyleSheet } from "react-native";
import colors from "../../config/colors";


const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: colors.lightBlue,
        flexDirection: 'row',
        marginBottom: 3,
        padding: 10,
        paddingHorizontal: 30,
        width: '95%',
        borderRadius: 10,
    },
    iconItem: {
        alignSelf: 'center',
    },
    itemText: {
        marginLeft: 10,
        alignSelf: 'center',
        alignItems: 'center',
        color: colors.primary,
    },
})

export default styles;
