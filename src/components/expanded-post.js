import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Metadata from './metadata';

export default function ExpandedPost() {
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <Text style={styles.heading}>How to run a More Effective Meeting</Text>
      <View style={styles.metadata}>
        <Metadata time text="50m ago" />
        <Metadata comment text="68 comments" />
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    height: 300,
    padding: 20,
    marginBottom: 10,
  },
  image: {
    height: 175,
    backgroundColor: '#cadeed',
    borderRadius: 15,
  },
  heading: {
    marginTop: 20,
    fontSize: 22,
    maxWidth: '80%',
    fontWeight: 'bold',
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});
