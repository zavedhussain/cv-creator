const DisplayWork = ({ personal, experience, education }) => {
  return (
    <div className="display-work">
      <section className="description">
        <h3>Description</h3>
        <i>{personal.description}</i>
      </section>
      <section className="experience">
        <h3>Experience</h3>
        <ul className="exp-container">
          {[...experience].reverse().map((item) => {
            const { id, position, company, address, from, to } = item;
            return (
              <li key={id}>
                <p className="duration">{from + " - " + to}</p>
                <div>
                  <h4>{position}</h4>
                  <p>{company + ", " + address}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="education">
        <h3>Education</h3>
        <ul className="edu-container">
          {[...education].reverse().map((item) => {
            const { id, university, degree, subject, city, from, to } = item;
            return (
              <li key={id}>
                <p className="duration">{from + " - " + to}</p>
                <div>
                  <h4>{university + ", " + city}</h4>
                  <p>{"Degree: " + degree}</p>
                  <p>{"Subject: " + subject}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
export default DisplayWork;
