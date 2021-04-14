import React from 'react'
import { InfoSection } from '../../components'
import { homeObjThree, homeObjFour } from './Data'

const Signup = () => {
    return (
        <>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Signup
