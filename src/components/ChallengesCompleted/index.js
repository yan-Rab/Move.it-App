import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import styles from './styles'

export default function ChallengesCompleted(){
    const {challengesCompleted} = useContext(ChallengesContext)
    return(
        <View style = {styles.challengesCompletedBox}>
            <Text style = {styles.challengesText}>Desafios completos</Text>
            <Text style = {styles.challengesText}>{challengesCompleted}</Text>
        </View>
    )
}