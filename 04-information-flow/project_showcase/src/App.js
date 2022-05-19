import React, {useState} from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";


const App = () => {
 const [projects, setProjects] = useState([])
 const [isDarkMode, setIsDarkMode] = useState(true);
// Count was added as an extra example.
// It has no practical functionality for the application
// Count was passed to ProjectList through props where it was rendered
//  const [count, setCount] = useState(0)


 const handleClick = () => {
  //http://localhost:4000/projects
  fetch('http://localhost:4000/projects')
  .then(res => res.json())
  .then(projects => setProjects(projects))
 }

 const onToggleDarkMode = () => setIsDarkMode(!isDarkMode)

// Handle count was added as an extra example.
// It has no practical functionality for the application
// It is passed down to header through props
//  const handleCount = (num) => {
//    if(num === "") num = 0
//    setCount(count+parseInt(num))
//  }


  return (
    <div className={isDarkMode? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList  projects={projects} />
    </div>
  );
};

export default App;
