import React from 'react'
import { Button } from '../../globalStyles'
import { FaBiking, FaBrain, FaChargingStation } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { PricingSection,
        PricingWrapper,
        PricingHeading,
        PricingContainer,
        PricingCard,
        PricingCardPlan,
        PricingCardInfo,
        PricingCardIcon,
        PricingCardCost,
        PricingCardLength,
        PricingCardFeatures,
        PricingCardFeature
} from './PricingElements'

const Pricing = () => {
    return (
        <IconContext.Provider value={{ color: '#a9b3c1', size: 64}}>
        <PricingSection>
            <PricingWrapper>
                <PricingHeading>Our Services</PricingHeading>
                <PricingContainer>
                    <PricingCard to='/sign-up'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <FaBiking />
                            </PricingCardIcon>
                            <PricingCardPlan>Bronze</PricingCardPlan>
                            <PricingCardCost>$99.99</PricingCardCost>
                            <PricingCardLength>PER MONTH</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>Feature 1</PricingCardFeature>
                                <PricingCardFeature>Feature 2</PricingCardFeature>
                                <PricingCardFeature>Feature 3</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Buy Now</Button>
                        </PricingCardInfo>
                    </PricingCard>
                    <PricingCard to='/sign-up'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <FaBrain />
                            </PricingCardIcon>
                            <PricingCardPlan>Gold</PricingCardPlan>
                            <PricingCardCost>$199.99</PricingCardCost>
                            <PricingCardLength>PER MONTH</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>Feature 1</PricingCardFeature>
                                <PricingCardFeature>Feature 2</PricingCardFeature>
                                <PricingCardFeature>Feature 3</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Buy Now</Button>
                        </PricingCardInfo>
                    </PricingCard>
                    <PricingCard to='/sign-up'>
                        <PricingCardInfo>
                            <PricingCardIcon>
                                <FaChargingStation />
                            </PricingCardIcon>
                            <PricingCardPlan>Platinum</PricingCardPlan>
                            <PricingCardCost>$299.99</PricingCardCost>
                            <PricingCardLength>PER MONTH</PricingCardLength>
                            <PricingCardFeatures>
                                <PricingCardFeature>Feature 1</PricingCardFeature>
                                <PricingCardFeature>Feature 2</PricingCardFeature>
                                <PricingCardFeature>Feature 3</PricingCardFeature>
                            </PricingCardFeatures>
                            <Button primary>Buy Now</Button>
                        </PricingCardInfo>
                    </PricingCard>
                </PricingContainer>
            </PricingWrapper>
        </PricingSection>
        </IconContext.Provider>
    )
}

export default Pricing
