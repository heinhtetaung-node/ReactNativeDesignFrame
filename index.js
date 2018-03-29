import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import HomeComponent from './src/View/HomeComponent';
import AboutComponent from './src/View/AboutComponent';

import { Home, About } from './screenNames';

var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    About: {
        path: '/about',
        screen: AboutComponent,
    }
};
let drawerNavigatorConfig = {    
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
    },
    order: [Home, About]
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent('DesignFrame', () => App);