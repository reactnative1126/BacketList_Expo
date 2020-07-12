import React from 'react';
import { Text, View, YellowBox } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import styles from "./src/StyleSheet";

import BucketList from "./src/screens/BucketList";
import Calendar from "./src/screens/Calendar";
import Home from "./src/screens/Home";
import InAction from "./src/screens/InAction";
import Landing from "./src/screens/Landing";
import Login from "./src/screens/Login";
import Memories from "./src/screens/Memories";
import Profile from "./src/screens/Profile";
import SetupBucketList from "./src/screens/SetupBucketList";
import SetupCalendar from "./src/screens/SetupCalendar";
import SetupLocation from "./src/screens/SetupLocation";
import Signup from "./src/screens/Signup";
import DeleteAccount from "./src/screens/DeleteAccount";

import { Provider } from 'react-redux';
import rootReducer from "./src/reducers"

//create store
const store = createStore(rootReducer, applyMiddleware(thunk));


const Auth = createStackNavigator({
  Login: Login,
  Signup: Signup,
  SetupBucketList: SetupBucketList,
  SetupCalendar: SetupCalendar,
  SetupLocation, SetupLocation,
  Landing: Landing,
}, {initialRouteName:"Landing"})

const profileNav = createStackNavigator({
  Profile: Profile,
  Home: Home,
  DeleteAccount: DeleteAccount,
}, {initialRouteName:"Home"})

//create bottom tab navigation
const BottomTabNav = createBottomTabNavigator({
  Home: profileNav,
  "My BucketList": BucketList,
  "Wish List": InAction,
  Calendar: Calendar,
  "My Memories": Memories
})


const MainApp = createSwitchNavigator({
  //InitialScreens: InitialScreens,
  Auth: Auth,
  Main: BottomTabNav
},
{
  initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(MainApp);

YellowBox.ignoreWarnings(['Setting a timer']);

class App extends React.Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
        </Provider>
    );
  }
}

export default App;


