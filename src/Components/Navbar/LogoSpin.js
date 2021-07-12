import React from 'react';
import Planet from './Planet.svg';
//import Satellite from './satellite.svg';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
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
    
    animation: spinAround 15s linear infinite;

    @keyframes spinAround {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
`;
/* disabled, does not support ios/safari
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

    @media (max-width: 868px) {
        display: none;
    }
`;*/

/*<SatImg src={Satellite} />*/
const LogoSpin = () => {
    return (
        <Wrapper onClick={() => scroll.scrollToTop()}>
            <PlanetImg src={Planet} />    
            
        </Wrapper>       
    )
}

export default LogoSpin
