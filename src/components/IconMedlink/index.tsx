import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';

import styles from './index.style'

type Props = {
}

const IconMedlink = (props: Props) => {

  return (
    <View style={styles.containerIconMedlink}>
      <Image style={styles.iconMedlink}
        source={require('../../assets/icon/iconMedlink/icon-medlink.png')} />
    </View>
  );
};


export default IconMedlink;