import Navi from "./../../components/navi";
import React, { useEffect, useState } from "react";
import store from "./../../redux/store";
// import { increaseAction, decreaseAction } from "./../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const countInfo = useSelector((state) => state.count);
  const [count, setCount] = useState(countInfo);
  useEffect(() => {
    console.log("리덕스 변경  ");
  }, [countInfo]);
  return (
    <div className="container" style={{ height: "100vh" }}>
      <Navi />
      <div class=" border mt-5 pt-5 " style={{ height: 500 }}>
        <div class="row mt-2 h-200px">
          <button
            onClick={() => {
              dispatch({
                type: "INCREASE_NUMBER",
                payload: count + 1,
              });
            }}
            type="button"
            class="btn btn-primary  ml-5 mr-5"
          >
            증가
          </button>
          <div class="2">
            <button
              // onClick={() => store.dispatch(decreaseAction())}
              type="button"
              class="btn btn-success  ml-5"
            >
              감소
            </button>
          </div>
        </div>
        <span class="count ml-5"> 카운트: {store.countdata} </span>
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
