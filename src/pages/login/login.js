import React, { useEffect, useState } from "react";
import login from "./../../routes/login";
import { useDispatch, useSelector } from "react-redux";
import { goLogin } from "../../routes/login";
import { useNavigate } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const user = useSelector((state) => state.login.userInfo.name);
  const user = useSelector(
    (state) => state.login.userInfo && state.login.userInfo.name,
  );

  useEffect(() => {
    console.log(user);
  }, [user]);

  const login = () => {
    if (!id) {
      alert("아이디를 입력해주세요");
    } else if (!password) {
      alert("비밀번호를 입력해주세요");
    } else {
      goLogin(id, password, dispatch);
      console.log(user);
      alert(`${user}님 환영합니다`);
      navigate("/map", { replace: true });
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
