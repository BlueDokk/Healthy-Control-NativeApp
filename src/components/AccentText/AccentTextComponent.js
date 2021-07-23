import React from 'react';
import { Text } from 'react-native';
import {
    useFonts,
    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_600SemiBold,
    Orbitron_700Bold,
    Orbitron_800ExtraBold,
    Orbitron_900Black,
} from '@expo-google-fonts/orbitron';

import ActivityIndicator from '../ActivityIndicator/ActivityIndicatorComponent';
import styles from './styles';

function AccentTextComponent({ children, style }) {

    let [fontsLoaded] = useFonts({
        Orbitron_400Regular,
        Orbitron_500Medium,
        Orbitron_600SemiBold,
        Orbitron_700Bold,
        Orbitron_800ExtraBold,
        Orbitron_900Black,
    });

    // Show loading indicator while fonts are loaded.
    if (!fontsLoaded) {
        return <ActivityIndicator visible={true} />
    } else {
        return (
            <Text style={[styles.title, style]}>{children}</Text>
        );
    }
}

export default AccentTextComponent;