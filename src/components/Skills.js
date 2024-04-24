import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const CustomLeftArrow = ({ onClick}) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
  );
  const CustomRightArrow = ({ onClick }) => {
    return <i className="custom-right-arrow" onClick={() => onClick()} />;
  };
  
  const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
    const { totalItems, currentSlide } = carouselState;
    return (
      <div className="custom-button-group">
        <div>Current slide is {currentSlide}</div>
        <button onClick={() => previous()}>Previous slide</button>
        <button onClick={() => next()}>Next slide</button>
        <button
          onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
        >
          Go to a random slide
        </button>
      </div>
    );
  };
  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div
        style={{
          //textAlign: "center",
          
        }}
      >
        <button className="customLeft" onClick={previous}><BsArrowLeftShort/></button>
        <button className="customRight" onClick={next}><BsArrowRightShort/></button>
      </div>
    );
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Programming Languages, software, IDE's, libraries, etc that I'm familiar with:<br></br> C++, Python, HTML, CSS, JavaScript, React, Github, MySQL, Visual Studio Code, Microsoft Office.</p>
                        <Carousel responsive={responsive} infinite={true} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<CustomButtonGroupAsArrows />} className="skill-slider">
                            <div className="item">
                                <h4>Teamwork</h4>
                            </div>
                            <div className="item">
                                <h4>Problem Solving</h4>
                            </div>
                            <div className="item">
                                <h4>Attention to Detail</h4>
                            </div>
                            <div className="item">
                                <h4>Adaptability</h4>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
