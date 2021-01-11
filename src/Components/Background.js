import React from 'react';
import {Carousel} from 'react-bootstrap';
import Slide1 from "./Slide1.png";
import Slide2 from "./Slide2.png";
import Slide3 from "./Slide3.png";
import 'bootstrap/dist/css/bootstrap.min.css';




function Background() {
    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 y-100"
                        src={Slide1}
                        alt="Over 100 companies trust go!"
                    />
                    <Carousel.Caption>
                        <h3
                        class="text-primary"
                        >WELCOME TO</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 y-100"
                        src={Slide2}
                        alt="Less is more: more opportunities."
                    />
                    <Carousel.Caption>
                        <h3 class="text-primary"></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 y-100"
                        src={Slide3}
                        alt="Welcome to My Website"
                    />
                </Carousel.Item>
            </Carousel>
    )
}

export default Background;