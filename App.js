import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView} from 'react-native';
 import tw from 'twrnc'
import Home from './screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screen/LoginScreen';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <SafeAreaView style={tw`bg-[#4A3780] w-max h-full `}>
      <StatusBar  style='light' />
      <NavigationContainer>

       <Stack.Navigator initialRouteName='Home' >
         <Stack.Screen  name='Home' 
      component={Home} 
      options={{
        headerShown:false
      }} 
      />
          <Stack.Screen  name='Login' 
      component={LoginScreen} 
      options={{
        headerShown:false
      }} 
      />
       </Stack.Navigator>
       </NavigationContainer>
    </SafeAreaView>
    
  );
}

