import styled from "styled-components";

const getWidthString = (span) => {
    if(!span) return;

    let width = span / 8 * 1200;
    return `max-width: ${width};`;
}

//${({ xs }) => (xs ? getPaddingString(xs) : "margin-top: 1200px;")};

const HomeDiv = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    min-height: 100vh;
    padding: 0px;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        width: 100%;
    }
`;

const HomeContainer = styled.div`
    flex-direction: column;
    font-weight: 600;
    border-radius: 10px;
    margin: 100px auto;
    padding: 25px;
    display: flex;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.06);
    
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%;")};

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

const HomeTitle = styled.div`
    display: flex;
    flex-direction: row;
    color: #E3535B; //F3F6F4 BDB8D7
    padding: 10px 10px 0px 10px;
    font-family: 'Inconsolata', monospace;
    font-weight: 600;
    font-size: 7.0rem;
    left: 40%;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        font-size: 5.0rem;
    }
`;

const HomeCaption = styled.div`
    display: flex;
    flex-direction: row;
    color: #C8908A; //F3F6F4 BDB8D7
    padding: 10px;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    font-size: 4.5rem;
    position: relative;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        font-size: 3.0rem;
    }
`;

const Description = styled.div`
    color: #FAE9FF;
    padding-left: 15px;
    font-family: 'Inconsolata', monospace;
    font-weight: 300;
    font-size: 1.25rem;
    position: relative;
    max-width: 50vh;

    @media only screen and (max-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        width: 80%;
        font-size: .9rem;
    }
`;

const CustomBtn = styled.button`
    align-self: flex-start;
    font-family: 'Inconsolata', monospace;
    color: #E3535B;
    font-size: 1.05rem;
    margin: 40px 6px 20px;
    padding: 1em 1em;
    border: 1.5px solid #E3535B;
    border-radius: 5%;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    transition: all 0.25s ease-in;

    &:hover {
        background: rgba(227, 83, 91, .05);
        transform: translateY(1px);
    }

    @media only screen and (max-width: 768px) {
        align-self: flex-start;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        font-size: .85rem;
    }
`;

export {
    HomeContainer,
    HomeCaption,
    Description,
    CustomBtn,
    HomeDiv,
    HomeTitle
}