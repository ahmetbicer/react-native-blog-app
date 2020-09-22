import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CollapsedPost from '../components/collapsed-post';
import ExpandedPost from '../components/expanded-post';
import Header from '../components/header';
import PopularHeader from '../components/popular-header';

export default function HomeScreen() {
  useEffect(() => {
    StatusBar.setBackgroundColor('white');
  });

  return (
    <View style={styles.container}>
      <Header />
      <ExpandedPost
        image={
          'https://image.freepik.com/free-vector/people-using-smartphone-app-back-view_107791-639.jpg'
        }
        header={'How to run a More Effective Meeting'}
        date={'50'}
        comments={68}
      />
      <ScrollView>
        <PopularHeader />
        <CollapsedPost
          image={
            'https://cdn-images-1.medium.com/focal/90/90/54/50/1*cy3ed4BV318xSqgo3K6-tQ.png'
          }
          header={'Top 10 techniques to get rid of clutters in design system'}
          tag={'DESIGN'}
          date={'10'}
          comments={20}
        />
        <CollapsedPost
          image={
            'https://www.crushpixel.com/static14/preview2/abstract-modern-yellow-black-dots-1719202.jpg'
          }
          header={'Make an eye catchy visual in photoshop with brushes'}
          tag={'ART'}
          date={'5'}
          comments={15}
        />
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
