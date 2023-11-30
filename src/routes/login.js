import axios from "axios";
import { loginSuccessAction } from "./../redux/action";

export async function goLogin(id, password, dispatch) {
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
          console.log(res);
        } else {
          console.log("로그인실패");
        }
      });
  } catch (err) {
    console.log(err);
  }
}
