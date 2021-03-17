import React, {useState} from 'react'
import {View, Text, TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Octokit} from '@octokit/core'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles'

export default function Login(props){
   
    const {navigation} = props

    const [username, setUserName] = useState('')

    const [usernameError, setUserNameError] = useState(false)


    async function handleConnectGithub(){

        try{
            const octokit = new Octokit()

            const response = await octokit.request(`GET /users/${username}`)
           
            const data = {
                name: response.data.name,
                avatar_url: response.data.avatar_url
            }

            setUserNameError(false)

            goToHomeScreen(data)
        }catch(error){
            setUserNameError(true)
        }
       
    }

    function goToHomeScreen(data){
        navigation.navigate('TabNavigation', {screen: 'Home',params: data})
    }

    return(
        <View style = {styles.container}>
            
            <Text style = {styles.welcomeText}>Bem-vindo!</Text>

            <View>
                <View style = {styles.boxGithub}>   
                    <AntDesign name = 'github' size = {40} color = '#B2B9FF'/>
                    <Text style = {styles.text}>
                        Faça login com seu Github para começar
                    </Text>
                </View>
                
                <LinearGradient 
                style = {styles.boxInput} 
                colors = {['rgba(73,83,184,0.9)', 'rgba(73,83,184,0.1)']}
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}}
                >
                    <TextInput 
                    placeholderTextColor = 'white' 
                    placeholder = 'Digite seu username' 
                    onChangeText = {text => setUserName(text)}
                    style = {styles.input}/>

                    <RectButton 
                    
                    style = {[styles.nextButton, usernameError && styles.nextButtonError]} 
                    onPress = {handleConnectGithub}>
                        <AntDesign name = 'arrowright' size = {20} color = 'white'/>
                    </RectButton>
                </LinearGradient>
            </View>
        </View>
    )
}