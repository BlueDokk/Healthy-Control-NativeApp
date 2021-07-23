import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../../components/Form/FormComponent';
import FormField from '../../components/FormField/FormFieldComponent';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessageComponent.js';
import Screen from '../../components/ScreenTag/ScreenTagComponent';
import Footer from '../../components/Footer/FooterComponent.js';
import TextNavigator from '../../components/TextNavigator/TextNavigatorComponent';
import Title from '../../components/Title/TitleComponent';
import SeparatorComponent from '../../components/Separator/SeparatorComponent';
import SubmitButton from '../../components/SubmitButton/SubmitButtonComponent';
import validationSchemas from '../../utility/validationSchemas';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicatorComponent';
import { loginWithEmailPassword } from '../../actions/auth';

import styles from './styles';

function LoginScreen({ navigation }) {

  const [loginFailed, setLoginFailed] = useState(false);
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const handleSubmit = (userInfo) => {

    const { email, password } = userInfo;
    dispatch(loginWithEmailPassword(email, password));

  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Title>Login</Title>
        <SeparatorComponent />
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchemas.loginSchema}
        >
          <ErrorMessage
            error="Invalid email and/or password."
            visible={loginFailed} />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Log In" />
        </Form>

        <TextNavigator
          targetPath={() => navigation.navigate('Signup')}
        >
          Create a New Account
        </TextNavigator>

        <Footer />

      </Screen>
    </>
  );
}


export default LoginScreen;