import React, {useContext} from 'react'
import { View, Text } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import { CountDownContext } from '../../Contexts/CountDownContext'

import styles from './styles'

export default function CountDown(){
    const {
        minutes, 
        seconds, 
        isActive, 
        hasFinished,
        startCountDown,
        resetCountDown
    } = useContext(CountDownContext)

    
    const [leftMinute, rightMinute] = String(minutes).padStart(2,'0').split('')

    const [leftSecond, rightSecond] = String(seconds).padStart(2, '0').split('')
    
    return(
        <>
            <View style = {styles.countDownBox}>
                <View style = {styles.countDownNumberBox}>
                    <Text style = {styles.countDownNumber}>{leftMinute}</Text>
                </View>


                <View style = {styles.countDownNumberBox}>
                    <Text style = {styles.countDownNumber}>{rightMinute}</Text>
                </View>

                <Text style = {styles.countDownNumber}>:</Text>

                <View style = {styles.countDownNumberBox}>
                    <Text style = {styles.countDownNumber}>{leftSecond}</Text>
                </View>

                
                <View style = {styles.countDownNumberBox}>
                    <Text style = {styles.countDownNumber}>{rightSecond}</Text>
                </View>
            </View>

            {hasFinished ? (
                    <TouchableOpacity 
                    disabled
                    style = {[styles.buttonCountDown, styles.disabledButton]} 
                    >
                        <Text style = {[styles.buttonText, styles.disabledCycleText]}>Ciclo encerrado</Text>
                        <AntDesign name = 'checkcircle' color = '#4CD62B' size = {20}/>
                    </TouchableOpacity>
                ) : (
                    <>
                        {isActive ? (
                            <RectButton 
                            style = {[styles.buttonCountDown, styles.finishCycle]} 
                            onPress = {resetCountDown}>
                                <Text style = {[styles.buttonText, styles.finishCycleText]}>Abandonar ciclo</Text>
                                <Ionicons name = 'close' color = 'white' size = {25} />
                            </RectButton>
            
                        ) : (
            
                            <RectButton 
                            style = {[styles.buttonCountDown, styles.startCycle]} 
                            onPress = {startCountDown}>
                                <Text style = {[styles.buttonText, styles.startCycleText]}>Iniciar um ciclo</Text>
                                <AntDesign name = 'caretright' color = 'white' size = {20}/>
                            </RectButton>
                        )}
                    </>
             )}
        </>
    )
}