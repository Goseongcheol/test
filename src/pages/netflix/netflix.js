import React from "react";
import "./css/netflix.css";

const Netflix = () => {
  return (
    <div className={"netflixContainer"}>
      <header className>
        <div className={"row "}>
          <div className={"col"}>
            <span className={"menu float-left"}> 메뉴</span>
          </div>
          <div className={"col"}>
            <h1 className={"netflix-name "}> NETFLIX</h1>
          </div>
          <div className={"col"}>
            <button type="button" className="sign-in  btn-danger mt-4 mr-4 ">
              Sign in
            </button>
          </div>
        </div>
      </header>

      <div className={"border firstCom"}>
        <div className={"border empty"}></div>
        <div className={"border test"}>
          <span className={"border message1"}>See what's next</span>
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
      <div className={"border"}>
        <button></button>
      </div>

      <div>
        <footer className={"border"}>
          <span> 123</span>
        </footer>
      </div>
    </div>
  );
};

export default Netflix;
