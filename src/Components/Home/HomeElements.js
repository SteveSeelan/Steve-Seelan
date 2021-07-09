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
`;

const HomeContainer = styled.div`
    flex-direction: column;
    font-weight: 600;
    border-radius: 10px;
    margin: 100px auto;
    padding: 25px;
    display: flex;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.06);
    
    ${({ xs }) => (xs ? getWidthString(xs) : "width: 1600px;")};
`;

const HomeTitle = styled.div`
    display: flex;
    flex-direction: row;
    color: #E3535B; //F3F6F4 BDB8D7
    padding: 10px 10px 0px 10px;
    font-family: 'Inconsolata', monospace;
    font-weight: 500;
    font-size: 8.5rem;
    justify-self: center;
    left: 40%;
`;

const HomeCaption = styled.div`
    display: flex;
    flex-direction: row;
    color: #C8908A; //F3F6F4 BDB8D7
    padding: 10px;
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    font-size: 5.5rem;
    position: relative;
`;

const Description = styled.div`
    color: #FAE9FF;
    padding-left: 15px;
    font-family: 'Inconsolata', monospace;
    font-weight: 300;
    font-size: 1.25rem;
    position: relative;
`;

const CustomBtn = styled.button`
    font-family: 'Inconsolata', monospace;
    color: #E3535B;
    align-self: flex-start;
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
`;

export {
    HomeContainer,
    HomeCaption,
    Description,
    CustomBtn,
    HomeDiv,
    HomeTitle
}