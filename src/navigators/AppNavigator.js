import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';

import RecordsScreen from '../screens/Records/RecordsScreen';
import CalculatorScreen from '../screens/Calculator/CalculatorScreen';
import AboutBMIScreen from '../screens/aboutBMI/AboutBMIScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import colors from '../config/colors';
import { TouchableOpacity } from 'react-native';
import authService from '../firebase/authServices';


const Tab = createBottomTabNavigator();

const handleLogout = ()=>{
    AsyncStorage.clear();
    authService.logOut();
}

function AppNavigator(props) {
    return (
        <Tab.Navigator
            initialRouteName="Calculator"
            activeTintColor='#fff'
            tabBarOptions={{
                style: {
                    backgroundColor: colors.primary,
                    color: colors.white,
                }
            }}

        >
            <Tab.Screen
                name="AboutBMI"
                component={AboutBMIScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome5
                            name="info-circle"
                            size={size}
                            color={focused ? colors.white : colors.lightAccent}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="My Records"
                component={RecordsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="server"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Calculator"
                component={CalculatorScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="calculator"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="user-alt"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Logout"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <TouchableOpacity onPress={handleLogout}>
                            <FontAwesome5
                                name="sign-out-alt"
                                size={size}
                                color={color}
                            />
                        </TouchableOpacity>
                    )
                }}
            />

        </Tab.Navigator>
    );
}



export default AppNavigator;