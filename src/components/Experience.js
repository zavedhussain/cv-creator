import { blankExperience } from "../data";
const Experience = ({ resume, setResume }) => {
  const { experience } = resume;
  // console.log(blankExperience);

  const handleAdd = () => {
    let exp = {
      ...blankExperience,
      id: new Date().getTime().toString(),
    };
    setResume({
      ...resume,
      experience: [...experience, exp],
    });
  };

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
    <article className="experience">
      <div className="article-header">
        <h3>Experience</h3>
        <button type="button" className="btn btn-success" onClick={handleAdd}>
          Add
        </button>
      </div>
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
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </section>
        );
      })}
    </article>
  );
};
export default Experience;
