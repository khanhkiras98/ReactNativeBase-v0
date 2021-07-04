import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './index.style'

type Props = {
}

const HomeRepositoryItem = (props: Props) => {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icon/iconMedlink/icon-medlink.png')}
      style={styles.imageItem}/>
      <View >
        <Text style={styles.textItem}>Paradon</Text>
        <Text style={styles.textItem}>Price: </Text>
      </View>
    </View>
  );
};


export default HomeRepositoryItem;