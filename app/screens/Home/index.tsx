import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { db } from '../../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import NotesPreview from '../../components/NotesPreview';

type Note = {
  title: string;
  description: string;
  create_timestamp: number;
};

const Home = () => {
  const [notes, setNotes] = useState<Array<Note>>([]);
  console.log('notes');
  console.log(notes);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const result = await getNotes(db);
    setNotes(result);
  };

  // Get a list of cities from your database
  async function getNotes(db) {
    const notesCol = collection(db, 'notes');
    const noteSnapshot = await getDocs(notesCol);
    const notesList = noteSnapshot.docs.map((doc) => doc.data());
    return notesList as Array<Note>;
  }

  return (
    <ScrollView>
      <NotesPreview notes={notes} />
    </ScrollView>
  );
};
export default Home;
