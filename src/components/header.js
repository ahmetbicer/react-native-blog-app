import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar} />
      <View style={styles.menu}>
        <Icon name="dots-horizontal" color={'#1f1735'} size={24} />
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 99,
    width: 25,
    height: 25,
    backgroundColor: '#e0dde8',
    marginLeft: 20,
  },
  menu: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
