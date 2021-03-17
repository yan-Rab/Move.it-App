import React from 'react'
import {View} from 'react-native'

import ExperienceBar from '../../components/ExperienceBar'

import styles from './styles'
import Profile from '../../components/Profile'
import ChallengesCompleted from '../../components/ChallengesCompleted'
import CountDown from '../../components/CountDown'


export default function Home(props){

    const {...data} = props.route.params

    return(
        <View style = {styles.container}>
            
            <ExperienceBar />

            <Profile data = {data} />
            
            <ChallengesCompleted />
            
            <CountDown />
        </View>
    )
}