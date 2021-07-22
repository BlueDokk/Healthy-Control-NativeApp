import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    aboutContainer: {
        backgroundColor: colors.white,
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 40,
        borderRadius: 15,
        width: '85%',
    },
    backgroundContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '110%',
    },
    image: {
        width: 260,
        height: 240,
        marginBottom: 20,
    },
    separator: {
        marginBottom: 15,
    },
    text: {
        paddingHorizontal: 30,
        marginTop: 10, 
        textAlign: 'center'
    }
    
    
    
});

export default styles;