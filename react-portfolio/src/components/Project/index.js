import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "../../assets/images/audiofreq.JPG"
import "../../assets/images/pwgen.JPG"
import "../../assets/images/readmegen.JPG"
import "../../assets/images/refactoringhw.JPG"
import "../../assets/images/teamprofgen.JPG"
import "../../assets/images/tinderforfood.JPG"

function Project() {
  return (
    <Container>
      <Row>
        <Carousel>
          <Button href="https://chrischo94.github.io/TinderForFood/">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/images/audiofreq.JPG?text=First slide&bg=373940"
              alt="AudioFreq"
            />
            <Carousel.Caption>
              <h3>Audio Freq</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          </Button>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/images/pwgen.JPG?text=Second slide&bg=282c34"
              alt="PW Gen"
            />

            <Carousel.Caption>
              <h3>Password Generator</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/images/readmegen.JPG?text=Third slide&bg=20232a"
              alt="ReadME Generator"
            />

            <Carousel.Caption>
              <h3>ReadME Generator label</h3>
            
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/images/refactoringhw.JPG?text=Third slide&bg=20232a"
              alt="Refactoring Webpage"
            />

            <Carousel.Caption>
              <h3>Refactoring Webpage label</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/images/teamprofgen.JPG?text=Third slide&bg=20232a"
              alt="Team Profile Generator"
            />

            <Carousel.Caption>
              <h3>Team Profile Generator label</h3>
             
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../assets/images/tinderforfood.JPG?text=Third slide&bg=20232a"
              alt="Tinder for Food"
            />

            <Carousel.Caption>
              <h3>Tinder for Food label</h3>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}

export default Project;
