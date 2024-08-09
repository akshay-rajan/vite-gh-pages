import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectContent from './ProjectContent';

const ProjectCard = ({ project, index }) => {
  return (index % 2 === 1 || window.innerWidth < 798) ? (
    <div className="project-cards">
      <div className="project-card left">
        <ProjectImage project={project} />
      </div>

      <div className="project-card right">
        <ProjectContent project={project} />
      </div>
    </div>
  ) : (
    <div className="project-cards">
      <div className="project-card left">
        <ProjectContent project={project} />
      </div>

      <div className="project-card right">
        <ProjectImage project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
