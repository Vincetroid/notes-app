import React from 'react';
import { ScrollView } from 'react-native';
import NotesPreview from '../../components/NotesPreview';

const Home = () => {
  return (
    <ScrollView>
      <NotesPreview />
    </ScrollView>
  );
};
export default Home;
