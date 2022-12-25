import Icon3 from '@expo/vector-icons/Ionicons';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import Icon2 from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import FirstPage from './src/components/FirstPage/FirstPage';
import AddCard from './src/components/screen/AddCard/AddCard';
import Basket from './src/components/screen/Basket/Basket';
import CheckOutScreen from './src/components/screen/CheckOutScreen/CheckOutScreen';
import EditProfile from './src/components/screen/EditProfile/EditProfile';
import Favorite from './src/components/screen/Favorite/Favorite';
import HelpCenter from './src/components/screen/HelpCenter/HelpCenter';
import Home from './src/components/screen/Home/Home';
import PaymentMethod from './src/components/screen/PaymentMethod/PaymentMethod'; 
import Profile from './src/components/screen/Profile/Profile';
import Sale from './src/components/screen/Sale/Sale';
import Settings from './src/components/screen/Settings/Settings';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  
  const [firstValue, setFirstValue] = useState(true);

  if (firstValue) {
    return ( 
      <NavigationContainer>
        <FirstPage setFirstValue={setFirstValue} />
      </NavigationContainer>
    );
  }
  const Checkout = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Checkout" component={CheckOutScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="HelpCenter" component={HelpCenter} />
        <Stack.Screen name="Sale" component={Sale} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AddCard" component={AddCard} />


      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          headerTintColor: 'blue',
          tabBarStyle: { backgroundColor: 'black' },
        }}>
        <Tab.Screen
          name="Home"
          component={Checkout}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="home-assistant" size={40} color={focused ? 'green' : 'white'} />
            ),
            title: '',
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon2 name="favorite" size={40} color={focused ? 'green' : 'white'} />
            ),
            title: '',
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon3 name="basket" size={40} color={focused ? 'green' : 'white'} />
            ),
            title: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
});
