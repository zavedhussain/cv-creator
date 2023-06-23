import Display from "./Display";
import Form from "./Form";
import "../styles/Content.css";
import { useState } from "react";
import { blankPersonal } from "../data";
import { blankExperience } from "../data";
import { blankEducation } from "../data";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const defaultState = {
  personal: blankPersonal,
  experience: [blankExperience],
  education: [blankEducation],
};

const Content = () => {
  const [resume, setResume] = useState(defaultState);

  //handle pdf Download
  const handleDownload = () => {
    //html2canvas converts DOM to svg
    html2canvas(document.querySelector("#display")).then((canvas) => {
      //convert svg to png using JS
      const imgData = canvas.toDataURL("image/png");
      //convert png to pdf
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 3, 0);
      pdf.save("download.pdf");
    });
  };

  return (
    <main>
      <Form
        resume={resume}
        setResume={setResume}
        defaultState={defaultState}
        handleDownload={handleDownload}
      />
      <Display resume={resume} />
    </main>
  );
};
export default Content;
