import React from 'react'
import styled from "styled-components"

function Section({backgroundImg,cover,subTitleOne,subTitleTwo,title,description,leftLink,rightLink}) {
  return (
    <Wrap >
        <Cover bgImage={backgroundImg}>
            <h1>{cover}</h1>
        </Cover>
        <Description>
            <TextRow>
                <p>{subTitleOne}</p> 
                <p>{subTitleTwo}</p>
            </TextRow>
            <h1>{title}</h1>
            <p>{description}</p>
            <LinkGroup>
            {leftLink && 
                <LeftLink>
                    <a href="https://tesla-clone-qop.netlify.app">{leftLink}</a>
                </LeftLink>
            }
                <RightLink>
                    <a href="https://tesla-clone-qop.netlify.app">{rightLink}</a>
                </RightLink> 
                
            </LinkGroup>
        </Description>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 95%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px){
        flex-direction: column;
        height: auto;
    }
    overflow:hidden !important;

`
const Cover = styled.div`
    width: 70%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image:${props => `url("/images/${props.bgImage}")`};
    text-overflow: clip; 
    overflow:hidden;
    h1{
        font-size: 12rem;
        color:#fff;
        writing-mode: vertical-rl;
        text-orientation: mixed;
        white-space: nowrap !important;
        font-family: "nothingMain";
        font-weight: 500;
        
    }
    @media (max-width: 768px){
        width: 100%;
        height: 95vh;
        h1{
            font-size:6rem;
        }
    }
`
const Description = styled.div`
overflow:hidden !important;
    width: 30%;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: end;

    h1{
        font-size: 4.5rem; 
        font-family: 'Taviraj', serif;
        font-weight:400;
        overflow: hidden;
    }
    p{
        margin: 1rem 0;
        font-size: 1.2rem; 
        overflow: hidden;
    }
    
    @media (max-width: 768px){
        width: 100%;
        margin: 0 0.8rem 0.8rem 0.8rem;
        h1{
            font-size: 1.5rem; 
        }
        p{
            margin: 0.8rem 0;
            font-size: 0.8rem; 
        }
        
    }
    
`
const LinkGroup = styled.div`
overflow: hidden;
display: flex;
justify-content:space-between;

`
const LeftLink= styled.div`
overflow: hidden;
a{
    font-size: 1.2rem; 
    overflow: hidden
}
@media (max-width: 768px){
    a{
        font-size: 0.8rem; 
        overflow: hidden;
    }
}
`
const RightLink = styled(LeftLink)`
overflow: hidden;

`
const TextRow = styled.div`
    display:flex;
    width: 50%;
    justify-content: space-between;
    margin: 0;
    padding:  0;
`