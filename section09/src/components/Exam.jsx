import { useReducer, useState } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
  //   switch (action.type) {
  //     case "INCREASE":
  //       return {
  //         count: state.count + action.data,
  //         result: `+${action.data}만큼 증가`,
  //       };
  //     case "DECREASE":
  //       return {
  //         count: state.count - action.data,
  //         result: `-${action.data}만큼 감소`,
  //       };
  //     default:
  //       return state;
  //   }
}

const Exam = () => {
  const [result, setResult] = useState("");
  // dispatch : 발송하다, 급송하다
  // 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, { count: 0, result: "" });

  const onClickPlus = () => {
    //인수: 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <h1>{state.result}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
