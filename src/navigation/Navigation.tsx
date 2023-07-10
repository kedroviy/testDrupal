import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainScreen, LoginScreen, NewsDetailsScreen} from '@screens';
import {ROUTES} from '../app-config/constants.ts';

type RootStackParamList = {
  MainScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC<RootStackParamList> = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ROUTES.MAIN} component={MainScreen} />
        <Stack.Screen name={ROUTES.DETAILS} component={NewsDetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export {Navigation};
