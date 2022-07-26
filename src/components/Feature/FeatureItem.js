import React from 'react'
import styled from "styled-components"

function FeatureItem({FeatureImg,FeatureText}) {
  return (
    <Feature>
        <img src = {FeatureImg} alt={FeatureImg}/>
        <h2>{FeatureText}</h2>
    </Feature>
  )
}

export default FeatureItem

const Feature = styled.div`
margin:1rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:40rem;
img{
    max-width: 100%;
    height: auto;
    display:block;
}
h2{
    text-align:center;
    overflow:hidden;
    font-weight:400;
    font-size:1.8rem;
    margin-top:1rem;
}
`