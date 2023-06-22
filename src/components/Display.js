import DisplayHeader from "./DisplayHeader";
import DisplayPersonal from "./DisplayPersonal";
import DisplayWork from "./DisplayWork";

const Display = ({ resume }) => {
  const { personal } = resume;
  return (
    <div className="display">
      <DisplayHeader {...personal} />
      <DisplayWork {...resume} />
      <DisplayPersonal {...personal} />
    </div>
  );
};
export default Display;
