import styled from "styled-components";

const Nav = styled.div` 
    z-index: 5;
    //overflow: hidden;
    //padding-right: 20px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(32,22,32,0.99);
    box-shadow: 0 5px 4px -2px rgba(0,0,0,.2);
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width: 768px) {
        overflow: hidden;
        width: 100%;
        flex-direction: column;
        max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
        transition: max-height 0.2s ease-in;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #D9706D;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
        display: flex;
    }
`;


const MenuLinks = styled.h1`
    font-family: 'Inconsolata', monospace;
    padding: 1rem 2rem;
    cursor: pointer;
    font-weight: 400;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    color: #E3535B;
    transition: 0.2s ease-in;

    /*:active {
        border-bottom: 1px solid #F5F9F7;
    }  */

    &:hover {
        color: #F5F9F7;
        transform: translateY(3px);
    }

    &:active {
        transform: translateY(-1px);
        border-bottom: 1px solid #F5F9F7;
        cursor: pointer;
    }
`;

export {
    Nav,
    Menu,
    Hamburger,
    MenuLinks 
};