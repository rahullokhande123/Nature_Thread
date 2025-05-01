import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img3 from "../../public/images/img3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import { FaUserCircle } from "react-icons/fa";
import Slider from "react-slick";
import { LuMessageSquare } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <div style={{overflowX:"hidden",overflowY:"hidden"}}>
      <div className="carousel">
        <Carousel style={{ position: "relative" }}>
          <Carousel.Item>
            <img src={img3} width="100%" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../public/images/img4.jpg" width="100%" alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../public/images/img2.jpg" width="100%" alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* ==================== Second Caro ================= */}
      <div className="newApperal">
        <div className="leftside">
          <div className="div">
            <h4>Amazing Apperal</h4>
          </div>
        </div>

        <div className="rightside">
          <div className="col2">
            <Slider {...settings}>
              <div>
                <img
                  src="../../public/images/a1.jpg"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="../../public/images/a4.jpg"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="../../public/images/a3.jpg"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="../../public/images/a5.jpg"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="youtube">
        <div>
          <img src="../../public/images/a2.jpg" width="540px" alt="" />
        </div>
        <div className="">
          <iframe
            width="700"
            height="420"
            src="https://www.youtube.com/embed/Vt2ifIxk4Gs?autoplay=1&mute=1&loop=1&playlist=Vt2ifIxk4Gs"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="gantleManappear">
        <div className="rightside">
          <div className="col2">
            <Slider {...settings}>
              <div>
                <img
                  src="5345.png"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="3535353.png"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="3-3-300x300-1.png"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="5345.png"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="right">
          <h3>Gentlemen's Apparel</h3>
        </div>
      </div>
      <div className="shopNow">
        <img
          src="../../public/images/a6.jpg"
          
          alt=""
        />
      </div>
      <div className="product">
        <div className="left">
          <h1>product's page</h1>
        </div>
        <div className="rightside">
          <div className="col2">
            <Slider {...settings}>
              <div>
                <img
                  src="/PersonalCare.png"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/PersonalCare2.jpeg"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/PersonalCare3.jpeg"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/PersonalCare4.jpg"
                  height="50px"
                  width="350px"
                  alt=""
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="wardobar" style={{marginTop:"5%"}}>
        <div className="left">
          <h1>Wardrobe Essentials</h1>
          <p>
            100% authentic handmade products 💎💎 ⭐Ethnic |designer wear|
            wedding 👗 👉Worldwide order✈ 👉💰Bank /COD
          </p>
          <div className="button">
            <button>VIEWS MORE</button>
          </div>
        </div>
        <div className="right">
          <div className="form">
            <div className="detail">
              <h2>
                {" "}
                Join Our <br /> Newsletter Now
              </h2>
              <p>
                A client that's unhappy for a reason is a problem, a <br />
                client that's unhappy though can't.
              </p>
            </div>
            <div className="email">
              <div>
                Email <span>*</span>
              </div>
              <div className="input">
                <input type="email" placeholder="enter your email" />
              </div>
            </div>
            <div className="button2">
              <button>Submit</button>
            </div>

            <p>Will be used in accordance with our Privacy Policy</p>
          </div>
        </div>
      </div>

      <div style={{textAlign:"center",marginTop:"50px"}} className="feature">
        <div align="center" className="div1" style={{margin:"20px"}}>
          <div className="img">
            <img src="images/shopping.png" alt="" />
          </div>
          <div className="detail">
            <h2>Free Shipping</h2>
            <p>
              "Experience complimentary shipping on every order with a minimum
              purchase of just 300. Start shopping now to seize the savings!"
            </p>
          </div>
        </div>
        <div align="center" className="div2" style={{margin:"20px"}}>
          <div className="img">
            <img src="images/support.png" alt="" />
          </div>
          <div className="detail">
            <h2>Support Team</h2>
            <p>
            "Our dedicated support team is here for you. Reach out anytime for prompt assistance and personalized solutions."
            </p>
          </div>
        </div>
        <div align="center" className="div3" style={{margin:"20px"}}>
          <div className="img">
            <img src="/images/payments.png" alt="" />
          </div>
          <div className="detail">
            <h2>Online Payments</h2>
            <p>
            "Seamless online payment for your convenience and peace of mind. Trust in our secure payment gateway for hassle-free transactions."
            </p>
          </div>
        </div>
        <div align="center" className="div4" style={{margin:"20px"}}>
          <div className="img">
            <img src="/images/protect.png" alt="" />
          </div>
          <div className="detail">
            <h2>Safe & Secure</h2>
            <p>
            "Rest assured, your safety and security are our top priorities. With state-of-the-art encryption ."
            </p>
          </div>
        </div>
      </div>
      <div className="article">
        <div style={{textAlign:"center",marginBottom:"40px"}} className="detail">
          <h2> Our New Article</h2>
          <p>
            Commercial publishing platforms and content management systems that
            you can show <br />{"     "} different text, different the web workers
            toolbox.
          </p>
        </div>
        <div className="div">
          <Slider {...settings2}>
            <div className="mr-50">
              <div className="img">
              <div style={{}} className="articleCat">
                  <Button style={{marginTop:"135%",}} variant="dark">PERSONAL CARE</Button>
                </div>
                <img style={{marginBottom:"5%"}} src="../../public/images/d5.jpg" alt="" />
                
              </div>

              <div className="data">
              <p>
                  The Ultimate Guide to Multani
                  <br /> Mitti Powder: Benefits, Uses, and Tips
                </p>
              
                <p>   <FaUserCircle /> Admin , <LuMessageSquare /> <IoShareSocialOutline /></p>
                <p>introduction Multan....</p>
                <a href="">CONTINUE READING</a>
              </div>
            </div>
            <div>
              <div className="img">
                <div className="articleCat">
                  <Button style={{marginTop:"250%"}} variant="dark">women</Button>
                </div>
                <img style={{marginBottom:"5%"}} src="../../public/images/d2.jpg" alt="" />
                
              </div>
              <div className="data">
              <p>
                  The Ultimate Guide to Multani
                  <br /> Mitti Powder: Benefits, Uses, and Tips
                </p>
                <p> <FaUserCircle/>  Admin , <LuMessageSquare /><IoShareSocialOutline /></p>
                <p>introduction Multan....</p>
                <a href="">CONTINUE READING</a>
              </div>
            </div>
            <div>
              <div className="img">
              <div className="articleCat">
                  <Button style={{marginTop:"250%"}} variant="dark">women</Button>
                </div>
                <img style={{marginBottom:"5%"}} src="../../public/images/d3.jpg" alt="" />
                
              </div>
              <div className="data">
              <p>
                  The Ultimate Guide to Multani
                  <br /> Mitti Powder: Benefits, Uses, and Tips
                </p>
                <p>  <FaUserCircle />Admin , <LuMessageSquare /> <IoShareSocialOutline /></p>
                <p>introduction Multan....</p>
                <a href="">CONTINUE READING</a>
              </div>
            </div>
            <div>
              <div className="img">
              <div className="articleCat z-20">
                  <Button style={{marginTop:"350%"}} variant="dark">Men</Button>
                </div>
                <img style={{marginBottom:"5%"}}
                  className="z-10"
                  src="../../public/images/d4.jpg"
                  alt=""
                />
                
              </div>
              <div className="data">
                <p>
                  The Ultimate Guide to Multani
                  <br /> Mitti Powder: Benefits, Uses, and Tips
                </p>
                <p> <FaUserCircle />Admin , <LuMessageSquare /> <IoShareSocialOutline /></p>
                <p>introduction Multan....</p>
                <a href="">CONTINUE READING</a>
              </div>
            </div>
            
            
          </Slider>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;