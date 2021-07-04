import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './index.style'

type Props = {
    nameProduct:string, unitProduct: string, priceProduct:string, numberProduct:string
}
const ItemProduct = (props: Props) => {

    return (

        <View>
      <Text>{`Tên thuốc: ${props.nameProduct}`}</Text>
      <Text>{`Lô:`}</Text>
      <Text>{`Đơn vị: ${props.unitProduct}`}</Text>
      <Text>{`Giá: ${props.priceProduct}`}</Text>
      <Text>{`Số lượng: ${props.numberProduct}`}</Text>
    </View>
    );
};


export default ItemProduct;
