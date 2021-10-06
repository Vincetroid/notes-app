import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

type ParamList = {
  NoteDetail: {
    title: string;
    description: string;
  };
};

const NoteDetail = (): JSX.Element => {
  const route = useRoute<RouteProp<ParamList, 'NoteDetail'>>();
  const { title, description } = route.params;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default NoteDetail;
