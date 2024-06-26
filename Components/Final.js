import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

const Final = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Final;
