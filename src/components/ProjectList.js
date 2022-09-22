import userEvent from "@testing-library/user-event";
import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {

  const ProjectsItem = projects.map((projects) => {
    return <ProjectItem key={projects.id} name = {projects.name} about={projects.about}
    technologies={projects.technologies}/> 
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
       {ProjectsItem}
       </div>
    </div>
  );
}

export default ProjectList;
