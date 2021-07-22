import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';

import RecordsScreen from '../screens/Records/RecordsScreen';
import CalculatorScreen from '../screens/Calculator/CalculatorScreen';
import AboutBMIScreen from '../screens/aboutBMI/AboutBMIScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import colors from '../config/colors';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import authService from '../firebase/authServices';
import ButtonTab from '../components/ButtonTab/ButtonTabComponent';


const Tab = createBottomTabNavigator();

const handleLogout = () => {
    AsyncStorage.clear();
    authService.logOut();
};

function DashboardNavigator(props) {

    return (
        <Tab.Navigator
            initialRouteName="Calculator"
            tabBarOptions={{
                showLabel: false,
                keyboardHidesTabBar: true,
                style: {
                    // position: 'absolute',
                    // bottom: 20,
                    // left: 10,
                    // right: 10,
                    // borderRadius: 15,
                    elevation: 0,
                    backgroundColor: colors.primary,
                    height: 90,
                    ...styles.shadow
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
                            focused = {focused}
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
                            focused = {focused}
                            size={size}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Calculator"
                component={CalculatorScreen}
                options={{
                    tabBarIcon: ({ focused, size }) => (
                        <ButtonTab
                            icon='calculator'
                            label='Calculator'
                            focused = {focused}
                            size={size}
                        />
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
                            focused = {focused}
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
                            focused = {focused}
                            size={size}
                        />
                        </TouchableOpacity>
                    )
                }}
            />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.5,
        elevation: 5,
    }
});


export default DashboardNavigator;




// import React from 'react';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { FontAwesome5 } from '@expo/vector-icons';

// import RecordsScreen from '../screens/Records/RecordsScreen';
// import CalculatorScreen from '../screens/Calculator/CalculatorScreen';
// import AboutBMIScreen from '../screens/aboutBMI/AboutBMIScreen';
// import ProfileScreen from '../screens/Profile/ProfileScreen';
// import colors from '../config/colors';
// import { TouchableOpacity } from 'react-native';
// import authService from '../firebase/authServices';


// const Tab = createBottomTabNavigator();

// const handleLogout = ()=>{
//     AsyncStorage.clear();
//     authService.logOut();
// }

// function DashboardNavigator(props) {
//     return (
//         <Tab.Navigator
//             initialRouteName="Calculator"
//             activeTintColor='#fff'
//             tabBarOptions={{
//                 style: {
//                     backgroundColor: colors.primary,
//                     color: colors.white,
//                 }
//             }}

//         >
//             <Tab.Screen
//                 name="AboutBMI"
//                 component={AboutBMIScreen}
//                 options={{
//                     tabBarIcon: ({ focused, color, size }) => (
//                         <FontAwesome5
//                             name="info-circle"
//                             size={size}
//                             // color={focused ? colors.white : colors.lightAccent}
//                             color={color}
//                         />
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name="My Records"
//                 component={RecordsScreen}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <FontAwesome5
//                             name="server"
//                             size={size}
//                             color={color}
//                         />
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name="Calculator"
//                 component={CalculatorScreen}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <FontAwesome5
//                             name="calculator"
//                             size={size}
//                             color={color}
//                         />
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name="Profile"
//                 component={ProfileScreen}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <FontAwesome5
//                             name="user-alt"
//                             size={size}
//                             color={color}
//                         />
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name="Logout"
//                 component={ProfileScreen}
//                 options={{
//                     tabBarIcon: ({ color, size }) => (
//                         <TouchableOpacity onPress={handleLogout}>
//                             <FontAwesome5
//                                 name="sign-out-alt"
//                                 size={size}
//                                 color={color}
//                             />
//                         </TouchableOpacity>
//                     )
//                 }}
//             />

//         </Tab.Navigator>
//     );
// }

// export default DashboardNavigator;