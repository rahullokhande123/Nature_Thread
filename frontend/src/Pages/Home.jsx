import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

const Home = () => {
  const [firstCoroImg, setFirstCoroImg] = useState([]);

  const FirstCaro = () => {
    const url = "http://127.0.0.1:8000/firstCaroImg/";
    axios.get(url).then((res) => {
      setFirstCoroImg(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    FirstCaro();
  }, []);

  return (
    <>
      <div className="carousel mh-2 p-2 pt-0">
        <Carousel style={{ position: "relative" }}>
          {firstCoroImg.map((item, index) => (
            <Carousel.Item key={index}>
              <img
                src={`http://127.0.0.1:8000${item.image}`}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
