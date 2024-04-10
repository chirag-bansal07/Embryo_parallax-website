import React, { useState, useEffect, useRef } from "react";
import "./Apogee.css";
import RR from "./Apogee/RR.png";
import GE from "./Apogee/ge.png";
import SE from "./Apogee/SE.png";
import XA from "./Apogee/xanadu.png";
import ZU from "./Apogee/zulip.png";

const Apogee = () => {
  return (
    <div className="apogee">
      <div className={`apogee-content`}>
        <p className="apogee-para">
          APOGEE, the ISO 9001:2008 certified technical fest of BITS, Pilani is
          a large scale event that has attracted connoisseurs of engineering and
          technology over the years. It represents the zenith of science and
          engineering in a landscape of future visionaries and scientists.
        </p>
        <h2>APOGEE Innovation Challenge</h2>
        <div class="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-150 h-64 bg-neutral-800 rounded-xl marginTop-2">
          <div class="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
          <div class="bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
          <div class="bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
          <div class="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
          <div class="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
          <div class="bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
          <div class="bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
          <div class="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col flex justify-center">
            <span class="text-neutral-50 font-bold text-xl italic">
              What is AIC
            </span>
            <p class="text-neutral-300">
              <li>Problem Statement Released By Companies</li>
              <li>Students Form Teams Of 1 To 3 Members</li>
              <li>
                Teams Select Problem Statements And Start Working On It. They
                Have To Submit The Solution Before The Specified Deadline
              </li>
              <li>Judges From Companies Select Top 5 Teams</li>
              <li>
                Winners Are Usually Rewarded In Terms Of Cash Prizes,
                Internships Or Goodies
              </li>
            </p>
          </div>
        </div>

        <h2>Why participate?</h2>
        <div class="cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 relative w-150 h-64 bg-neutral-800 rounded-xl">
          <div class="bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
          <div class="bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
          <div class="bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
          <div class="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
          <div class="bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
          <div class="bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
          <div class="bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-full transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
          <div class="w-full h-full shadow-xl shadow-neutral-900 p-3 bg-neutral-600 opacity-50 rounded-xl flex-col gap- flex justify-center padding-2rem">
            <p class="text-neutral-300">
              <li>
                <span className="apogee-benefits-item">
                  By Associating With Apogee Innovation Challenge, The Company
                  Becomes An Event Partner Of Apogee And Would Be Publicised On
                  The Apogee Website And Facebook Page.
                </span>
              </li>
              <li>
                <span className="apogee-benefits-item">
                  The Company Can Use The Ingenuity Of Some Of The Brightest
                  Young Minds Of The Country To Get A Pool Of Innovative
                  Approaches For Solving A Particular Problem
                </span>
              </li>
              <li>
                <span className="apogee-benefits-item">
                  Being One Of The Major Events Of Apogee And A Unique Concept,
                  This Event Would Get Wide Media Coverages From Leading Media
                  Sources In India.
                </span>
              </li>
            </p>
          </div>
        </div>
        <h2>Previous Partners</h2>
        <p className="partner-para">
          These companies have associated with APOGEE as Industrial Partner in
          the past:
        </p>
      </div>
      <div className="apogee-partners">
        <img className="partner-img white" src={RR} alt="Partner 1" />
        <img className="partner-img" src={GE} alt="Partner 2" />
        <img className="partner-img" src={SE} alt="Partner 3" />
        <img className="partner-img white" src={XA} alt="Partner 4" />
        <img className="partner-img" src={ZU} alt="Partner 5" />
      </div>
    </div>
  );
};

export default Apogee;
