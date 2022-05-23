import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  }, []); // [projects]

  useEffect(() => {
    // setCount(count + 1)
    console.log("this is the side effect");
    let time = setTimeout(() => setCount(count + 1), 10000)

    return () => {
      console.log('clean up phase')
      // setCount(0)
      // clearTimeout(time)
    }  }, [count]);

  console.log("component rendering");

  // const handleClick = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // };

  const handleCount = () => {
    setCount((count) => count + 1);
  };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm />
      {/* <button onClick={handleClick}>Load Projects</button> */}
      <button onClick={handleCount}>{count}</button>
      { projects ? <ProjectList projects={projects}/> : "Loading..."}
      
    </div>
  );
};

export default App;
