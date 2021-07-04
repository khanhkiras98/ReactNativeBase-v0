import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './index.style'

type Props = {
    textValidate?: string;
    icon: string;
    placeholder: string;
    onChangeText?(text:string): void;
}
const AuthInput = (props: Props) => {

    return (

        <View>
            <View style={styles.inputLogin}>
                <Image source={require("../../assets/icon/iconAuth/iconUser.png")} />
                <TextInput style={styles.inputText}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText} />
            </View>
            <Text style={styles.validateText}>{props.textValidate}</Text>
        </View>

    );
};


export default AuthInput;
