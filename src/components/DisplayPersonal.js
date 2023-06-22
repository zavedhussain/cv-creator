const DisplayPersonal = ({ firstName, address, phone, email }) => {
  // console.log(firstName);
  return (
    <div className="display-personal">
      <div className="img-container">
        <img src="" alt={firstName} />
      </div>
      <div>
        <h4>Personal Details</h4>
        <ul>
          <li>
            <h6>Address</h6>
            <p>{address}</p>
          </li>
          <li>
            <h6>Phone Number</h6>
            <p>{phone}</p>
          </li>
          <li>
            <h6>Email</h6>
            <p>{email}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DisplayPersonal;
