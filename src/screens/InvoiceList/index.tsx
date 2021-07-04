import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity, Image
} from 'react-native';

import styles from './index.style';
import Header from '../../components/Header';
import IconMedlink from '../../components/IconMedlink';
import HeaderTitle from '../../components/HeaderTitle';

const App = () => {
  const _renderHeaderLeft = () => {
    return (
      <IconMedlink />
    )
  }
  const _renderHeaderCenter = () => {
    return (
      <HeaderTitle title='Nhà thuốc Medlink' />
    )
  }
  const _renderHeaderRight = () => {
    return (
      <TouchableOpacity>
        <Text style={styles.rightHeader}>Mới nhất</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView >
      <Header
        elementLeft={_renderHeaderLeft()}
        elementCenter={_renderHeaderCenter()}
        elementRight={_renderHeaderRight()}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.sectionTitle}>Invoice</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
