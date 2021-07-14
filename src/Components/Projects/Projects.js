import React, {useEffect} from 'react'
import { FolderIcon, ProjectData, ProjectTitle, ProjectDescription, ProjectTools, CardsContainer, Cards, ProjectsContainer  } from './ProjectElements';
import AOS from 'aos';
import "aos/dist/aos.css";


const ProjectSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    const renderCards = (data, index) => {
        return (
            <Cards key={index} href={data.link} target="blank">
                <FolderIcon />
                <ProjectTitle>{data.title}</ProjectTitle>
                <ProjectDescription>{data.description}</ProjectDescription>
                <ProjectTools>{data.tools}</ProjectTools>
            </Cards>
        );
    }
    
    return (
        <ProjectsContainer data-aos='fade-up' id="Projects">
            Projects
            <CardsContainer>
                {ProjectData.map(renderCards)}
            </CardsContainer>
        </ProjectsContainer>
    );
};
export default ProjectSection
