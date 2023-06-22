const Experience = ({ resume, setResume }) => {
  const { experience } = resume;
  // console.log(experience);

  const handleChange = (event, itemID) => {
    const newExperience = experience.map((item) => {
      if (item.id === itemID) {
        const elementId = event.target.id;
        const value = event.target.value;
        return { ...item, [elementId]: value };
      } else {
        return item;
      }
    });
    setResume({
      ...resume,
      experience: newExperience,
    });
  };

  const handleDelete = (itemID) => {
    const newExperience = experience.filter((item) => item.id !== itemID);
    setResume({
      ...resume,
      experience: newExperience,
    });
  };
  return (
    <div className="experience">
      <h3>Experience</h3>
      {[...experience].reverse().map((item) => {
        const { id, position, company, address, from, to } = item;
        return (
          <section key={id} className="info">
            <input
              type="text"
              value={position}
              placeholder="Position"
              id="position"
              onChange={(event) => handleChange(event, id)}
            ></input>

            <input
              type="text"
              value={company}
              placeholder="Company"
              id="company"
              onChange={(event) => handleChange(event, id)}
            ></input>

            <input
              type="text"
              value={address}
              placeholder="Address"
              id="address"
              onChange={(event) => handleChange(event, id)}
            ></input>

            <input
              type="text"
              value={from}
              placeholder="From"
              id="from"
              onChange={(event) => handleChange(event, id)}
            ></input>
            <input
              type="text"
              value={to}
              placeholder="To"
              id="to"
              onChange={(event) => handleChange(event, id)}
            ></input>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </section>
        );
      })}
      <button type="button">Add</button>
    </div>
  );
};
export default Experience;
