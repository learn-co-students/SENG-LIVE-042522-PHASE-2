import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);


  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const onUpdateProject = (updatedProject) => {
    // what do i do with the updated project 

    // if the goal is to return a new array with the original project removed and the updated project put in its place, how can this be achieved?

    // .map vs .filter

    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProject.id){
        return updatedProject
      } else {
        return ogProject
      }
    })

    setProjects(updatedProjects)
  }

  const onDeleteProject = (projectId) => {

    // We need to remove the project with this id from the collection of projects and return a new array: .filter()

    // 1. filter out the project with this id 
    // 2. return a new array with that projct filtered out
    // 3. update our projects state with the new collection 


    const updatedProjects = projects.filter(ogProject => ogProject.id !== projectId)

    setProjects(updatedProjects)

  }

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onUpdateProject={onUpdateProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };


  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}
      />
    </div>
  );
};

export default App;
