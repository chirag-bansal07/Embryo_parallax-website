import React from "react";
import linked from "../img/linkedin.svg";
import "./teancard.css";
function Teamcard({ imgsrc, post, name, li, email, stu }) {
  return (
    <div>
      <div className={`cardteam ${stu ? "small" : ""}`}>
        <button className="mail">
          <a href={email}>
            <svg
              className="lucide lucide-mail"
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect rx="2" y="4" x="2" height="16" width="20"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </button>
        <div className={`profile-pic ${stu ? "smallpic" : ""} `}>
          <img className={`${stu ? "studentimg" : ""}`} src={imgsrc} alt="" />
        </div>
        <div className="bottom">
          <div className={`content ${stu ? "smallcontent" : ""}`}>
            <span className={`name ${stu ? "stuname" : ""}`}>{post}</span>
            <span className={`about-me ${stu ? "stuabout" : ""}`}>{name}</span>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container">
              <a href={li}>
                <img src={linked}></img>
              </a>
            </div>
            <button className="button">Contact linkes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamcard;
