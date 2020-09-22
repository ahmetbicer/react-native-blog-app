import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Metadata from './metadata';
import Tag from './tag';

export default function CollapsedPost() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.image} />
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Tag />
          <Text style={styles.heading}>
            How to run a More Effective Meeting
          </Text>
          <View style={styles.metadata}>
            <Metadata time text="10s ago" />
            <Metadata comment text="20 comments" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    height: 120,
    padding: 20,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    height: 75,
    width: 75,
    backgroundColor: '#cadeed',
    borderRadius: 15,
  },
  heading: {
    marginTop: 4,
    fontSize: 18,
    maxWidth: '80%',
    fontWeight: 'bold',
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
