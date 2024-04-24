import Skills from '../_components/SkillsCard';
import DownloadBtn from '../_components/Btns/DownloadBtn';
import ResumeLinkBtn from '../_components/Btns/ResumeLinkBtn';

const Resume = () => {
  const proficencies = [
    'Agile Development',
    'Full Stack Development',
    'React',
    'MERN',
    'MongoDB',
    'JavaScript',
    'CSS',
    'Node',
    'Nextjs',
    'GraphQL',
    'RESTful APIs',
  ];

  return (
    <div className="m-auto">
      <h3 className="text-4xl">Proficiencies:</h3>
      <Skills skills={proficencies} />
      <div className="flex justify-between mt-4">
        <DownloadBtn />
        {/* <ResumeLinkBtn /> */}
      </div>
    </div>
  );
};

export default Resume;
