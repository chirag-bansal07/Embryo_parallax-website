import { Parallax } from "react-scroll-parallax";
//import { Parallax } from 'react-parallax'
import "./prev.css";
import aditide from "./img/AditiDe.jpg";
import alok from "./img/alokmisra.jpeg";
import anupam from "./img/anupam_purwar.jpg";
import piyush from "./img/Piyush-Malik.jpg";
import { FaLinkedin } from "react-icons/fa";

export default function Prev() {
  return (
    <>
      <section className="prev">
        <img src="" alt="" />
        <section className="prevmain">
          <div className="box">
            <Parallax translateX={[-25, -10]}>
              <h2>YIN AND YANG OF PRODUCT INNOVATION</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img className=" jarallax-img" src={piyush} />
              </div>
              <Parallax translateY={[50, -100]}>
                <div className="content" data-jarallax-element="-200 0">
                  <div className="card">
                    <p className="card-title">PIYUSH MALIK</p>
                    <p className="card-des">
                      Piysh Malik is a trailblazing startup executive,
                      entrepreneur, board advisor in the domain of emerging
                      technologies. As Chief Data Officer, his expertise lies in
                      leveraging data-driven innovations to craft immersive
                      customer experiences and optimize operations
                    </p>
                    <FaLinkedin className="linked-in" />
                    <p className="card-text">
                      <span>View More</span>
                      <svg
                        className="arrow-icon"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </section>

        <section className="prevmain">
          <div className="box">
            <Parallax translateX={[30, -5]}>
              <h2>HARNESSING GENAI & ML</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img src={anupam} className="jarallax-img" />
              </div>
              <Parallax translateY={[50, -90]}>
                <div className="content" data-jarallax-element="-200 0">
                  <div className="card">
                    <p className="card-title">ANUPAM PURWAR</p>
                    <p className="card-des">
                      Anupam is a BITS alumnus with an MBA from ISB. He is a
                      senior research scientist at Amazon Development Center
                      (India). With an expertise in ML, IoT and computationaol
                      design, he has more than 20 peer reviewed articles with
                      over 200 citations. For more information, visit Anupam's
                      Profile
                    </p>
                    <FaLinkedin className="linked-in" />
                    <p className="card-text">
                      <span>View More</span>
                      <svg
                        className="arrow-icon"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </section>

        <section className="prevmain">
          <div className="box">
            <Parallax translateX={[-10, 20]}>
              <h2>MYTH TO MATH</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img src={aditide} className="jarallax-img" />
              </div>
              <Parallax translateY={[50, -100]}>
                <div className="content" data-jarallax-element="-200 0">
                  <div className="card large">
                    <p className="card-title">DR. ADITI SEN DE</p>
                    <p className="card-des">
                      Prof Aditi Sen De is known for her research on quantum
                      information and computation, quantum communication
                      including quantum cryptography, quantum optics and
                      many-body physics. She is the first female physicist to be
                      awarded the Shanti Swarup Bhatnagar Prize for Science and
                      Technology for her contributions to physical sciences in
                      2018.
                    </p>
                    <FaLinkedin className="linked-in" />
                    <p className="card-text">
                      <span>View More</span>
                      <svg
                        className="arrow-icon"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </section>

        <section className="prevmain">
          <div className="box">
            <Parallax translateX={[25, -5]}>
              <h2>AMA ON INVESTMENT BANKING</h2>
            </Parallax>
            <div className="container">
              <div className="imgBx jarallax">
                <img src={alok} className="jarallax-img" />
              </div>
              <Parallax translateY={[50, -100]}>
                <div className="content" data-jarallax-element="-200 0">
                  <div className="card large">
                    <p className="card-title">ALOK MISRA</p>
                    <p className="card-des">
                      Alok Misra is the COO and Operating Partner of General
                      Atlantic, the world's 9th biggest private equity firm. He
                      was Group Chief Financial Officer of MphasiS BFL Group
                      (now part of the Hewlett-Packard Company) and served in a
                      number of accounting and finance roles at other firms,
                      including I.T.C. Limited and PwC. He is a Fellow Member of
                      the Institute of Chartered Accountants of India.
                    </p>
                    <FaLinkedin className="linked-in" />
                    <p className="card-text">
                      <span>View More</span>
                      <svg
                        className="arrow-icon"
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </section>
        <div className="prev-button">
          <button className="btn">VIEW ALL</button>
        </div>
      </section>
    </>
  );
}
