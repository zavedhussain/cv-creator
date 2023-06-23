const Personal = ({ resume, setResume }) => {
  const { personal } = resume;
  const { firstName, lastName, title, address, phone, description, email } =
    resume.personal;

  const handleFileChange = (event) => {
    const img = URL.createObjectURL(event.target.files[0]);
    setResume({
      ...resume,
      personal: { ...personal, image: img },
    });
  };
  const handleChange = (event) => {
    const elementId = event.target.id;
    const value = event.target.value;
    setResume({
      ...resume,
      personal: { ...personal, [elementId]: value },
    });
  };
  return (
    <div className="personal">
      <h3>Personal Information</h3>
      <section className="info">
        <div>
          <input
            type="text"
            value={firstName}
            placeholder="First name"
            id="firstName"
            onChange={(event) => handleChange(event)}
          ></input>

          <input
            type="text"
            value={lastName}
            placeholder="Last name"
            id="lastName"
            onChange={(event) => handleChange(event)}
          ></input>

          <input
            type="text"
            value={title}
            placeholder="Title"
            id="title"
            onChange={(event) => handleChange(event)}
          ></input>

          <input
            type="text"
            value={address}
            placeholder="Address"
            id="address"
            onChange={(event) => handleChange(event)}
          ></input>

          <input
            type="number"
            value={phone}
            placeholder="Phone Number"
            id="phone"
            onChange={(event) => handleChange(event)}
          ></input>

          <input
            type="email"
            value={email}
            placeholder="Email"
            id="email"
            onChange={(event) => handleChange(event)}
          ></input>

          <textarea
            rows="3"
            placeholder="Description"
            value={description}
            id="description"
            onChange={(event) => handleChange(event)}
          />
        </div>
        <form>
          <label htmlFor="myFile">Add Photo:</label>
          <input
            type="file"
            id="myFile"
            name="filename"
            className="btn btn=primary"
            onChange={handleFileChange}
          />
        </form>
      </section>
    </div>
  );
};
export default Personal;
