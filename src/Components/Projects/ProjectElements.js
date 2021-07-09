import styled from "styled-components";

export const ProjectData = [
    {
        title: "Covid-19 Entry System",
        description: "Senior Design project aimed to ensure saftey in buildings. Developed student portal website that records students' Covid-19 tests in database, which is used to allow/deny entry to campus buildings."
    },
    {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt sem a egestas sodales. Mauris nec efficitur lorem, eu luctus velit."
    },
    {
        title: "Project 3",
        description: "Ut a est ut diam aliquam efficitur ut id turpis. Donec mauris nibh, accumsan non enim eget, maximus facilisis nisl. Nulla pellentesque feugiat enim, quis posuere est lobortis quis."
    },
];

export const ProjectTitle = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #E3535B; //7C8B87 EED5A5
    font-size: 1.75rem;
    padding: 75px 105px 25px;
    justify-self: center;
`;

export const ProjectDescription = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #FAE9FF; //7C8B87 EED5A5
    font-size: 1.15rem;
    font-weight: 300;
    padding: 15px 5px 25px;
`;

const getWidthString = (span) => {
    if(!span) return;

    let width = span / 12 * 100;
    return `width: ${width}%;`;
}

export const SliderContainer = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #E3535B; //7C8B87 EED5A5
    font-size: 4.75rem;
    font-weight: 500;
    position: relative;
    padding: 25px 15px;
    padding-top: 150px;
    margin: 125px auto 225px;
    width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.03), 0 0px 40px rgba(0, 0, 0, 0.06);

    @media only screen and (max-width: 1200px) {
        ${getWidthString(12)}
        display: flex;
        flex-direction: column;
    }
`;