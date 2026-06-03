import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <>
    <Stack>
        <Stack.Screen name='index' options={{headerShown : false}}/>
        <Stack.Screen name='home' options={{headerShown : false}}/>
    </Stack>
    <StatusBar style ='light'/>
    </>
  )
}