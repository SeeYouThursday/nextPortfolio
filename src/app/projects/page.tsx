import projectList from '@/app/_lib/data/project-list';
import ProjectCard from '../_components/ProjectCard';

const Portfolio = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      {projectList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Portfolio;
