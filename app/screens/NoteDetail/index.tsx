import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useRoute,
  useNavigation,
} from '@react-navigation/native';

type ParamList = {
  NoteDetail: {
    title: string;
    description: string;
  };
};

const NoteDetail = (): JSX.Element => {
  const navigation: NavigationProp<any> = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'NoteDetail'>>();
  const { title, description } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, [title]);

  return (
    <View>
      <Text>{description}</Text>
    </View>
  );
};

export default NoteDetail;
