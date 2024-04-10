import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import UnsplashImages from "./comp/ImageData/ImageData.js";
import { AdvancedBannerTop } from "./comp/hero";
import About from "./comp/About";
import Prev from "./comp/prevlec";
import Article from "./comp/panel/Article/Article";
import Heading from "./comp/panel/Heading/Heading";
import { useState } from "react";
import Apogee from "./comp/Apogee";
import Team from "./comp/Teams/Team";
import Contact from "./comp/contact";

export default function App() {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY;
    const container = document.getElementById("container");
    if (container) {
      container.scrollLeft += delta;
      setScrollLeft(container.scrollLeft);
    }
  };
  const images = UnsplashImages.map((img, i) => {
    return (
      <Article
        scrollLeft={scrollLeft}
        key={i}
        src={img.src}
        title={img.title}
        description={img.description}
      />
    );
  });
  return (
    <>
      <ParallaxProvider>
        <AdvancedBannerTop />
        <div className="center">
          <h1 className="headline about gray">About</h1>
        </div>
        <ParallaxProvider>
          <About />
          <div className="center lec">
            <h1 className="headline about gray">Previous Lectures</h1>
          </div>
        </ParallaxProvider>
        <ParallaxProvider>
          <Prev />
        </ParallaxProvider>
      </ParallaxProvider>
      <div onWheel={handleScroll} id="container" className="horizontal">
        <Heading scrollLeft={scrollLeft} />
        <div className="main-content">{images}</div>
      </div>
      <button className="btn panelbtn">VIEW ALL</button>
      <div className="center">
        <h1 className="headline about gray margin-top">APOGEE</h1>
      </div>
      <Apogee />
      <ParallaxProvider>
        <div className="center lec">
          <h1 className="headline about gray">Our Team</h1>
        </div>
        <Team />
      </ParallaxProvider>
      <h1 className="headline about gray center margin-top">Contact Us</h1>
      <Contact />
    </>
  );
}
