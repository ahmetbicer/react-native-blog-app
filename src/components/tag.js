import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Tag() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DESIGN</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'baseline',
    height: 25,
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    backgroundColor: '#5f009f',
  },
  text: {fontWeight: 'bold', color: 'white', fontSize: 14},
});
