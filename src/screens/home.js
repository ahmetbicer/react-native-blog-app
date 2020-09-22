import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CollapsedPost from '../components/collapsed-post';
import ExpandedPost from '../components/expanded-post';
import Header from '../components/header';
import PopularHeader from '../components/popular-header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ExpandedPost />
      <ScrollView>
        <PopularHeader />
        <CollapsedPost />
        <CollapsedPost />
      </ScrollView>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
