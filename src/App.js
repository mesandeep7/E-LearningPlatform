import './App.css';
// import NavbarDemo from './components/NavbarDemo';
// import {HoverNavbarDemo} from './components/HoverNavbarComponentFile/HoverNavbar';
import NavbarSection from './components/NavbarAshmithaCode/NavbarTuition';
import ControlledCarousel from './components/Carousel/CarouselSection';
// import Responsive from './components/CardCarousel/CardsCarousel';
import CountsSection from './components/GCode/CountDemo';
// import TuitionInfo from './components/TuitionInfo/TuitionInfo';
import TuitionHover from './components/TuitionInfo/TuitionHover';

// import styled from "styled-components";
import ContentComponent from "./ContentComponentApp";
import { Footer } from "./components/Footer/Footer";

// import CountUpAnimation from './components/CountSection/CountSection';
// import { MyCarousel } from './components/CarouselChatGpt/CarouselChatGptCode';





function App() {

  return (
    <>

      <div className='app'>
        {/* <MyCarousel /> */}
        <ControlledCarousel/>
        <div className='NavbarMoving'>
          <NavbarSection />
        </div>
        <CountsSection />
        <TuitionHover />
        <ContentComponent/>
        {/* <div>
          <Container>
            <LightColor>
              <Projects />
            </LightColor>
            <LightColor>
            </LightColor>
          </Container>
        </div> */}
        <Footer />


      </div>
    </>
  );
};

export default App;



// const Container = styled.div`

  // background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  // height: 100vh;
//   @media (max-width: 640px) {
//     height: 100%;
//     padding-bottom: 2rem;
//   }
// `;

// const LightColor = styled.div`
//   background: #fff;
// `;
