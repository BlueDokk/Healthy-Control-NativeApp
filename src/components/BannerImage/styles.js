import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bannerImageContainer: {
        marginTop: 20,
        marginBottom: 80,

    },
    bannerImage: {
        width: 298,
        height: 246,
        position:'relative',
        top: 50,
    },
    bannerBackground:{
        position:'absolute',
        alignSelf:'center',
        top: 0,
        width:400,
        height:400,
    }
});

export default styles;
