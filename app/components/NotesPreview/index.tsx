import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  desc: {},
});

type Note = {
  title: string;
  description: string;
  create_timestamp: number;
};

const onSelectNotePreview = (note: object, index: number, navigation: any) => {
  navigation.navigate('NoteDetail', { index, ...note });
};

const NotesPreview = ({ notes }: Array<Note>): JSX.Element => {
  const navigation = useNavigation();

  return (
    <>
      {notes.map((note: Note, i: number) => (
        <TouchableOpacity
          onPress={() => onSelectNotePreview(note, i, navigation)}
        >
          <Card>
            <Card.Title>{note.title}</Card.Title>
            <Card.Divider />
            <View key={i}>
              <Text numberOfLines={3} style={styles.desc}>
                {note.description}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default NotesPreview;
