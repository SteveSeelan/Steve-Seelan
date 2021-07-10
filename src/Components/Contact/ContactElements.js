import styled from "styled-components";
import {Github, FacebookSquare, Instagram, Linkedin} from '@styled-icons/boxicons-logos'
import {Envelope, Heart} from '@styled-icons/boxicons-regular'

const iconStyle = {
    color: 'white',
    height: '45px',
    width: 'auto',
    padding: '25px 12px 25px',
    transition: '0.2s ease-in',

    '&:hover': {
        color: '#FAE9FF',
        transform: 'translateY(3px)'
    }
}

export const EmailIcon = styled(Envelope)`
    ${iconStyle}
    @media (max-width: 868px) {
        height: 25px;
        width: auto;
        padding: 20px 6px 0px;
    }
`;
export const GithubIcon = styled(Github)`
    ${iconStyle}
    @media (max-width: 868px) {
        height: 25px;
        width: auto;
        padding: 20px 6px 0px;
    }
`;
export const FacebookIcon = styled(FacebookSquare)`
    ${iconStyle}
    @media (max-width: 868px) {
        height: 25px;
        width: auto;
        padding: 20px 6px 0px;
    }
`;
export const InstaIcon = styled(Instagram)`
    ${iconStyle}
    @media (max-width: 868px) {
        height: 25px;
        width: auto;
        padding: 20px 6px 0px;
    }
`;
export const LinkedinIcon = styled(Linkedin)`
    ${iconStyle}
    @media (max-width: 868px) {
        height: 25px;
        width: auto;
        padding: 20px 6px 0px;
    }
`;
export const HeartIcon = styled(Heart)`
    width: auto;
    height: 25px;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 45px 55px 25px;
`;

const getWidthString = (span) => {
    if(!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%;`;
}

export const ContactContainer = styled.div`
    justify-self: center;
    flex-direction: column;
    margin: 625px auto 0px;
    //border-radius: 10%;
    //padding: 0 0 60px;
    //margin: 228px auto 0;
    padding-bottom: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    //box-shadow: 0 0 20px rgba(0, 0, 0, 0.03), 0 0px 40px rgba(0, 0, 0, 0.06);

    @media only screen and (max-width: 768px) {
        ${getWidthString(12)}
        display: flex;
        flex-direction: column;
        margin: 325px auto 0px;
        padding-bottom: 100px;
    }
`;

export const ContactTitle = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #E3535B; //7C8B87 EED5A5
    font-size: 5.5rem;
    font-weight: 600;
    justify-self: center;
`;

export const MadeBy = styled.div`
    padding-top: 100px;
    font-family: 'Inconsolata', monospace;
    color: #FAE9FF;
    font-size: 1.2rem;
    font-weight: 300;
    flex-direction: row;
    justify-self: center;

    @media (max-width: 868px) {
        font-size: .9rem;
        padding-top: 15px;
    }
`;

export const License = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-decoration: none;
    padding-top: 50px;     
    font-family: 'Inconsolata', monospace;
    color: #FAE9FF;
    font-size: 1.2rem;
    font-weight: 300;
    align-self: center;

    @media (max-width: 868px) {
        font-size: .9rem;
    }
`;