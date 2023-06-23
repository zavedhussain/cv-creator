// import img from "../assets/image1.jpg";

const DisplayPersonal = ({ firstName, address, phone, email, image }) => {
  // console.log(firstName);
  return (
    <div className="display-personal">
      <div className="img-container">
        <img src={image} alt={firstName} />
      </div>
      <section className="personal">
        <h3>Personal Details</h3>
        <ul>
          <li>
            <h4>Address</h4>
            <p>{address}</p>
          </li>
          <li>
            <h4>Phone Number</h4>
            <p>{phone}</p>
          </li>
          <li>
            <h4>Email</h4>
            <p>{email}</p>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default DisplayPersonal;
