import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useRoute,
  useNavigation,
} from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

type ParamList = {
  NoteDetail: {
    title: string;
    description: string;
  };
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 7,
    backgroundColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  desc: {
    fontSize: 18,
  },
});

const NoteDetail = (): JSX.Element => {
  const navigation: NavigationProp<any> = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'NoteDetail'>>();
  const { title, description } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => <FontAwesome5 name="edit" size={32} color="gray" />,
    });
  }, [title]);

  return (
    <View style={styles.container}>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

export default NoteDetail;
