import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
    },
    header:{
        backgroundColor: colors.lightBlue,
        flexDirection:'row',
        marginBottom: 30,
        padding: 20,
        width: '95%',
        borderRadius: 10,
    },
    userContainer:{
        justifyContent:'center',
        marginLeft: 10,
        
    },  
    username:{
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 18,
    },
    email:{
        color: 'gray',
    },
});

export default styles;