import { useState } from "react";
import useInput from "./../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();

  const state = useState();
  return (
    <div>
      <input value={input} onChange={onChange} />
    </div>
  );
};

export default HookExam;
