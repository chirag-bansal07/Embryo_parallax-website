import React from "react";
import "./Team.css";
import img from "../img/prof.jpeg";
import mail from "../img/mail.svg";
import { useParallax } from "react-scroll-parallax";
import Teamcard from "./teamcard";

function Team() {
  return (
    <div className="team">
      <div>
        <Teamcard
          stu={false}
          imgsrc={img}
          name="DR. RISHIKESH VAIDYA"
          post="Teacher-In-Charge"
          li="https://www.linkedin.com/in/rishikesh-vaidya-8a61344a/"
          email="mailto:rishikesh@pilani.bits-pilani.ac.in"
        />
      </div>
      <div className="student">
        <Teamcard
          stu={true}
          imgsrc="http://embryo.bits-pilani.ac.in/img/team/nishit.jpg"
          name="NISHIT SONI"
          post="President"
          li="https://www.linkedin.com/in/nishit-soni-171058222/"
          email="mailto:f20210672@pilani.bits-pilani.ac.in"
        />
        <Teamcard
          stu={true}
          imgsrc="http://embryo.bits-pilani.ac.in/img/team/jainam2.jpg"
          name="JAINAM HEMANI"
          post="Secretary"
          li="https://www.linkedin.com/in/jainam-hemani/"
          email="mailto:f20210029@pilani.bits-pilani.ac.in"
        />
        <Teamcard
          stu={true}
          imgsrc="http://embryo.bits-pilani.ac.in/img/team/thorat.jpg"
          name="TANISHQ THORAT"
          post="APOGEE Coordinator"
          li="https://www.linkedin.com/in/tanishq-thorat-549a6a22b/"
          email="mailto:f20212701@pilani.bits-pilani.ac.in"
        />
        <Teamcard
          stu={true}
          imgsrc="http://embryo.bits-pilani.ac.in/img/team/anish.jpg"
          name="ANISH HATUA"
          post="OASIS Coordinator"
          li="https://www.linkedin.com/in/anish-hatua/"
          email="mailto:f20210741@pilani.bits-pilani.ac.in"
        />
      </div>
      <div className="student">
        <Teamcard
          stu={true}
          imgsrc="http://embryo.bits-pilani.ac.in/img/team/sachika.jpeg"
          name="SACHIKA LALA"
          post="BOSM Coordinator"
          li="https://www.linkedin.com/in/sachika-lala-3b45b9221/"
          email="mailto:f20212375@pilani.bits-pilani.ac.in"
        />
        <Teamcard
          stu={true}
          imgsrc="http://embryo.bits-pilani.ac.in/img/team/maitrey.jpg"
          name="MAITREY PATEL"
          post="Outreach Team Lead APOGEE Joint Coordinator"
          li="https://www.linkedin.com/in/maitrey-patel-678529221/"
          email="mailto:f20210725@pilani.bits-pilani.ac.in"
        />
        <Teamcard
          stu={true}
          imgsrc="http://embryo.bits-pilani.ac.in/img/team/nahata.jpg"
          name="SHUBHAM NAHATA"
          post="Operations Team Lead Oasis Joint Coordinator"
          li="https://www.linkedin.com/in/shubham-nahata-60059822b/"
          email="mailto:f20210725@pilani.bits-pilani.ac.in"
        />
        <Teamcard
          stu={true}
          imgsrc="http://embryo.bits-pilani.ac.in/img/team/sandhu.jpg"
          name="SAKSHAM SANDHU"
          post="Editorial Team Lead &nbsp; &nbsp;&nbsp;
         BOSM Joint Coordinator"
          li="https://www.linkedin.com/in/saksham-sandhu-256255228/"
          email="mailto:f20212643@pilani.bits-pilani.ac.in"
        />
      </div>
    </div>
  );
}

export default Team;
