import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './pages/Login';
import ProfileScreen from './pages/Profile'
import HomeScreen from './pages/Home'



const MainNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
},
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            inactiveBackgroundColor: '#696969',
            activeBackgroundColor: '#FF7979',
            activeTintColor: '#000'
        },
        


    }
);

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        path: './pages/Login'
    },
},
    {
        initialRouteName: 'Login',
        mode: 'modal',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        },
    }
);

// const AppStackNavigator = createStackNavigator({
//     Home: {
//         screen: HomePage,
//     },
// },
//     {
//         navigationOptions: {
//         },
//     })


export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigator,
            AuthStack
        }, {
        initialRouteName: 'AuthStack',
    },
    )
);