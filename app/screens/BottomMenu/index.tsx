import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from '../Home';
import Notes from '../Notes';
import NoteDetail from '../NoteDetail';
import Settings from '../Settings';

const HomeStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen
        name="NoteDetail"
        component={NoteDetail}
        options={{ title: '' }}
      />
    </HomeStack.Navigator>
  );
}

function BottomMenu() {
  return (
    <>
      <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen
          name="Homesss"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <FontAwesome5 name="home" size={32} color="green" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Notes"
          component={Notes}
          options={{
            tabBarLabel: 'Notes',
            tabBarIcon: () => (
              <FontAwesome5 name="sticky-note" size={32} color="green" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Configuration"
          component={Settings}
          options={{
            tabBarLabel: 'Configuration',
            tabBarIcon: () => (
              <FontAwesome5 name="cog" size={32} color="green" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}

export default BottomMenu;
