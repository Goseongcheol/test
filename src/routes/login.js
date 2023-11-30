import axios from "axios";
import { loginSuccessAction } from "./../redux/action";
import { useSelector } from "react-redux";

export async function goLogin(id, password) {
  try {
    console.log(`아이디:${id}, password:${password}`);
    await axios
      .post(`https://meterarium.com:5280/login`, {
        id: id,
        password: password,
      })
      .then(async (res) => {
        if (res.data.res !== null) {
          loginSuccessAction(res.data.res);

          console.log(res);
          alert();
        } else {
          console.log("로그인실패");
        }
      });
  } catch (err) {
    console.log(err);
  }
}
