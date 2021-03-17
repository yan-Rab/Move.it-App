import React, {useContext} from 'react'
import {View, Text, Image} from 'react-native'
import {ChallengesContext} from '../../Contexts/ChallengesContext'
import {CountDownContext} from '../../Contexts/CountDownContext'
import {challengeImage} from '../../utils/index'
import { RectButton } from 'react-native-gesture-handler'

import iconUp from '../../assets/images/icon.png'
import styles from './styles'
import LevelUpModal from '../../components/LevelUpModal'

export default function Challenges(){
    const {
        activeChallenge, 
        resetChallenge, 
        completeChallenge,
        isLevelUpModalOpen
    } = useContext(ChallengesContext)

    const {resetCountDown} = useContext(CountDownContext)

    function handleChallengeSucceeded(){
        completeChallenge()
        resetCountDown()
    }

    function handleChallengeFailed(){
        resetChallenge()
        resetCountDown()
    }
    return(
        
        <View style = {styles.container}>
           
            <View style = {styles.boxChallenges}>

                
                {activeChallenge ? (
                    <>
                    <View style = {styles.headerChallenge}>
                        <Text style = {styles.challengeExperience}>Ganhe {activeChallenge.amount} xp</Text>
                    </View>

                    {challengeImage(activeChallenge.type)}
                    
                    <Text style = { styles.descriptionChallenge}>
                       {activeChallenge.description}
                    </Text>
                    </>
                ):(
                    <>
                    <Text style = {styles.text}>
                        Inicie um ciclo
                        para receber desafios a
                        serem completados
                    </Text>

                    <View style = {styles.box}>
                        <Image source = {iconUp} />
                        <Text style = {styles.boxText}>
                            Complete-os, ganhe
                            experiência e avance de leve.
                        </Text>
                    </View>
                    </>
                )}
                
            </View>
                
            {activeChallenge && (
                <View style = {styles.buttonsBox}>
                    <RectButton 
                    onPress = {handleChallengeFailed}
                    style = {[styles.button, styles.failedButton]}>
                        <Text style = {styles.buttontext}>Falhei</Text>
                    </RectButton>

                    <RectButton 
                    onPress = {handleChallengeSucceeded}
                    style = {[styles.button, styles.completedButton]}>
                        <Text style = {styles.buttontext}>Completei</Text>
                    </RectButton>
                </View>
            )}

            {isLevelUpModalOpen && <LevelUpModal />}
        </View>
        
    )
}