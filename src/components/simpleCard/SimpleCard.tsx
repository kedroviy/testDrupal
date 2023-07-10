import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {ROUTES} from '../../app-config/constants.ts';
import {setCurrentPost} from '../../redux/actions/appActions.ts';
import style from './simpleCard.style.ts';

const SimpleCard: React.FC = ({...item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getPostId = (id: number) => {
    dispatch(setCurrentPost(id));
    navigation.navigate(ROUTES.DETAILS);
  };

  return (
    <View style={style.container}>
      <Card>
        <Card.Title title={item.title} />
        <Card.Content>
          <Text variant="titleLarge">{item.short_text}</Text>
        </Card.Content>
        <Card.Cover source={{uri: `${item.image_url}`}} />
        <Card.Actions>
          <Button mode="contained" onPress={() => getPostId(item.id)}>
            See details
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export {SimpleCard};
