import { Parallax, useParallax } from "react-scroll-parallax";
import "./about.css";
import { useState } from "react";
const About = () => {
  const [flag, setflag] = useState(false);
  const [flag2, setflag2] = useState(false);
  const para = useParallax<HTMLDivElement>({
    scale: [0.8, 1, "easeInQuad"],
    opacity: [1, 0.3],
    translateY: [0, -10.3],
  });
  const para2 = useParallax<HTMLDivElement>({
    scale: [0.8, 1, "easeInQuad"],
    opacity: [1, 0.3],
    translateY: [0, -10],
  });
  const para3 = useParallax<HTMLDivElement>({
    scale: [0.8, 1, "easeInQuad"],
    opacity: [1, 0.3],
    translateY: [0, -10],
  });
  const para4 = useParallax<HTMLDivElement>({
    opacity: [1, 0],
    translateY: [0, -10],
  });

  return (
    <div className="about-full about-main">
      <Parallax
        onEnter={() => setflag(true)}
        onExit={() => {
          setflag(false);
        }}
      >
        <div className={`about-rowone`}>
          <div
            ref={para.ref}
            className={`about-para vision ${!flag ? "hide" : ""}`}
          >
            <div className="container">
              <div className="box">
                <span className="title">VISION</span>
                <div>
                  <strong>
                    Enrich the learning experience at BITS Pilani.
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div
            ref={para2.ref}
            className={`about-para mission ${!flag ? "hide" : ""}`}
          >
            <div className="container">
              <div className="box">
                <span className="title">MISSION</span>
                <div>
                  <strong>
                    To make the academic and industrial experience of the BITS
                    alumni accessible to on-campus students through lectures,
                    collaborative research projects, and exposure to current
                    research trends around the world.
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <Parallax
        onEnter={() => {
          setflag2(true);
        }}
        onExit={() => {
          setflag2(false);
        }}
      >
        <div
          ref={para3.ref}
          className={`about-para why ${!flag2 ? "hide" : ""}`}
        >
          <div className="container">
            <div className="box">
              <span className="title">WHY EMBRYO?</span>
              <div>
                <strong>
                  Although there is no alternative to 'in person' classroom
                  teaching, any University in the world is limited by its
                  on-campus human resources and available expertise. Often, a
                  lecture or two in the right area by the right person can
                  change the course of one's career. Embryo proposes to free
                  education from the barriers of distance, time and human
                  resources. Leveraging web-based technologies, Embryo acts as a
                  bridge between the knowledge seekers (students), and the
                  potential speakers. Such a powerful method truly realizes the
                  dream of border less classrooms and bottomless learning
                  resources.
                </strong>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="about-button" ref={para4.ref}>
        <button className="btn">Know More</button>
      </div>
    </div>
  );
};
export default About;
