import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, View } from 'react-native';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicatorComponent';
import BannerImage from '../../components/BannerImage/BannerImageComponent';
import Button from '../../components/Button/ButtonComponent';
import Screen from '../../components/ScreenTag/ScreenTagComponent';


import styles from './styles';

function WelcomeScreen({ navigation }) {

  const { loading } = useSelector(state => state.loading);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo.png')}
        />

        <BannerImage />

        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            marginTop={10}
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Sign Up"
            marginTop={10}
            color="secondary"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
      </Screen>
    </>
  );
}

export default WelcomeScreen;