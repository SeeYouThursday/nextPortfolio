'use client';
import {
  Spacer,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Link,
} from '@nextui-org/react';
import ComingSoon from '../ComingSoon/';
import { CardDemo } from '@/app/_components/AceCard';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  shortTitle: string;
  github: string;
  src: string;
  href: string;
  description: string;
  shortDescrip: string;
  icon: string;
  underConstruction: boolean;
  stack?: string[];
  business?: boolean;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      <Card className="flex flex-col flex-wrap justify-center items-center m-3 xs:m-50 md:m-10">
        <CardHeader className="flex flex-col justify-center text-balance font-bold h-16 flex-grow sm:text-center">
          <h3 className="text-xl ">{project.title}</h3>
          {project.underConstruction ? (
            <h4 className="text-sm italic text-secondary">In Progress</h4>
          ) : (
            ''
          )}
        </CardHeader>
        <Image
          src={project.src}
          height={150}
          width={200}
          quality={100}
          alt={`${project.title} image`}
          className="rounded-sm border-4 border-violet-400 flex-grow"
        />
        <CardBody className="text-xs overflow-visible flex-grow text-center">
          {project.shortDescrip}
          {/* {project.stack && project.stack.length > 0 ? (
            <CardDemo stack={project.stack} />
          ) : null} */}
        </CardBody>
        <CardFooter className="flex justify-center flex-grow">
          <ButtonGroup>
            <Button
              as={Link}
              target="_blank"
              href={project.github}
              color="primary"
              endContent={
                <FontAwesomeIcon
                  icon={faGithub}
                  size="sm"
                  style={{ color: '#FFD43B' }}
                />
              }
              size="sm"
              className="max-w-24"
              // variant="light"
              // radius="full"
            >
              Repo
            </Button>
            {/* Stack Logic */}
            <ComingSoon stack={project.stack ?? []}>
              <Button
                color="secondary"
                size="sm"
                endContent={
                  <FontAwesomeIcon
                    icon={faLayerGroup}
                    size="sm"
                    style={{ color: '#FFD43B' }}
                  />
                }
                className="max-w-24"
              >
                Stack
              </Button>
            </ComingSoon>
            <Button
              as={Link}
              target="_blank"
              href={project.href}
              color="primary"
              endContent={
                <Image
                  src={
                    project.icon
                      ? project.icon
                      : '/favicon_io/favicon-16x16.png'
                  }
                  width={12}
                  height={12}
                  alt={project.title}
                  className="rounded-sm"
                  quality={100}
                />
              }
              size="sm"
              className="max-w-24"
            >
              {project.shortTitle}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      {/* <Spacer x={2}></Spacer> */}
    </>
  );
};

export default ProjectCard;
