import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './src/screens/Search';
import Constant from 'expo-constants';
import VideoPlayer from './src/screens/VideoPlayer';
import LiveVideos from './src/screens/LiveVideos';
import Explore from './src/screens/Explore';

import {MaterialIcons} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const rootHome = () => {
  return(
    <Tabs.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {

            if (route.name === 'home') {
              iconName = 'home';
                
            } else if (route.name === 'livevideos') {
              iconName = 'subscriptions';
            } else if (route.name === 'explore'){
              iconName = 'explore';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={32} color={color} />;
          },
        })}
        
        tabBarOptions={{
          activeTintColor: 'darkblue',
          inactiveTintColor: 'gray',
        }}
      >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="livevideos" component={LiveVideos} />
      <Tabs.Screen name="explore" component={Explore} />

    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={rootHome}></Stack.Screen>
        <Stack.Screen name="search" component={Search}></Stack.Screen>
        <Stack.Screen name="videoPlayer" component={VideoPlayer}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

{/* <View style={styles.container}>
    //   {/* <Home /> */}
    //   <Search />
    //   <StatusBar style="auto" />
    // </View> */}
