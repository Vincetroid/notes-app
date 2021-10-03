import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Home from '../Home';
import Notes from '../Notes';
import Settings from '../Settings';

const BottomTab = createBottomTabNavigator();

function BottomMenu() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
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
          tabBarIcon: () => <FontAwesome5 name="cog" size={32} color="green" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomMenu;
