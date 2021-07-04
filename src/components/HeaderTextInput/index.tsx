import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './index.style'

type Props = {

    placeholder: string;
    onChangeText?(text: string): void;
}
const HeaderTextInput = (props: Props) => {

    return (
        <TextInput style={styles.inputText}
            placeholder={props.placeholder}
            onChangeText={props.onChangeText} />
    );
};


export default HeaderTextInput;
