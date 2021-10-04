import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  desc: {},
});

const notes = [
  {
    title: 'Llamarle al señor de la luz',
    description:
      'Hacerlo a las 3pm, Hacerlo a las 3pm, Hacerlo a las 3pm, Hacerlo a las 3pm, Hacerlo a las 3pm, Hacerlo a las 3pm, Hacerlo a las 3pm, Hacerlo a las 3pm, Hacerlo a las 3pm, LOREM IPSUM',
  },
  {
    title: 'Jugar Gears of war',
    description: 'Hacerlo a las 6pm',
  },
  {
    title: 'Jugar Gears of war',
    description: 'Hacerlo a las 6pm',
  },
  {
    title: 'Jugar Gears of war',
    description: 'Hacerlo a las 6pm',
  },
  {
    title: 'Jugar Gears of war',
    description: 'Hacerlo a las 6pm',
  },
  {
    title: 'Jugar Gears of war',
    description: 'Hacerlo a las 6pm',
  },
  {
    title: 'Jugar Gears of war',
    description: 'Hacerlo a las 6pm',
  },
  {
    title: 'Jugar Gears of war',
    description: 'Hacerlo a las 6pm',
  },
  {
    title: 'Jugar Gears of war',
    description: 'Hacerlo a las 6pm',
  },
];

const onSelectNotePreview = (
  note: object,
  index: number,
  navigation: object
) => {
  console.log(navigation.getState());
  navigation.navigate('Configuration');
};

const NotesPreview = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <>
      {notes.map((note, i) => (
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
