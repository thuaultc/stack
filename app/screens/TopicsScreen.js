import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TopicsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is where we can show current notes categorized by topic.</Text>
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

export default TopicsScreen;