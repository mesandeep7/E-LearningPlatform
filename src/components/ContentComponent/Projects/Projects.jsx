import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import './projects.css';

const Projects = () => {
    return (
        <div className='ProjectSec'>
            <Container id='project'>
                <Zoom>
                    <h1 className='h1Class'>Tuition <span className="greenFirst ">World</span></h1>
                    <h6>A <span className="green">Smart Way</span>  Of span Learning</h6>
                    <p className='pClass'>We are committed to taking education to every single door,
                        making it a superb blend of knowledge and job-specific. Our mission
                        is to create ethical and intellectual personnel through qualitative education.
                        Today, TUITION WORLD is located at Dilsukhnagar, Hyderabad, Telangana.

                    </p>
                </Zoom>
                <div className='slideDiv'>
                    <Slide>
                        <SliderComp />
                    </Slide>
                </div>
            </Container>
        </div>
    )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``