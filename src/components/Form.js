import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

import { sample } from "../data";

const Form = ({ resume, setResume, defaultState, handleDownload }) => {
  return (
    <div className="cv-form">
      <Personal resume={resume} setResume={setResume} />
      <Experience resume={resume} setResume={setResume} />
      <Education resume={resume} setResume={setResume} />
      <div className="button-container">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setResume({ ...resume, ...sample })}
        >
          Load Example
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDownload}
        >
          Download pdf
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setResume({ ...resume, ...defaultState })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Form;
