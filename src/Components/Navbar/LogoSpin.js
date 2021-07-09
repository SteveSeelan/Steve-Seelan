import React from 'react';
import Planet from './Planet.svg';
import Satellite from './satellite.svg';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    padding-left: 20px;
    margin-top: 6px;
    top: 250px;
    
    cursor: pointer;

    display: grid;
    justify-content: center;
    align-content: center

`;

const PlanetImg = styled.img`
    height: 75px;
    width: auto;
    grid-column: 1;
    grid-row: 1;

`;

const SatImg = styled.img` 
    grid-column: 1;
    grid-row: 1;

    animation: spinAround 6s linear infinite;

    @keyframes spinAround {
        from {
            transform: rotate(0deg) translate(50px) scale(.23);
        }
        to {
            transform: rotate(360deg) translate(50px) scale(.23);
        }
    }
`;

const LogoSpin = () => {
    return (
        <Wrapper onClick={() => scroll.scrollToTop()}>
            <PlanetImg src={Planet} />    
            <SatImg src={Satellite} />
        </Wrapper>       
    )
}

export default LogoSpin
