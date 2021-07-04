import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthFlash from "../screens/AuthFlash";
import AuthLogin from "../screens/AuthLogin";
import AuthRegistration from "../screens/AuthRegistration";
import AuthVerify from "../screens/AuthVerify";
import AuthForgotPassword from "../screens/AuthForgotPassword";
import TabNavigator from "./TabNavigator"


const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="AuthFlash" component={AuthFlash} />
      <AuthStack.Screen name="AuthLogin" component={AuthLogin} />
      <AuthStack.Screen name="AuthRegistration" component={AuthRegistration} />
      <AuthStack.Screen name="AuthForgotPassword" component={AuthForgotPassword} />
      <AuthStack.Screen name="AuthVerify" component={AuthVerify} />
    </AuthStack.Navigator>
  );
}

export default function RootStackScreen() {
  return (
    <NavigationContainer>{/* Rest of your app code */}
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
      
        <RootStack.Screen name="Auth" component={AuthStackScreen} />
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
