import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_600SemiBold,
    Orbitron_700Bold,
    Orbitron_800ExtraBold,
    Orbitron_900Black,
} from '@expo-google-fonts/orbitron';

import styles from './styles';

function AccentTextComponent({children, style}) {

    let [fontsLoaded] = useFonts({
        Orbitron_400Regular,
        Orbitron_500Medium,
        Orbitron_600SemiBold,
        Orbitron_700Bold,
        Orbitron_800ExtraBold,
        Orbitron_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <Text style={[styles.title, style]}>{children}</Text>
        );
    }
}

export default AccentTextComponent;