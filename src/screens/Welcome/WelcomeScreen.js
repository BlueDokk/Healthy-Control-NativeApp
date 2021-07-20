import React from 'react';
import { Image, View } from 'react-native';
import BannerImage from '../../components/BannerImage/BannerImageComponent';
import Button from '../../components/Button/ButtonComponent';
import Screen from '../../components/ScreenTag/ScreenTagComponent';

import styles from './styles';

function WelcomeScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo.png')}
      />
      
      <BannerImage />

      <View style={styles.buttonContainer}>
        <Button
          title="Log In"
          onPress={() => navigation.navigate('Login')}
        />
        <Button
          title="Sign Up"
          color="secondary"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </Screen>
  );
}

export default WelcomeScreen;