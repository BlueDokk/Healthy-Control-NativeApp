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
import SubmitButtonComponent from '../../components/SubmitButton/SubmitButtonComponent';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicatorComponent';
import validationSchemas from '../../utility/validationSchemas';
import { registerWithEmailPasswordName } from '../../actions/auth';

import styles from './styles';


function SignupScreen({ navigation }) {

  const [signupFailed, setSignupFailed] = useState(false);
  const { loading } = useSelector(state => state.loading);
  const dispatch = useDispatch();


  const handleSubmit = (userInfo) => {

    const {email, password, name:username, lastname } = userInfo;
    const name = `${username} ${lastname}`;
    
    dispatch(registerWithEmailPasswordName(email, password, name));
  
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <Title>Sign Up</Title>
        <SeparatorComponent />
        <Form
          initialValues={{ name: "", lastname: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchemas.signupSchema}
        >
          <ErrorMessage
            error="Invalid lastname."
            visible={signupFailed} />
          <FormField
            autoCorrect={false}
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCorrect={false}
            name="lastname"
            placeholder="Lastname"
          />
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
          {/* <SubmitButton title="Login" /> */}

          <SubmitButtonComponent title="Sign Up" />

        </Form>

        <TextNavigator
          targetPath={() => navigation.navigate('Login')}
        >
          Do you already have an account?
        </TextNavigator>

        <Footer marginTop={90} />

      </Screen>
    </>
  );
}

export default SignupScreen;