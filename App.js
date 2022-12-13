import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Sisaankirjautuminen from './ruudut/Sisaankirjautuminen';
import ChatRuutu from './ruudut/ChatRuutu';

const Stack = createStackNavigator();

const App = () => {
  return ( <GestureHandlerRootView style={{ flex: 1 }}>{ // auttaa käyttämään platformin natiivia kosketusnäyttöä
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"> {/* hoitaa sivujen vaihdon */}
      <Stack.Screen
        name="Chat"
        component={ChatRuutu}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Sisaankirjautuminen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  }</GestureHandlerRootView>);
};

export default App;



