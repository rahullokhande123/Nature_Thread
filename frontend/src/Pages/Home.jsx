import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import WomansCategories from "./WomansCategories";

// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
      {/* First Carousel */}
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

      {/* Second Carousel */}
      <div className="container py-5 pt-2">
      <div className="row">
        {/* Left side content */}
        <div className="col-md-3 mb-4 mb-md-10 pl-0 ml-0 pt-26">
          <h1>Amazing Apparel</h1>
          {/* <p className="lead">
            This is a responsive layout featuring content on the left and an
            auto-scrolling image carousel on the right.
          </p> */}
          {/* <p>
            The carousel displays 3 images at a time on desktop and smoothly
            scrolls one image at a time with autoplay and arrows.
          </p> */}
          {/* <button className="btn btn-primary mt-3">Learn More</button> */}
        </div>

        {/* Right side carousel */}
        <div className="col-md-9 border-[30px] border-gray-300">
          <div
            id="multiImageCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner d-flex">
              {/* Slide group 1 */}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="https://naturethread.in/wp-content/uploads/2025/01/15ML-2.jpg"
                      className="d-block w-100"
                      alt="Image 1"
                    />
                  </div>
                  <div className="col-4 d-none d-md-block">
                    <img
                      src="https://naturethread.in/wp-content/uploads/2025/01/15ML.jpg"
                      className="d-block w-100"
                      alt="Image 2"
                    />
                  </div>
                  <div className="col-4 d-none d-md-block">
                    <img
                      src="https://naturethread.in/wp-content/uploads/2025/01/15ML-4.jpg"
                      className="d-block w-100"
                      alt="Image 3"
                    />
                  </div>
                </div>
              </div>

              {/* Slide group 2 */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-4">
                    <img
                      src="https://naturethread.in/wp-content/uploads/2025/01/15ML-3.jpg"
                      className="d-block w-100"
                      alt="Image 4"
                    />
                  </div>
                  <div className="col-4 d-none d-md-block">
                    <img
                      src="/NT-logo.png"
                      className="d-block w-100"
                      alt="Image 1"
                    />
                  </div>
                  <div className="col-4 d-none d-md-block">
                    <img
                      src="/NT-logo.png"
                      className="d-block w-100"
                      alt="Image 2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel controls */}
            <button
              className="carousel-control-prev text-black"
              type="button"
              data-bs-target="#multiImageCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon text-black"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden text-black">Previous</span>
            </button>
            <button
              className="carousel-control-next text-black"
              type="button"
              data-bs-target="#multiImageCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon text-black"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden text-black">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* <!-- Bootstrap JS Bundle with Popper --> */}
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // No custom JavaScript needed!
            // Bootstrap's data-bs-ride="carousel" and data-bs-interval="3000" handle the auto-scrolling
        });
    </script> */}
    </>
  );
};

export default Home;
