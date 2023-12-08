import React, { useEffect, useState } from "react";
import login from "./../../routes/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSuccessAction, logoutSuccessAction } from "./../../redux/action";
import CryptoJS from "crypto-js";

const App = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const user = useSelector((state) => state.login.userInfo.name);

  // const user = useSelector((state) => state.login.userInfo);

  // useEffect(() => {
  //   dispatch(logoutSuccessAction());
  // }, []);

  const goLogin = async (id, password, dispatch, hashedPassword) => {
    try {
      console.log(
        `아이디:${id}, password:${password},hashedPassword:${hashedPassword}`,
      );
      await axios
        .post(`http://211.230.13.24:8080/logintest`, {
          id: id,
          password: password,
          name: hashedPassword,
        })
        .then(async (res) => {
          console.log(res);
          if (res.data.res !== null) {
            dispatch(loginSuccessAction(res.data.res)); // action dispatch
            const result = res.data.res.name;
            alert(
              `안녕하세요. 로그인을 성공하였습니다. ${result}님 환영합니다!`,
            );
            console.log(res.data.res);
            console.log("로그인 성공");
            navigate("/map");
          } else {
            console.log(res.data.res);
            alert("로그인 실패. 아이디와 비밀번호를 확인해주세요!");
            console.log("로그인 실패");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const login = () => {
    if (!id) {
      alert("아이디를 입력해주세요");
    } else if (!password) {
      alert("비밀번호를 입력해주세요");
    } else {
      const lastTwoDigits = id.slice(-2);

      // "yit"과 id의 끝 2자리를 결합하여 새로운 솔트 생성
      const userId = "yit" + lastTwoDigits;

      function generateSaltBasedOnUserId(userId) {
        // 사용자 아이디를 기반으로 SHA-256 해시를 생성하여 솔트로 사용
        console.log("동작중");
        console.log(CryptoJS.SHA256(userId).toString());
        return CryptoJS.SHA256(userId).toString();
      }

      function hashPassword(password, salt) {
        const hash = CryptoJS.SHA512(password + salt).toString();
        console.log("비밀번호테스트");
        console.log(hash);
        console.log("비밀번호테스트2");
        return hash;
      }
      // const userId = 'user123';
      const salt = generateSaltBasedOnUserId(userId);
      const hashedPassword = hashPassword(password, salt);
      goLogin(id, password, dispatch, hashedPassword);
    }
  };

  return (
    <div className="container" style={{ height: "100vh", padding: 50 }}>
      <div className="">
        <div className={"d-flex gap-3"}>
          <h1>아이디</h1>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className={"d-flex gap-3"}>
          <h1>비밀번호</h1>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => login()}> 로그인 </button>
        </div>
      </div>
    </div>
  );
};

export default App;
