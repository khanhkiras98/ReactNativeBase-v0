/**
 *
 * @format
 * @flow strict-local
 */

import React, { ReactElement } from 'react';
import { View } from 'react-native';

import styles from './index.style'

type Props = {
  style?: object;
  styleLeft?: object;
  styleCenter?: object;
  styleRight?: object;
  elementLeft?: ReactElement;
  elementCenter?: ReactElement;
  elementRight?: ReactElement;
}

const Header = (props: Props) => {

  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.leftContainer, props.styleLeft]}>
        {props.elementLeft}
      </View>
      <View style={[styles.centerContainer, props.styleCenter]}>
        {props.elementCenter}
      </View>
      <View style={[styles.rightContainer, props.styleRight]}>
        {props.elementRight}
      </View>
    </View>
  );
};


export default Header;
