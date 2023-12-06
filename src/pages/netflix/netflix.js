import React, { useState } from "react";
import "./css/netflix.css";
import NetflixLogo from "./images/logo.png";
import tab1Image from "./images/tab-content-1.png";
import tab21Image from "./images/tab-content-2-1.png";
import tab22Image from "./images/tab-content-2-2.png";
import tab23Image from "./images/tab-content-2-3.png";
import { FaDoorOpen } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { FaTags } from "react-icons/fa";

const Netflix = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setSelectedTab(tabNumber);
  };

  return (
    <div className={"netflixContainer"}>
      <header>
        <div className={"row "}>
          <div className={"col"}>
            <span className={"menu float-left"}> </span>
          </div>
          <div className={"col text-center"}>
            <img
              alt="Logo"
              src={NetflixLogo}
              className="netflix-name mt-4"
              width={"250px"}
            />
          </div>
          <div className={"col"}>
            <button type="button" className="sign-in  btn-danger mt-4 mr-4 ">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <div className={"firstCom"}>
        <div className={"empty"}></div>
        <div className={"test"}>
          <span className={"message1"}>See what's next</span>
        </div>
        <div>
          <span className={"message2"}>WATCH ANYWHERE. CANCEL ANYTIME </span>
        </div>
        <div>
          <button type="button" className="pay">
            WATCH FREE FOR 30 DAYS
          </button>
        </div>
      </div>

      <div className={"tabCol"}>
        <div className={"tabContainer"}>
          <div
            className={`menu1 ${selectedTab === 1 ? "selected" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            <FaDoorOpen className={"mt-2"} size={"80px"} />
            <p>Cancel Anytime</p>
          </div>
          <div
            className={`menu2 ${selectedTab === 2 ? "selected" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            <HiMiniDevicePhoneMobile className={"mt-2"} size={"80px"} />
            <p>Watch Anywhere</p>
          </div>
          <div
            className={`menu3 ${selectedTab === 3 ? "selected" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            <FaTags className={"mt-2"} size={"80px"} />
            <p>Pick your price</p>
          </div>
        </div>

        <div className={"liner"}></div>
        {/* tab1 content*/}
        {selectedTab === 1 && (
          <div className={"tab1 text-center"}>
            <div className={"tab1-1"}>
              <div className={"pt-5"}>
                <p className={"mt-5"}>
                  If you decide Netflix isn't for you - no problem.
                </p>
                <p>No commitment. Cancel online anytime.</p>
                <div className={"tab1-2 mt-5"}>
                  <button type="button" className="pay2">
                    WATCH FREE FOR 30 DAYS
                  </button>
                </div>
              </div>
            </div>
            <div className={""}>
              <img
                alt="tab1Image"
                src={tab1Image}
                className="netflix-name mt-4"
                width={"400px"}
              />
            </div>
          </div>
        )}
        {/* tab2*/}
        {selectedTab === 2 && (
          <div className={"tab2 text-center"}>
            <div className={"tab2-1"}>
              <div className={"tab2-1-1"}>
                <p className={"mt-3"}>Watch TV shows and movies anytime,</p>
                <p>anywhere - personalized for you.</p>
              </div>
              <div className={"tab2-1-2 "}>
                <button type="button" className="pay2 mt-5">
                  WATCH FREE FOR 30 DAYS
                </button>
              </div>
            </div>
            <div className={" tab2-2"}>
              <div className={" tab2-2-1"}>
                <img
                  alt="tab21Image"
                  src={tab21Image}
                  className="netflix-name mt-4"
                  width={"332px"}
                />
                <div>
                  <p>Watch on your TV</p>
                </div>
                <div>
                  <h4>
                    Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
                    players and more.
                  </h4>
                </div>
              </div>
              <div className={"tab2-2-1"}>
                <img
                  alt="tab22Image"
                  src={tab22Image}
                  className="netflix-name mt-4"
                  width={"351px"}
                />
                <div>
                  <p>Watch instantly or download for later</p>
                </div>
                <div>
                  <h4>Available on phone and tablet, wherever you go.</h4>
                </div>
              </div>
              <div className={"tab2-2-1"}>
                <img
                  alt="tab23Image"
                  src={tab23Image}
                  className="netflix-name mt-4"
                  width={"366px"}
                />
                <div>
                  <p>Use any computer</p>
                </div>
                <div>
                  <h4>Watch right on Netflix.com </h4>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*tab3*/}
        {selectedTab === 3 && (
          <div className={"tab3 text-center"}>
            <div className={"tab3-1"}>
              <div className={"tab3-1-1"}>
                <p className={"mt-5"}>
                  Choose one plan and watch everything on Netflix
                </p>
                <button type="button" className="pay2 ">
                  WATCH FREE FOR 30 DAYS
                </button>
              </div>
              <table className="tab3-table">
                <thead>
                  <tr className={"first"}>
                    <th></th>
                    <th>BASIC</th>
                    <th>STANDARD</th>
                    <th>PREMIUM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={"line1"}>
                    <td>Monthly price after free month ends on 22/07/21</td>
                    <td>$8.99</td>
                    <td>$12.99</td>
                    <td>$15.99</td>
                  </tr>
                  <tr className={"line2"}>
                    <td>HD Available</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className={"line3"}>
                    <td>Ultra HD Available</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className={"line4"}>
                    <td>Screen you can watch on at the same time</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className={"line5"}>
                    <td>Watch on your laptop, TV, phone and tablet</td>
                    <td>1</td>
                    <td>2</td>
                    <td>4</td>
                  </tr>
                  <tr className={"line6"}>
                    <td>Unlimited movies and TV shows</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className={"line7"}>
                    <td>Cancel anytime</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr className={"line8"}>
                    <td>First month free</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <div>
        <footer className={"footer"}>
          <p className={"question"}>Question? Call 010-8945-0781</p>
          <div className={"footer-rows"}>
            <ul>
              <li>
                <a href={"#"}> FAQ</a>
              </li>
              <li>
                <a href={"#"}>Investor Relations</a>
              </li>
              <li>
                <a href={"#"}>Ways to Watch</a>
              </li>
              <li>
                <a href={"#"}>Corporate Information</a>
              </li>
              <li>
                <a href={"#"}>Netflix Originals</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href={"#"}> Help Center</a>
              </li>
              <li>
                <a href={"#"}>Jobs</a>
              </li>
              <li>
                <a href={"#"}>Terms Of Use</a>
              </li>
              <li>
                <a href={"#"}>Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href={"#"}> Account</a>
              </li>
              <li>
                <a href={"#"}>Redeem Gift Cards</a>
              </li>
              <li>
                <a href={"#"}>Privacy</a>
              </li>
              <li>
                <a href={"#"}>Speed Test</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href={"#"}>Media Center</a>
              </li>
              <li>
                <a href={"#"}>Buy Gift Cards</a>
              </li>
              <li>
                <a href={"#"}>Cookie Preferences</a>
              </li>
              <li>
                <a href={"#"}>Legal Notices</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Netflix;
