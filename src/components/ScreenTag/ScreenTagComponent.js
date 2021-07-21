import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

function Screen({ children, style }) {
    return (

        <SafeAreaView style={[styles.screen, style]}>
            <ScrollView style={[styles.scroll]}>
                <View style={[styles.view], style}>{children}</View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Screen;