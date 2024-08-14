import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { screen1 } from '../screens/screen1';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="screen1" options={{ headerShown: false }} component={screen1} />
        </Stack.Navigator>
    );
}
