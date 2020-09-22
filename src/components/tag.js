import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function Tag(props) {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: props.text == 'DESIGN' ? '#5f009f' : '#fbdc56'},
      ]}>
      <Text
        style={[
          styles.text,
          {color: props.text == 'DESIGN' ? 'white' : 'black'},
        ]}>
        {props.text}
      </Text>
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
  },
  text: {fontWeight: 'bold', color: 'white', fontSize: 14},
});
