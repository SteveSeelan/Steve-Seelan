import styled from 'styled-components';

const getWidthString = (span) => {
  if (!span) return;

  let width = (span / 8) * 1200;
  return `max-width: ${width};`;
};

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

  ${({ xs }) => (xs ? getWidthString(xs) : 'width: 1600px;')};
`;

const HomeTitle = styled.div`
  display: flex;
  flex-direction: row;
  color: #e3535b; //F3F6F4 BDB8D7
  padding: 10px 10px 0px 10px;
  font-family: 'Inconsolata', monospace;
  font-weight: 500;
  font-size: 8.5rem;
  justify-self: center;
  left: 40%;
  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

const HomeCaption = styled.div`
  display: flex;
  flex-direction: row;
  color: #c8908a; //F3F6F4 BDB8D7
  padding: 10px;
  font-family: 'Inconsolata', monospace;
  font-weight: 400;
  font-size: 5.5rem;
  position: relative;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.div`
  color: #fae9ff;
  padding-left: 15px;
  font-family: 'Inconsolata', monospace;
  font-weight: 300;
  font-size: 1.25rem;
  position: relative;
`;

const CustomBtn = styled.button`
  font-family: 'Inconsolata', monospace;
  color: #e3535b;
  align-self: flex-start;
  font-size: 1.05rem;
  margin: 40px 6px 20px;
  padding: 1em 1em;
  border: 1.5px solid #e3535b;
  border-radius: 5%;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  transition: all 0.25s ease-in;

  &:hover {
    background: rgba(227, 83, 91, 0.05);
    transform: translateY(1px);
  }
`;

export {
  HomeContainer,
  HomeCaption,
  Description,
  CustomBtn,
  HomeDiv,
  HomeTitle,
};
