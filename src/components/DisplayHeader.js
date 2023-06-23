const DisplayHeader = ({ firstName, lastName, title }) => {
  return (
    <div className="display-header">
      <h1>{firstName + " " + lastName}</h1>
      <p>{title}</p>
    </div>
  );
};
export default DisplayHeader;
