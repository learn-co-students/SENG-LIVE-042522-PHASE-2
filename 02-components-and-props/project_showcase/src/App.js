import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import projects from './projects'

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectForm projects={projects} name="aysan"/>
      <ProjectList projects={projects}/>
    </div>
  );
}

export default App;


// projects= : we are creating a key inside of the props object called projects
// when we pass props down into a component, it gets returned as an object with key value pairs


// props are passed upon rendering a component
// nameofprop=propvalue 