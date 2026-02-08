import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";
import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  return (
    <>
      <Bulb />
      <Counter />
      <Register />
      <HookExam />
    </>
  );
}

export default App;
