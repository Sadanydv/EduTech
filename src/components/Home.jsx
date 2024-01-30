import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillAmazonCircle,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home" >
        <main>
          <h1>EduTech</h1>
          <p>Solution To All Your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>  
          <p>
            We are your one and only solutin to the tech Problems you face Every
            day. We are leading tech company whose aim is to increase the problem
            solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
          At EduTech, we are dedicated to providing comprehensive solutions to all your technical challenges. 
          With a team of experts passionate about problem-solving, we specialize in addressing a wide array of tech-related issues.
           From intricate coding problems to system optimizations, our commitment is to deliver tailored solutions that empower your
            business. Whether you're grappling with software bugs, system integrations, or strategic technology decisions,
             our experienced professionals are here to guide you. Trust EduTech to be your reliable partner in navigating the complexities 
             of the digital landscape, ensuring your technological success and innovation
          </p>
        </div>
      </div>
      <div className="home4" id="brands" >
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "1.5s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "2s",
              }}
            >
              <AiFillInstagram />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
