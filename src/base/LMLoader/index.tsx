import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import { LoaderProps } from './types';

const LMLoader = ({color, size}: LoaderProps) => {
  return <ActivityIndicator size={size ? size : 'large'} color={color? color : '#5046E5'} />;
};

export default LMLoader;
