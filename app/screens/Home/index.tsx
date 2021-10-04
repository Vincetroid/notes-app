import React from 'react';
import { ScrollView } from 'react-native';
import NotePreview from '../../components/NotePreview';

const Home = () => {
  return (
    <ScrollView>
      <NotePreview />
    </ScrollView>
  );
};

export default Home;
