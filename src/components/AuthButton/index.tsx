import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './index.style'

type Props = {
    textButton: string,
    onPress?(): void,
}
const AuthButton = (props: Props) => {
    
    return (
        <TouchableOpacity
          style={styles.buttonAuth}
          onPress={props.onPress}
          >
          <Text style={styles.buttonAuthText}>{props.textButton}</Text>
        </TouchableOpacity>

    );
};


export default AuthButton;
