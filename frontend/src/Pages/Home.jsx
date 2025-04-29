import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img3 from "../../public/images/img3.jpg";

const Home = () => {
  return (
    <>
      <div className="carousel" >
        <Carousel style={{position:"relative"}}>
          <Carousel.Item>
            <img src={img3} width="100%"   alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../public/images/img4.jpg"  width="100%" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../public/images/img2.jpg"    width="100%" alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
