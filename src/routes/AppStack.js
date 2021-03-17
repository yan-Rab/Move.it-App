import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/Login'
import TabNavigation from './TabNavigation'


export default function AppStack(){
    const {Navigator, Screen} = createStackNavigator()

    return(
        <NavigationContainer>
            <Navigator>
                <Screen  
                options = {{
                    headerShown: false
                }}
                component = {Login} 
                name = 'Login' /> 
                
                {
                //<Screen name = 'LandingScreen' component = {Home} />
                }

                <Screen 
                options = {{
                    headerShown: false
                }}
                 name = 'TabNavigation'
                component = {TabNavigation}/> 
            </Navigator>
        </NavigationContainer>
    )
}