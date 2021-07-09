import React, {useState, useEffect} from 'react'
import {GoArrowLeft, GoArrowRight} from "react-icons/go"
import { ProjectDescription, SliderContainer, ProjectTitle } from './ProjectElements';
import "./arrow.css";
import AOS from 'aos';
import "aos/dist/aos.css";

const Slider = ({slides}) => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
      }, []);

    const [currSlide, setCurrSlide] = useState(0);
    const numOfSlides = slides.length;

    const nextSlide = () => {
        return setCurrSlide(currSlide === numOfSlides - 1 ? 0 : currSlide + 1);
    };

    const prevSlide = () => {
        return setCurrSlide(currSlide === 0 ? numOfSlides - 1 : currSlide - 1);
    }

    return (
        <SliderContainer data-aos='fade-up' id="Projects">
            Projects
            <GoArrowLeft 
                className="leftArrow"
                onClick={prevSlide} />
            <GoArrowRight
                className="rightArrow"
                onClick={nextSlide} />
            {slides.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === currSlide && (
                            <ProjectTitle data-aos='fade-down'>
                                {slide.title}
                                <ProjectDescription data-aos='fade-in'>{slide.description}</ProjectDescription>
                            </ProjectTitle>
                        )}
                    </div>
                );
            })}
        </SliderContainer>
    );
};

export default Slider
