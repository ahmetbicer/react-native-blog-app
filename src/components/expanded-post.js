import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Metadata from './metadata';

export default function ExpandedPost(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.image}} />
      <Text style={styles.heading}>{props.header}</Text>
      <View style={styles.metadata}>
        <Metadata time text={props.date} />
        <Metadata comment text={props.comments} />
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
