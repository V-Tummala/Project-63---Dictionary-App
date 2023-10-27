import * as React from 'react';
import {View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import {Header} from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <View>
          <Header
            backgroundColor={'purple'}
            centerComponent={{
              text: 'Pocket Dictionary',
              style: { color: '#fff', fontSize: 20 },
            }}
          />
          <AppContainer/>
        </View>
      </SafeAreaProvider>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
})

const AppContainer = createAppContainer(AppNavigator);