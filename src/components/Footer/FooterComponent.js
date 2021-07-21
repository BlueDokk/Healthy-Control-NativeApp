import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

function FooterComponent({marginTop = 160}) {
    return (
        <View style={[styles.footer, {marginTop}]}>
            <Image source={require('../../../assets/images/logo.png')}/>
            <Text style={styles.copyrightText}>Copyright© 2021 Healthy Control</Text>
        </View>
    );
}


export default FooterComponent;