import React from 'react'
import BodyImage from '../assets/images/body.svg'
import EyeImage from '../assets/images/eye.svg'

export function challengeImage(challengeType){
    if(challengeType === 'eye'){
        return <EyeImage />
    }
    else if(challengeType === 'body'){
        return <BodyImage />
    }

    return null
}