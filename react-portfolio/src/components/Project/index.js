import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "../../assets/images/audiofreq.JPG"
import "../../assets/images/pwgen.JPG"
import "../../assets/images/readmegen.JPG"
import "../../assets/images/refactoringhw.JPG"
import "../../assets/images/teamprofgen.JPG"
import "../../assets/images/tinderfofood.JPG"

function Project() {
  return (
    <Container>

        <Carousel variant="dark">
        
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/audiofreq.JPG?text=First slide&bg=373940`).default}
              alt="AudioFreq"
            />
            <Carousel.Caption>
              <h3>Audio Freq</h3>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/pwgen.JPG?text=Second slide&bg=282c34`).default}
              alt="PW Gen"
            />

            <Carousel.Caption>
              <h3>Password Generator</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/readmegen.JPG?text=Third slide&bg=20232a`).default}
              alt="ReadME Generator"
            />

            <Carousel.Caption>
              <h3>ReadME Generator label</h3>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/refactoringhw.JPG?text=Third slide&bg=20232a`).default}
              alt="Refactoring Webpage"
            />

            <Carousel.Caption>
              <h3>Refactoring Webpage label</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/teamprofgen.JPG?text=Third slide&bg=20232a`).default}
              alt="Team Profile Generator"
            />

            <Carousel.Caption>
              <h3>Team Profile Generator label</h3>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require(`../../assets/images/tinderfofood.JPG?text=Third slide&bg=20232a`).default}
              alt="Tinder for Food"
            />

            <Carousel.Caption>
              <h3>Tinder for Food label</h3>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

    </Container>
  );
}

export default Project;
