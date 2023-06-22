const Personal = ({ resume, setResume }) => {
  const { personal } = resume;
  const { firstName, lastName, title, address, phone, description, email } =
    resume.personal;
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
        <form>
          <input type="file" id="myFile" name="filename" />
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
export default Personal;
