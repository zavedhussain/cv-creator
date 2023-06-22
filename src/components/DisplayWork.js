const DisplayWork = ({ personal, experience, education }) => {
  console.log(personal.description);
  return (
    <div className="display-work">
      <section className="description">
        <h4>Description</h4>
        <p>{personal.description}</p>
      </section>
      <section className="experience">
        <h4>Experience</h4>
        <ul className="exp-container">
          {[...experience].reverse().map((item) => {
            const { id, position, company, address, from, to } = item;
            return (
              <li key={id}>
                <div>{from + " - " + to}</div>
                <div>
                  <h6>{position}</h6>
                  <p>{company + ", " + address}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="education">
        <h4>Education</h4>
        <ul className="edu-container">
          {[...education].reverse().map((item) => {
            const { id, university, degree, subject, city, from, to } = item;
            return (
              <li key={id}>
                <div>{from + " - " + to}</div>
                <div>
                  <h6>{university + ", " + city}</h6>
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
