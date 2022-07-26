import React from 'react'
import styled from "styled-components"
import FeatureItem from './FeatureItem'

function Feature() {
  return (
    <Container>
        <FeatureItem
          FeatureImg="/images/wallpaper.png"
          FeatureText="“a radical reinterpretation of mobile tech”"
        />
        <FeatureItem
          FeatureImg="/images/T3.png"
          FeatureText="“Nothing Phone (1) is the biggest launch of the year in the smartphone space”"
        />
        <FeatureItem
          FeatureImg="/images/GQ.png"
          FeatureText="“The most hyped tech company in years”"
        />
    </Container>
  )
}

export default Feature

const Container = styled.div`

display:flex;
justify-content:space-between;
align-items:center;
@media (max-width: 768px){
  flex-direction:column;
}
`
