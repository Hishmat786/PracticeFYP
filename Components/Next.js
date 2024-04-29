import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

const Next = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Next"
        onPress={() => navigation.navigate('Final')}
      />
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

export default Next;
