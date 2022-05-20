import React, { useState } from "react";

// making this a controlled component
// 1: initialize state 1st: we can create state individually, 2nd: we can create a state object
// 2: Attach onChange to our input fields
// 3. create the handleOnChange function
// 4. add value attribute to form fields that reflects state

// what needs to happen when our user is done filling the form?

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    phase: "",
    link: "",
    image: "",
  });

  const handleOnChange = (e) => {
    // what is the goal of this function
    // const name = e.target.name
    // const value = e.target.value

    // this is object destructuring
    const { name, value } = e.target;

    //   {name: "phase",
    //   value: "phase 1"
    // }
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2 things to be done

    // 1. need to update the server
    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      // 2. need to update client aka state
      .then((project) => {
        // what happens now?
        onAddProject(project);
        setFormData({
          name: "",
          about: "",
          phase: "",
          link: "",
          image: "",
        });
      });
  };

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleOnChange}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <textarea
          id="about"
          name="about"
          onChange={handleOnChange}
          value={formData.about}
        />

        <label htmlFor="phase">Phase</label>
        <select
          name="phase"
          id="phase"
          onChange={handleOnChange}
          value={formData.phase}
        >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={handleOnChange}
          value={formData.link}
        />

        <label htmlFor="image">Screenshot</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={handleOnChange}
          value={formData.image}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
