import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Note from '../components/Note';

const StackScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>This is the main screen where the stack will be shown.</Text>
      <Note></Note>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StackScreen;