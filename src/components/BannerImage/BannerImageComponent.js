import React from 'react';
import { Image, View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

function BannerImageComponent() {
    return (
        <View style={styles.bannerImageContainer}>
            <LottieView
                autoPlay
                loop
                style={styles.bannerBackground}
                source={require("../../../assets/animations/bannerBackground.json")}
            />
            <Image
                style={styles.bannerImage}
                source={require('../../../assets/images/banner.png')}
            />
        </View>
    );
}


export default BannerImageComponent;