import React, { useEffect, useState } from "react";
import login from "./../../routes/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSuccessAction, logoutSuccessAction } from "./../../redux/action";

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

  const goLogin = async (id, password, dispatch) => {
    try {
      console.log(`아이디:${id}, password:${password}`);
      await axios
        .post(`https://meterarium.com:5280/login`, {
          id: id,
          password: password,
        })
        .then(async (res) => {
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
      goLogin(id, password, dispatch);
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
