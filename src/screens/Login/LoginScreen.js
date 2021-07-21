import React, { useState } from 'react';
import * as Yup from "yup";


import Form from '../../components/Form/FormComponent';
import FormField from '../../components/FormField/FormFieldComponent';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessageComponent.js';
import Screen from '../../components/ScreenTag/ScreenTagComponent';
import Footer from '../../components/Footer/FooterComponent.js';
import TextNavigator from '../../components/TextNavigator/TextNavigatorComponent';
import Title from '../../components/Title/TitleComponent';

import styles from './styles';
import SeparatorComponent from '../../components/Separator/SeparatorComponent';
import SubmitButton from '../../components/SubmitButton/SubmitButtonComponent';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen({ navigation }) {

  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = (userInfo) => {
    console.log(userInfo);
  };

  return (
    <Screen style={styles.container}>
      <Title>Login</Title>
      <SeparatorComponent />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
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
  );
}


export default LoginScreen;