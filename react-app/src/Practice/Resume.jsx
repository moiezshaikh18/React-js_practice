import React from "react";

const Resume = ({ resume }) => {
  return (
    <>
      <div>
        <h1>{resume.name}'s Profile</h1>

        <section>
          <h2>Skills</h2>
          <ul>
            {resume.skills.programmingLanguages.map((language, index) => (
              <li key={index}> {language}</li>
            ))}
            <h3>Frameworks</h3>
            {resume.skills.frameworks.map((framework, index) => (
              <li key={index}>{framework}</li>
            ))}
            <h3>Data Analysis</h3>
            {resume.skills.dataAnalysis.map((analysisTool, index) => (
              <li key={index}>{analysisTool}</li>
            ))}
            <h3>Databases</h3>
            {resume.skills.databases.map((database, index) => (
              <li key={index}>{database}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          <p>
            {resume.education.degree} in {resume.education.university},
            Graduated {resume.education.graduationYear}
          </p>
        </section>

        <section>
          <h2>Experience</h2>

          {resume.experience.map((job, index) => (
            <div key={index}>
              <h3>{job.position}</h3>
              <p>{job.duration}</p>
              {job.responsibilities && (
                <ul>
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              )}

              {job.projects && (
                <ul>
                  {job.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </div>
      );
    </>
  );
};

export default Resume;
