import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {


  const projectListItems = projects.map((project) => <ProjectListItem {...project} key={project.id}/>);

  // For every project inside of projects array, I need to render projectlistitem. How?
  return <div>{projectListItems}</div>;
}

export default ProjectList;
