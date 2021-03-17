import React, {useState} from 'react'
import challenges from '../challenges.json'

export const ChallengesContext = React.createContext({})



export function ChallengesProvider({children}){

    const [activeChallenge, setActiveChallenge] = useState(null)
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function levelUp(){
        setLevel(level + 1)
        setIsLevelUpModalOpen(true)
    }

    function closeLevelUpModal(){
        setIsLevelUpModalOpen(false)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return
        }

        const { amount } = activeChallenge
        let finalExperience = currentExperience + amount
        
        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }
        
        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return(

        <ChallengesContext.Provider value = {{
            activeChallenge,
            startNewChallenge,
            currentExperience,
            experienceToNextLevel,
            resetChallenge,
            level,
            closeLevelUpModal,
            isLevelUpModalOpen,
            challengesCompleted,
            completeChallenge,
        }}>
            {children}
           
            
        </ChallengesContext.Provider>

    )
}