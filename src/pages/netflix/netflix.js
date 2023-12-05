import React from "react";
import "./css/netflix.css";
import NetflixLogo from "./images/logo.png";
import tab1Image from "./images/tab-content-1.png";

const Netflix = () => {
  return (
    <div className={"netflixContainer"}>
      <header className>
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

      <div className={" firstCom"}>
        <div className={" empty"}></div>
        <div className={" test"}>
          <span className={" message1"}>See what's next</span>
        </div>
        <div>
          <span className={"message2 "}>WATCH ANYWHERE. CANCEL ANYTIME </span>
        </div>
        <div>
          <button type="button" className="pay">
            WATCH FREE FOR 30 DAYS >
          </button>
        </div>
      </div>

      <div className={"tabCol"}>
        <div className={"tabContainer"}>
          <div className={"menu1"}>
            <p>Cancel Anytime</p>
          </div>
          <div className={"menu2"}>
            <p>Watch Anywhere</p>
          </div>
          <div className={"menu3 "}>
            <p>Pick your price</p>
          </div>
        </div>

        <div className={"liner"}></div>
        {/* tab1 content*/}
        <div className={"tab1 text-center"}>
          <div className={"tab1-1"}>
            <div className={"pt-5"}>
              <p className={"mt-5"}>
                If you decide Netflix ins't for you - no problem.
              </p>
              <p>No commitment. Cancel online anytime.</p>
              <div className={"tab1-2 mt-5"}>
                <button type="button" className="pay2">
                  WATCH FREE FOR 30 DAYS >
                </button>
              </div>
            </div>
          </div>
          {/*/!* tab2 content*!/*/}
          {/*<div className={"tab1 text-center"}>*/}
          {/*  <div className={"tab1-1"}>*/}
          {/*    <div className={"pt-5"}>*/}
          {/*      <p className={"mt-5"}>*/}
          {/*        If you decide Netflix ins't for you - no problem.*/}
          {/*      </p>*/}
          {/*      <p>No commitment. Cancel online anytime.</p>*/}
          {/*      <div className={"tab1-2 mt-5"}>*/}
          {/*        <button type="button" className="pay2">*/}
          {/*          WATCH FREE FOR 30 DAYS >*/}
          {/*        </button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  /!* tab3 content*!/*/}
          {/*  <div className={"tab1 text-center"}>*/}
          {/*    <div className={"tab1-1"}>*/}
          {/*      <div className={"pt-5"}>*/}
          {/*        <p className={"mt-5"}>*/}
          {/*          If you decide Netflix ins't for you - no problem.*/}
          {/*        </p>*/}
          {/*        <p>No commitment. Cancel online anytime.</p>*/}
          {/*        <div className={"tab1-2 mt-5"}>*/}
          {/*          <button type="button" className="pay2">*/}
          {/*            WATCH FREE FOR 30 DAYS >*/}
          {/*          </button>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </div>*/}

          <div className={""}>
            <img
              alt="tab1Image"
              src={tab1Image}
              className="netflix-name mt-4"
              width={"400px"}
            />
          </div>
        </div>
      </div>

      <div>
        <footer className={" footer"}>
          <p className={"question"}>Question? Call 010-8945-0781</p>
          <div className={" footer-rows"}>
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
