import projectList from '@/app/_lib/data/project-list';
import ProjectCard from '../_components/ProjectCard';

const Portfolio = () => {
  return (
    <>
      <h1 className="text-6xl text-balance text-center mt-4" id="top">
        Brian Galyen&apos;s Projects
      </h1>
      <div className="ms-36 me-36 mt-4">
        <hr></hr>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-rows-auto mt-3">
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default Portfolio;
