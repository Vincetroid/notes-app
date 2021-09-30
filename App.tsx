import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Note from './app/components/Note';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up .js to start on your app!</Text>
      <Note />
    </View>
  );
}
