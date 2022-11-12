import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import certif1 from '../../assets/image/certificate.jpg'
import './mycertificate.css'

const MyCertificate = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="app___certif section__padding">
      <h1>My Certificate</h1>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className=""
          src={certif1}
          alt="certificate udemy"
        />
        {/* <Carousel.Caption>
          <h3>Front End Web Developer</h3>
          <p>Udemy Certificate</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={certif1}
          alt="certificate udemy"
        />
        {/* <Carousel.Caption>
          <h3>Front End Web Developer</h3>
          <p>Udemy Certificate</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={certif1}
          alt="certificate udemy"
        />
        {/* <Carousel.Caption>
          <h3>Front End Web Developer</h3>
          <p>Udemy Certificate</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MyCertificate