/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';

import styles from './index.style'

type Props = {
  title: string,
}

const HeaderTitle = (props: Props) => {

  return (
      <Text style={styles.title}>{props.title}</Text>
  );
};


export default HeaderTitle;
