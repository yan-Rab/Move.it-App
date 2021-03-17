import React, {useContext} from 'react'
import { View, Text, Image} from 'react-native'
import {ChallengesContext} from '../../Contexts/ChallengesContext'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

export default function Profile(props){
    const {avatar_url , name} = props.data
    const {level} = useContext(ChallengesContext)
    return(
        <View style = {styles.profile}>
            <Image style = {styles.avatar} source = {{uri: `${avatar_url}`}} />
            
            <View>
                <Text style = {styles.name}>{name}</Text>
                <View style = {styles.levelBox}>
                    <Entypo size = {22} name = 'arrow-bold-up' color = '#4CD62B' />
                    <Text style = {styles.level}>Level {level}</Text>
                </View>
            </View>

            
        </View>   
    )
}