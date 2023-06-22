const Education = ({ resume, setResume }) => {
  const { education } = resume;
  // console.log(experience);

  const handleChange = (event, itemID) => {
    const newEducation = education.map((item) => {
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
      education: newEducation,
    });
  };

  const handleDelete = (itemID) => {
    const newEducation = education.filter((item) => item.id !== itemID);
    setResume({
      ...resume,
      education: newEducation,
    });
  };

  return (
    <div className="education">
      <h3>Education</h3>
      {[...education].reverse().map((item) => {
        const { id, university, degree, city, subject, from, to } = item;
        return (
          <section key={id} className="info">
            <input
              type="text"
              value={university}
              placeholder="University"
              id="university"
              onChange={(event) => handleChange(event, id)}
            ></input>

            <input
              type="text"
              value={degree}
              placeholder="Degree"
              id="degree"
              onChange={(event) => handleChange(event, id)}
            ></input>

            <input
              type="text"
              value={city}
              placeholder="City"
              id="city"
              onChange={(event) => handleChange(event, id)}
            ></input>

            <input
              type="text"
              value={subject}
              placeholder="Subject"
              id="subject"
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
export default Education;
