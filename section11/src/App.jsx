import "./App.css";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
// import Exam from "./components/Exam.jsx";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "점심 먹기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "운동하기",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo,
      );
    }
    case "DELETE": {
      return state.filter((todo) => todo.id !== action.data);
    }
    default:
      return state;
  }
}

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // const onDelete = (targetId) => {
  //   // 인수: todos 배열, targetId 일치하는 id 갖는 요소만 삭제한 new 배열
  //   dispatch({
  //     type: "DELETE",
  //     data: targetId,
  //   });
  // };

  const onDelete = useCallback((targetId) => {
    // 인수: todos 배열, targetId 일치하는 id 갖는 요소만 삭제한 new 배열
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  }, []);

  return (
    <>
      <div className="App">
        {/* <Exam /> */}
        <Header />

        <TodoStateContext.Provider value={todos}>
          {/* 바로 dispatch 함수를 전달해 하위 컴포넌트에서 구조 분해를 쉽게 */}
          <TodoDispatchContext.Provider value={memoizedDispatch}>
            <Editor />
            <List />
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
      </div>
    </>
  );
}

export default App;
