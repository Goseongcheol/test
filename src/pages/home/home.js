import Navi from "./../../components/navi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAction, increaseAction } from "../../redux/action";
import count from "../../redux/reducers/count";

const Home = () => {
  const dispatch = useDispatch();
  const countInfo = useSelector((state) => state.test.count);

  const increaseHandler = () => {
    if (countInfo > 5) {
      return alert("대물");
    } else {
      dispatch(increaseAction(countInfo + 1));
    }
  };

  const decreaseHandler = () => {
    if (countInfo <= 0) {
      return alert("소물");
    } else {
      dispatch(decreaseAction(countInfo - 1));
    }
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      <Navi />
      <div className=" border mt-5 pt-5 " style={{ height: 500 }}>
        <div className="row mt-2 h-200px">
          <button
            onClick={() => increaseHandler()}
            type="button"
            className="btn btn-primary  ml-5 mr-5"
          >
            증가
          </button>
          <div className="2">
            <button
              onClick={() => decreaseHandler()}
              type="button"
              className="btn btn-success  ml-5"
            >
              감소
            </button>
          </div>
        </div>
        <span className="count ml-5"> 카운트: {countInfo} </span>
      </div>
    </div>
  );
};

export default Home;

// const  Home=()=> {

//   return (
//     <div className='container' style={{height:"100vh"}}>
//      <Navi/>
//        <div class=' border mt-5 pt-5 ' style={{height:500}}>
//          <div class="row mt-2 h-200px">
//           <button onClick={() => store.dispatch(type:'INCREASE_NUMBER', payload:1) } type="button" class="btn btn-primary  ml-5 mr-5" >증가</button>
//             <div class="2">
//               <button onClick={() => store.dispatch(decreaseAction())} type="button" class="btn btn-success  ml-5" >감소</button>
//             </div>
//         </div>
//         <span class ='count ml-5'> 카운트: {store.countdata} </span>
//        </div>
//     </div>
//   );
// }

// export default Home;
