import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, Image } from 'react-native';
import TabIcon from '../components/TabIcon';

import Product from "../screens/ProductList"
import ProductDetail from "../screens/ProductDetails"

import Home from "../screens/Home"
import HomeCreateBill from "../screens/HomeCreateBill"
import HomeBill from "../screens/HomeBill"
import HomeRepository from "../screens/HomeRepository"
import HomeProductCreate from "../screens/HomeProductCreate"

import Invoice from "../screens/InvoiceList"
import Order from "../screens/Order"
import History from "../screens/History"
import Profile from "../screens/Profile"

import { createStackNavigator } from '@react-navigation/stack';


const ProductStack = createStackNavigator();

const HomeStack = createStackNavigator();
const InvoiceStack = createStackNavigator();
const OrderStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function ProductStackScreen() {
  return (
    <ProductStack.Navigator screenOptions={{ headerShown: false }}>
      <ProductStack.Screen
        name="Products"
        component={Product}
      />
      <ProductStack.Screen
        name="productDetail"
        component={ProductDetail}
      />
    </ProductStack.Navigator>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeBillStack.Screen name="HomeBill" component={HomeBill} />
      <HomeStack.Screen name="HomeBillStackScreen" component={HomeBillStackScreen} />
      <HomeStack.Screen name="HomeRepository" component={HomeRepository} />
    </HomeStack.Navigator>
  );
}
const HomeBillStack = createStackNavigator()
function HomeBillStackScreen() {
  return (
    <HomeBillStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeBillStack.Screen name="HomeCreateBill" component={HomeCreateBill} />
      <HomeBillStack.Screen name="HomeProductCreate" component={HomeProductCreate} />
    </HomeBillStack.Navigator>
  )
  
}
function InvoiceStackScreen() {
  return (
    <InvoiceStack.Navigator screenOptions={{ headerShown: false }}>
      <InvoiceStack.Screen
        name="Invoice"
        component={Invoice}
      />
    </InvoiceStack.Navigator>
  );
}
function OrderStackScreen() {
  return (
    <OrderStack.Navigator screenOptions={{ headerShown: false }}>
      <OrderStack.Screen
        name="Home"
        component={Order}
      />
    </OrderStack.Navigator>
  );
}
function HistoryStackScreen() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen
        name="Home"
        component={History}
      />
    </HistoryStack.Navigator>
  );
}
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen
        name="Home"
        component={Profile}
      />
    </ProfileStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

// const _renderTabIcon = () => {
//   <Image source={require('../assets/icon/iconTab/icon-home1')}/>
// }
export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Product"
    tabBarOptions={{
      labelStyle: {

        fontSize: 11,
      },
      activeTintColor: 'green',
      inactiveTintColor: 'grey'
    }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen}
      options={{
        tabBarIcon: () => 
        <Image style={{width: 20, height: 20}}
        source={require('../assets/icon/iconTab/icon-tab-home.png')} />
      }} />
      <Tab.Screen name="Hoá đơn" component={InvoiceStackScreen}
      options={{
        tabBarIcon: () => 
        <Image style={{width: 20, height: 20}}
        source={require('../assets/icon/iconTab/icon-tab-invoice.png')} />
      }} />
      <Tab.Screen name="Đặt hàng" component={OrderStackScreen}
      options={{
        tabBarIcon: () => 
        <Image style={{width: 20, height: 20}}
        source={require('../assets/icon/iconTab/icon-tab-order.png')} />
      }} />
      <Tab.Screen name="Lịch sử" component={HistoryStackScreen}
      options={{
        tabBarIcon: () => 
        <Image style={{width: 20, height: 20}}
        source={require('../assets/icon/iconTab/icon-tab-history.png')} />
      }} />
      <Tab.Screen name="Hồ sơ" component={ProfileStackScreen}
      options={{
        tabBarIcon: () => 
        <Image style={{width: 20, height: 20}}
        source={require('../assets/icon/iconTab/icon-tab-profile.png')} />
      }} />
    </Tab.Navigator>
  );
}