import React from 'react';
import SignInScreen from '../screens/signIn';
import SignUpScreen from '../screens/signUp';
import ForgotPwdScreen from '../screens/forgotpwd';
import HomeScreen from '../screens/home';
import AccountScreen from '../screens/account';
import HistoryScreen from '../screens/history';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { COLORS } from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const authStack = createStackNavigator({
    signin: {
        screen: SignInScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    signup: {
        screen: SignUpScreen,
    },
    forgotpwd: {
        screen: ForgotPwdScreen
    },
});

const bottomStack = createBottomTabNavigator({
    history: {
        screen: HistoryScreen,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor, focused}) => <Icon name='history' size={focused ? 30: 20} color={COLORS.primary} />
        }
    },
    account: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({tintColor, focused}) => <Icon name='history' size={focused ? 30: 20} color={COLORS.primary} />
        }
    },
    home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, focused}) => <Icon name='history' size={focused ? 30: 20} color={COLORS.primary} />
        }
    }
},{
    initialRouteName: 'home',
    tabBarOptions: {
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.grey,
        labelStyle: {
            fontWeight: 'bold',
        },
        tabStyle: {

        }
    }
})

const router = createAppContainer(bottomStack);

export default router;