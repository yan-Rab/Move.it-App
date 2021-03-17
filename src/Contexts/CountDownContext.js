import React, {useContext, useState, useEffect} from 'react'
import {ChallengesContext} from '../Contexts/ChallengesContext'

export const CountDownContext = React.createContext({})

let countDownTimeout

export function CountDownContextProvider({children}){

    const {startNewChallenge} = useContext(ChallengesContext)
    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

   
    function startCountDown(){
        setIsActive(true)
    }
    
    function resetCountDown(){
        setIsActive(false)
        clearTimeout(countDownTimeout)
        setTime(0.1 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        
        if(isActive && time > 0){
           countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
        else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }

    }, [isActive, time])

    return(
        <CountDownContext.Provider value = {{
            minutes,
            seconds,
            isActive,
            hasFinished,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    )
    
}