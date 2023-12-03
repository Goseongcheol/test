import { logoutSuccessAction } from "../redux/action";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

const Navi = (props) => {
  const dispatch = useDispatch();
  // console.log(props);
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/map">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/map/map">
          map
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          onClick={() => {
            dispatch(logoutSuccessAction());
          }}
          href={"/login"}
        >
          logout
        </a>
      </li>
      <label className="userName ml-5">
        안녕하세요. {props.userInfo?.name} 님
      </label>
      <label className="userName ml-5">
        {" "}
        권한 - {props.userInfo?.accountTypeName}
      </label>
      <label className="userName ml-5">
        {dayjs().format("YYYY년MM월DD일")}
      </label>
    </ul>
  );
};

export default Navi;
