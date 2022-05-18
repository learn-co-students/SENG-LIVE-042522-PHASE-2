import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
  const projectListItems = projects.map((project) => (
    <ProjectListItem {...project} key={project.id} />
  ));

  return <div>{projectListItems}</div>;
};

export default ProjectList;
