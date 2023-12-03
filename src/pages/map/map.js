import Kakao from "./../../components/Map";
import Navi from "./../../components/navi";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.login.userInfo);

  return (
    <div className="container" style={{ height: "100vh" }}>
      <Navi userInfo={user} />
      <div
        className=" border mt-5 pt-5 bg-Light text-black"
        style={{ height: 500 }}
      >
        <div className="row mt-2  ">
          <div className=" border ml-5 ">
            <Kakao />
          </div>
          <div className="col-sm mt-5">
            <h1>
              {user.id}-{user.name}
            </h1>
            <h2>{user.email}</h2>
            <h3>CREATE AT {user.createAt}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
