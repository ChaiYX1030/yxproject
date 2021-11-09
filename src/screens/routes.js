import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListScreen"
    >
      <>
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{
            title: 'React Native Community',
            headerTintColor: '#007eff',
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
        />
      </>
    </Stack.Navigator>
  );
};

export default Routes;
