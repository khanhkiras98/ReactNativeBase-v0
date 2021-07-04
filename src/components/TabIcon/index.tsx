import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';

import styles from './index.style'

type Props = {
}

const TabIcon = (props: Props) => {

  return (
    <View style={styles.containerIcon}>
      <Image style={{width: 20, height: 20}}
        source={require('../../assets/icon/iconTab/icon-tab-home.png')} />
    </View>
  );
};


export default TabIcon;