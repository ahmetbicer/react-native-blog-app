import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';

export default function PopularHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Popular</Text>
      <View style={styles.menu}>
        <Text style={styles.all}>Show all</Text>
      </View>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  menu: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  all: {
    marginRight: 20,
    fontSize: 15,
    fontWeight: '700',
    color: colors.orange,
  },
});
