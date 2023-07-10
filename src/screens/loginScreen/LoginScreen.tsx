import React, {useEffect, useState, useCallback} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {setIsLoad, setCurrentPost} from '../../redux/actions/appActions.ts';
import {loginApi} from '../../services/api/client.ts';
import {API, STRING, ROUTES} from '../../app-config/constants.ts';
import style from './loginScreen.style.ts';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storageData = useSelector(state => state.appReducer);
  const [email, setEmail] = useState<string>('bullet2271293@gmail.com');
  const [password, setPassword] = useState<string>('beta1234');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [existToken, setExistToken] = useState<boolean>(false);

  useEffect(() => {
    if (!existToken) {
      AsyncStorage.getItem(STRING.ACCESS_TOKEN).then(value => {
        if (value) {
          setExistToken(true);
          dispatch(setIsLoad(true));
        }
      });
    }

    if (storageData.isLoad && storageData.currentPost === null) {
      navigation.navigate(ROUTES.MAIN);
    }
  }, [
    dispatch,
    existToken,
    navigation,
    storageData.currentPost,
    storageData.isLoad,
  ]);

  const onLogin = useCallback(() => {
    setIsLoading(true);
    loginApi({email, password}, API.AUTH)
      .postLoginRequest()
      .then(res => {
        if (res.status === 200) {
          const multiSet = [
            [STRING.USER, JSON.stringify(res.data.user)],
            [STRING.ACCESS_TOKEN, res.headers?.[STRING.ACCESS_TOKEN]],
            [STRING.CLIENT, res.headers?.client],
            [STRING.UID, res.headers?.uid],
            [STRING.AUTHORIZATION, res.headers?.authorization],
          ];
          AsyncStorage.multiSet(multiSet);

          navigation.navigate(ROUTES.MAIN);
          setIsLoading(false);
          dispatch(setCurrentPost(null));
        } else {
          setIsLoading(false);
        }
      })
      .catch(error => console.log('error: ', error));
  }, [dispatch, email, navigation, password]);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.gradientLayerOne} />
        <View style={style.gradientLayerSecond} />
        <Text style={style.headerText}>Sign in to your account</Text>
      </View>
      <View style={style.main}>
        <View style={style.inputContainer}>
          <TextInput
            label="Email"
            mode="outlined"
            color="grey"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={style.inputContainer}>
          <TextInput
            label="Password"
            mode="outlined"
            color="grey"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={style.buttonContainer}>
          <Button
            mode="contained"
            style={style.button}
            textColor="black"
            onPress={() => onLogin()}>
            Login
          </Button>
        </View>
      </View>
      <View style={style.footer}>
        <View style={style.footerHeading}>
          <Text style={style.textFooter}>Or login with</Text>
        </View>
        <View style={style.footerControls}>
          <Button mode="contained">Google</Button>
          <Button mode="contained">Facebook</Button>
        </View>
      </View>
      {isLoading ? (
        <>
          <View style={style.fakeView} />
          <ActivityIndicator style={style.spinner} size="large" />
        </>
      ) : null}
    </View>
  );
};

export {LoginScreen};
