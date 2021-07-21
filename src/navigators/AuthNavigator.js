import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignupScreen from '../screens/SignUp/SignupScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
)


export default AuthNavigator;