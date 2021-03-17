import React, {useContext} from 'react'
import {ChallengesContext} from '../../Contexts/ChallengesContext'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { View, Text, Modal } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'

export default function LevelUpModal(){
    const {level, closeLevelUpModal} = useContext(ChallengesContext)
    
    return(
        <View style = {styles.container}>
        <Modal 
        animationType = 'slide'
        transparent = {true}
        >
            <View style = {styles.modalWrapper}>
                <RectButton  style = {styles.closeButton}>
                    <Ionicons name = 'close' color = '#666666' size = { 30 } onPress = {closeLevelUpModal}/>
                </RectButton>

                <Text style = {styles.levelText}>{level}</Text>

                <View style = {styles.box}>
                    <Text style = {styles.congratulationsText}>Parabéns</Text>
                    <FontAwesome5 name = 'medal' color = '#EDD274' size = {40}/>
                    
                </View>
                
                
                <Text style = {styles.descriptionText}>Você alcançou um novo level.</Text>
            </View>
        </Modal>
        </View>
    )
}