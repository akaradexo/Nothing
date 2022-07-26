import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    
        <MenuContainer className='isdark'>
            <LeftLink>
                <li><a href="https://protfolio-ashutosh.netlify.app/">Nothing (r)</a></li>
                <li><a href="https://protfolio-ashutosh.netlify.app/">Products</a></li>
                <li><a href="https://protfolio-ashutosh.netlify.app/">Store</a></li>
            </LeftLink>
            <RightLink>
                <li><a href="https://protfolio-ashutosh.netlify.app/">Login</a></li>
            </RightLink>
        </MenuContainer>
   
  )
}

export default Header

const MenuContainer = styled.div`
    width:100%;
    min-height: 60px;
    position: fixed;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    text-transform: uppercase;
    font-family:nothingLEd;
    

`
const LeftLink = styled.div`
    width:70%;
    display:flex;
    justify-content: space-around;
    overflow:hidden;
    li{
        overflow:hidden;
        list-style-type:none;
        a{
            overflow:hidden;
            font-size:1.4rem;
            font-weight:500;
            color:#f4f4f2;
        }
    }
`
const RightLink = styled.div`
    width:30%;
    li{
        overflow:hidden;
        list-style-type:none;
        a{
            overflow:hidden;
            font-size:1.4rem;
            font-weight:500;
            color:#000000;
        }
    }

`