import * as React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './AuthStackNavigation';
import MainTab from './TabNavigations';

const AppNavigator = () => {
  const userState = useSelector(state => state.user);

  return userState.isVerified ? <MainTab /> : <AuthStack />;
};

export default AppNavigator;
