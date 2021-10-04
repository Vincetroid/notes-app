import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

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

const NotePreview = (): JSX.Element => {
  return (
    <>
      {notes.map((note, i) => (
        <Card>
          <Card.Title>{note.title}</Card.Title>
          <Card.Divider />
          <View key={i}>
            <Text numberOfLines={3} style={styles.desc}>
              {note.description}
            </Text>
          </View>
        </Card>
      ))}
    </>
  );
};

export default NotePreview;
