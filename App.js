/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import AppStack from './src/routes/AppStack'
import {ChallengesProvider} from './src/Contexts/ChallengesContext'
import {CountDownContextProvider} from './src/Contexts/CountDownContext'


const App = () => {
 

  return (
    <>
      <StatusBar barStyle="light-content" />

      <ChallengesProvider>

        <CountDownContextProvider>
          <AppStack />
          
        </CountDownContextProvider>
        
      </ChallengesProvider>
      
    </>
  );
};


export default App;


