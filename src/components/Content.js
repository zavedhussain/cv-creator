import Display from "./Display";
import Form from "./Form";
import "../styles/Content.css";
import { useState } from "react";
import { data } from "../data";
const Content = () => {
  const [resume, setResume] = useState(data);
  console.log(resume);
  return (
    <main>
      <Form resume={resume} setResume={setResume} />
      <Display resume={resume} />
    </main>
  );
};
export default Content;
