import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

const Form = ({ resume, setResume }) => {
  //   const { personal, education, experience } = resume;
  return (
    <div className="cv-form">
      <Personal resume={resume} setResume={setResume} />
      <Experience resume={resume} setResume={setResume} />
      <Education resume={resume} setResume={setResume} />
    </div>
  );
};
export default Form;
