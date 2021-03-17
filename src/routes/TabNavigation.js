import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Challenges from '../screens/Challenges'
import {heightPercentageToDP as hdp} from 'react-native-responsive-screen'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const TabNavigation = () => {
    const {Navigator, Screen} = createBottomTabNavigator()

    return(
        <Navigator initialRouteName = 'Home' tabBarOptions = {{
            tabStyle: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                
            },

            
            style: {
                
                borderTopWidth: 2,
                height: hdp('8%'),
                borderTopLeftRadius: 30,
                borderTopEndRadius: 30,
                position: 'absolute'
            },



            labelStyle: {
                fontFamily: 'Inter-Medium',
                fontSize: hdp('1.2%') + 4
            },

            iconStyle: {
                flex: 1,
                width: 20,
                height: 20,
                
            },
            
            activeTintColor: '#5965E0',
            inactiveTintColor: '#666666'
            
        }}>
            <Screen  
            options = {{
                tabBarLabel: '',
                
                tabBarIcon: ({color, size, focused}) => (
                    <Feather name = 'home' size = {size} color = {color} />
                )
                
            }}
            
            component = {Home} 
            name = 'Home' /> 

            <Screen 
            options = {{
                tabBarLabel: '',
                tabBarIcon: ({color, size, focused}) => (
                    
                    <FontAwesome5 name = 'tasks' size = {size} color = {color} />
                )
            }}
            component = {Challenges}
            name = 'Challenges'
            />
        </Navigator>
    )
}

export default TabNavigation