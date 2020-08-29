import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './src/home'
import Dentro from './src/dentro'


const Stack = createStackNavigator();

export default function App () {
    return ( 
      <NavigationContainer>
        <Stack.Navigator >
    

          <Stack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
          <Stack.Screen name="Dentro" component={Dentro} />
          
        </Stack.Navigator>
      </NavigationContainer>

    )
  } 


  
  
  
 