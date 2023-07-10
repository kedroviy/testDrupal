import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API, STRING, ROUTES} from '../../app-config/constants.ts';
import {getData} from '../../services/api/client.ts';

import style from './newsDetailsScreen.style.ts';

const NewsDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const storageData = useSelector(state => state.appReducer);
  const [post, setPost] = useState();
  const [tokens, setTokens] = useState();

  useEffect(() => {
    if (!post && !tokens) {
      AsyncStorage.multiGet([
        STRING.ACCESS_TOKEN,
        STRING.CLIENT,
        STRING.UID,
        STRING.AUTHORIZATION,
      ]).then(value => {
        if (value) {
          simpleArray = [].concat(...value);
          const obj = Object.fromEntries(
            simpleArray.reduce(
              (acc, val, i) => (
                i % 2 === 0 ? acc.push([val]) : acc[acc.length - 1].push(val),
                acc
              ),
              [],
            ),
          );

          setTokens(obj);
        }
      });
    }

    if (tokens && !post) {
      getData(API.NEWS, tokens)
        .getCurrentNewsRequest(storageData.currentPost)
        .then(res => {
          if (res.status === 200) {
            setPost(res.data.news);
          }
        })
        .catch(e => console.log(e));
    }
  }, [post, storageData.currentPost, tokens]);

  const goBack = () => {
    navigation.navigate(ROUTES.MAIN);
  };

  return (
    <View style={style.container}>
      <View style={style.cardContainer}>
        <Card>
          <Button mode="contained" onPress={() => goBack()}>
            Back
          </Button>
          {post ? (
            <>
              <Card.Title title={post.title} />
              <Card.Content>
                <Card.Cover source={{uri: `${post.image_url}`}} />
              </Card.Content>
            </>
          ) : null}
        </Card>
      </View>
    </View>
  );
};

export {NewsDetailsScreen};
