import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilterData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilterData();

  // const getAnalyzedData = () => {
  //   console.log("getAnalyzed 호출!");
  //   const totalCount = todos.length;
  //   const doneCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - doneCount;
  //   return { totalCount, doneCount, notDoneCount };
  // };

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzed 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);
  //의존성배열 : deps
  // const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>total:{totalCount}</div>
        <div>done:{doneCount}</div>
        <div>not done:{notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper"></div>
      {filteredTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default List;
