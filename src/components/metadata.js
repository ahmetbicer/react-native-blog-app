import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Metadata(props) {
  return (
    <View style={styles.metadata}>
      <Icon
        style={styles.icon}
        name={props.time ? 'clock-time-four-outline' : 'comment-text-outline'}
        color={'#92909d'}
        size={18}
      />
      <Text style={{color: '#92909d'}}>{props.text}</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
  },
});
