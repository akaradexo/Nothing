import React from 'react'
import styled from "styled-components"
import Section from './Section'
import Feature from './Feature/Feature'


function Home() {
  return (
    <Container>
        <Section
            backgroundImg="cover-1.png"
            cover="phone(1)"
            subTitleOne="Introducing."
            subTitleTwo="Phone (1)."
            title="Pure Instinct."
            description="Designed with instinct, to bring joy back to the everyday. Through the Glyph Interface, a perfected OS and exceptional dual camera. All startlingly fast."
            leftLink=""
            rightLink="( Learn more )"
        />
        <Feature/>
        <Section
            backgroundImg="cover-2.png"
             cover="nothing event"
             subTitleOne="Nothing."
             subTitleTwo="Event."
             title="Nothing Event: Return to instinct."
             description="This is Phone (1). Designed with intention. Full of warmth. And joy.Watch the launch event here." 
             leftLink=""
            rightLink="( Learn more )"   
        />
        <Section
            backgroundImg="cover-3.png"
            cover="ear (1)"
            subTitleOne="Introducing."
            subTitleTwo="Ear (1)."
            title="Sound of change."
            description="Raw beauty with precise engineering and state-of-the-art noise cancellation for a pure sound experience."   
            leftLink=""
            rightLink="( Learn more )" 
        />
        <Section
            backgroundImg="cover-4.png"
            cover="about us"
            subTitleOne="About."
            subTitleTwo="Nothing."
            title="About us."
            description="It&apos;s easy to make something. Even easier when it&apos;s just like the thing before it. And the one before that. But like all good things, this one starts from scratch. No notes. No blueprints. No map to find our way back."    
            leftLink=""
            rightLink="( Learn more )"
        />
        <Section
            backgroundImg="cover-5.png"
            cover="where to buy"
            subTitleOne="Find."
            subTitleTwo="Phone (1)."
            title="Where to buy Phone (1)"
            description="The wait is so nearly over.16 July. The first chance to get your hands on Phone (1). Here&apos;s everything you need to know."    
            leftLink="( Find a store )"
            rightLink="( Learn more )"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    
`