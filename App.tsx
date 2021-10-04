import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomMenu from './app/screens/BottomMenu';
import SignIn from './app/screens/SignIn';
import SignUp from './app/screens/SignUp';

console.disableYellowBox = true;

const isLoggedIn = true;

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack.Navigator>
          {isLoggedIn ? (
            // Logged users
            <RootStack.Group screenOptions={{ headerShown: false }}>
              <RootStack.Screen name="BottomMenu" component={BottomMenu} />
            </RootStack.Group>
          ) : (
            // Auth users
            <RootStack.Group screenOptions={{ headerShown: false }}>
              <RootStack.Screen name="SignIn" component={SignIn} />
              <RootStack.Screen name="SignUp" component={SignUp} />
            </RootStack.Group>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}
