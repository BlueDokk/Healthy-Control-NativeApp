import React from 'react';
import LottieView from 'lottie-react-native';
import { Platform, StyleSheet, View } from 'react-native';
import colors from '../../config/colors';


function ActivityIndicatorComponent({ visible = false }) {

    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <LottieView
                autoPlay
                loop
                source={require("../../../assets/animations/loader.json")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: colors.white,
        height: "100%",
        opacity: 0.8,
        width: "100%",
        ...Platform.select({
            iod: {
                zIndex: 1
            },
            android: {
                elevation: 1,
            }
        }),
    }
})


export default ActivityIndicatorComponent;