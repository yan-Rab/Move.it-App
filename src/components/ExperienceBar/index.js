import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import { ChallengesContext } from '../../Contexts/ChallengesContext'
import styles from './styles'


export default function ExperienceBar(){
    const {experienceToNextLevel, currentExperience} = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return(
        <View style = {styles.boxLevelBar}>
            <Text style = {styles.textLevelBar}>0 xp</Text>

            <View style = {styles.levelBar}>
                <View style = {[styles.currentExperienceBar, {width: `${percentToNextLevel}%`}]}>
                    
                </View>
                
                <Text style = {[styles.textLevelBar, styles.currentExperience]}>{currentExperience} xp</Text>
            </View>

            <Text style = {styles.textLevelBar}>{experienceToNextLevel} xp</Text>
        </View>
    )
}