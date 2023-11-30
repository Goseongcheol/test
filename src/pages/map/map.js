import Kakao from "./../../components/Map";
import Navi from "./../../components/navi";

const App = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <Navi />
      <div
        className=" border mt-5 pt-5 bg-danger text-black"
        style={{ height: 500 }}
      >
        <div className="row mt-2  ">
          <div className=" border ml-5 ">
            <Kakao />
          </div>
          <div className="col-sm mt-5">
            <h1>2023-11-28</h1>
            <h1>고성철</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
