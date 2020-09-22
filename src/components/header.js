import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUV1yQnNKEsSbffgVjjCFgY3Dq8cF1hce3nw&usqp=CAU',
        }}
      />
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
    width: 30,
    height: 30,
    backgroundColor: '#e0dde8',
    marginLeft: 20,
  },
  menu: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
});
