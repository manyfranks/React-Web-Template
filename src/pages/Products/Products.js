import React from 'react'
import { InfoSection, Pricing } from '../../components'
import { homeObjTwo, homeObjThree } from './Data'

const Products = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
        </>
    )
}

export default Products
