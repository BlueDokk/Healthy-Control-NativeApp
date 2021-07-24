import React from 'react';
import { View, Text, Image } from 'react-native';
import { Platform } from 'react-native';

import Screen from '../../components/ScreenTag/ScreenTagComponent';
import Separator from '../../components/Separator/SeparatorComponent';
import Title from '../../components/Title/TitleComponent';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import colors from '../../config/colors';

function AboutBMIScreen(props) {


  return (
    <Screen style={styles.container}>
      <Title marginTop={20}>About BMI</Title>
      <View style={styles.aboutContainer}>
        {(Platform.OS === 'android')&&<LinearGradient
          colors={['transparent', colors.background]}
          style={styles.backgroundContainer}
        />}

        <Image
        resizeMode={'contain'}
        style={styles.image}
          source={require("../../../assets/images/aboutBMI.png")}
        />

        <Separator style={styles.separator} />
        <Text style={styles.text}>
          Body mass index (BMI) is a value derived
          from the mass (weight) and height of
          a person. The BMI is defined as the body
          mass divided by the square of the body
          height, and is expressed in units of kg/m2,
          resulting from mass in kilograms and
          height in metres.
        </Text>


      </View>

    </Screen>
  );
}



export default AboutBMIScreen;