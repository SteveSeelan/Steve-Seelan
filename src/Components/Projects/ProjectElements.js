import styled from "styled-components";
import { Folder } from "@styled-icons/boxicons-regular";

export const ProjectData = [
    {
        title: "Covid-19 Entry System",
        description: "Senior Design project aimed to ensure saftey in buildings. Developed student portal website that records students' Covid-19 tests in database, which is used to allow/deny entry to campus buildings.",
        link: "https://engineering.purdue.edu/477grp13/Portal/index.html",
        tools: "React JavaScript CSS"
    },
    {
        title: "Morning Inspiration",
        description: "Automatically sends a random inspirational quote to your phone at a scheduled time every day",
        link: "https://github.com/SteveSeelan/Morning-Inspiration",
        tools: "Python"
    },
    {
        title: "Project 3",
        description: "In the works..."
    },
];

export const FolderIcon = styled(Folder)`
    align-self: left;
    color: #E3535B;
    height: 35px;
    width: auto;
    padding: 5px 0px 5px;
    transition: 0.2s ease-in;

    &:hover {
        color: #FAE9FF;
        transform: translateY(3px);
    }

    @media (max-width: 868px) {
        height: 25px;
        width: auto;
        padding: 10px 0px 0px;
    }
`;

export const ProjectTitle = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #E3535B; //7C8B87 EED5A5
    font-size: 1.75rem;
    padding: 25px 10px 25px;
    justify-self: center;
    max-width: 600px;

    @media (max-width: 868px) {
        font-size: 1.2rem;
    }
`;

export const ProjectDescription = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #FAE9FF; //7C8B87 EED5A5
    font-size: 1.15rem;
    font-weight: 300;
    padding: 5px 5px 5px;
    max-width: 600px;

    @media (max-width: 868px) {
        font-size: .9rem;
    }
`;

export const ProjectTools = styled.div`
    font-family: 'Inconsolata', monospace;
    color: #C8908A; //7C8B87 EED5A5
    font-size: 1.05rem;
    padding: 15px 5px 5px;
    justify-self: center;
    max-width: 600px;

    @media (max-width: 868px) {
        font-size: .8rem;
    }
`;

export const ProjectsContainer = styled.div`
    min-height: 100vh;
    text-align: center;
    max-width: 1200px;
    color: #E3535B; //7C8B87 EED5A5
    font-size: 4.75rem;
    font-weight: 500;
    margin: 0px auto 125px;

    @media (max-width: 868px) {
        font-size: 2.9rem;
    }
`;

export const Cards = styled.a`
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    padding: 1.5rem;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;

    &:hover {
        transform: translateY(-8px);
        cursor: pointer;
    }

    &:active {
        transform: translateY(5px);
        cursor: pointer;
    }
`;

export const CardsContainer = styled.ul`  
    display: grid;
    list-style: none;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 35px;
    padding-top: 100px;
`;