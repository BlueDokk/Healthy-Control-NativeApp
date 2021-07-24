import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from 'react-redux';

import RecordsScreen from '../screens/Records/RecordsScreen';
import CalculatorScreen from '../screens/Calculator/CalculatorScreen';
import AboutBMIScreen from '../screens/aboutBMI/AboutBMIScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import colors from '../config/colors';
import { Platform, TouchableOpacity } from 'react-native';
import ButtonTab from '../components/ButtonTab/ButtonTabComponent';
import ButtonTabMainComponent from '../components/ButtonTabMain/ButtonTabMainComponent';
import { startLogout } from '../actions/auth';


function DashboardNavigator() {

    const { userId } = useSelector(state => state.ui);
    const { records } = useSelector(state => state.ui);

    const Tab = createBottomTabNavigator();
    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(startLogout(userId));
    };
    return (
        <Tab.Navigator
            initialRouteName="Calculator"
            tabBarOptions={{
                showLabel: false,
                keyboardHidesTabBar: true,
                style: {
                    ...Platform.select({
                        ios: {
                          zIndex: 0
                        },
                        android: {
                          elevation: 0
                        },
                    }),
                    backgroundColor: colors.primary,
                    height: 90,
                }
            }}
        >
            <Tab.Screen
                name="AboutBMI"
                component={AboutBMIScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <ButtonTab
                            icon='info-circle'
                            label='About BMI'
                            focused={focused}
                            size={size}
                        />
                    ),

                }}
            />
            <Tab.Screen
                name="My Records"
                component={RecordsScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <ButtonTab
                            icon='server'
                            label='My Records'
                            focused={focused}
                            size={size}
                        />
                    ),
                    tabBarBadge: records?.length 
                }}
            />
            <Tab.Screen
                name="Calculator"
                component={CalculatorScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <ButtonTab
                            icon='calculator'
                            focused={focused}
                            color={colors.primary}
                            size={size + 12}
                        />
                    ),
                    tabBarButton: (props) => (
                        <ButtonTabMainComponent {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <ButtonTab
                            icon='user-alt'
                            label='Profile'
                            focused={focused}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Logout"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <TouchableOpacity onPress={handleLogout}>
                            <ButtonTab
                                icon='sign-out-alt'
                                label='Log Out'
                                focused={focused}
                                size={size}
                            />
                        </TouchableOpacity>
                    )
                }}
            />

        </Tab.Navigator>
    );
}

export default DashboardNavigator;