const DisplayHeader = ({ firstName, lastName, title }) => {
  return (
    <div className="display-header">
      <h2>{firstName + " " + lastName}</h2>
      <p>{title}</p>
    </div>
  );
};
export default DisplayHeader;
