import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native-paper';

import {SimpleCard} from '@components';

import {LoginParams} from '../../app-config/models.ts';
import {API, STRING, ROUTES} from '../../app-config/constants.ts';
import {setIsLoad} from '../../redux/actions/appActions.ts';
import {getData} from '../../services/api/client.ts';
import {COLOR} from '../../app-config/colors';
import style from './mainScreen.style.ts';

const MainScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [tokens, setTokens] = useState();
  const [data, setData] = useState();
  const [user, setUser] = useState<LoginParams>();

  useEffect(() => {
    if (!user && !tokens) {
      AsyncStorage.getItem('user').then(value => {
        if (value !== null) {
          setUser([JSON.parse(value)]);
        }
      });

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

    if (tokens && !data) {
      getData(API.NEWS, tokens)
        .getNewsRequest()
        .then(response => {
          if (response.status === 200) {
            setData(response.data.news);
          }
        })
        .catch(e => console.log(e));
    }
  }, [data, tokens, user]);

  const logOut = () => {
    AsyncStorage.clear();
    dispatch(setIsLoad(false));
    navigation.navigate(ROUTES.LOGIN);
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        {user
          ? user.map(userItem => (
              <View key={userItem.id} style={style.userContainer}>
                <Text>{userItem.username}</Text>
                <Image
                  style={style.userAvatar}
                  source={{uri: userItem.avatar_url}}
                />
              </View>
            ))
          : null}
        <View>
          <Button
            mode="contained"
            buttonColor={COLOR.orange}
            textColor={COLOR.black}
            onPress={() => logOut()}>
            Logout
          </Button>
        </View>
      </View>
      {data ? (
        <FlatList
          data={data}
          renderItem={({item}) => <SimpleCard {...item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <>
          <View style={style.fakeView} />
          <ActivityIndicator style={style.spinner} size="large" />
        </>
      )}
    </View>
  );
};

export {MainScreen};
