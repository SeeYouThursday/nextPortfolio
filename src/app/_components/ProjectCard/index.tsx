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
//
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
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      <Card className="flex flex-col flex-wrap justify-center items-center m-3 sm:m-20 xs:m-50 md:max-w-[300px]">
        <CardHeader className="flex justify-center text-balance font-bold h-16 flex-grow sm:text-center">
          <div>{project.title}</div>
        </CardHeader>
        <Image
          src={project.src}
          height={150}
          width={200}
          alt={`${project.title} image`}
          className="rounded-sm border-4 border-violet-400 flex-grow"
        />
        <CardBody className="text-xs overflow-visible flex-grow text-center">
          {project.shortDescrip}
        </CardBody>
        <CardFooter className="flex justify-center flex-grow">
          <ButtonGroup>
            {' '}
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
              // variant="light"
              // radius="full"
            >
              Repo
            </Button>
            <ComingSoon>
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
                  src={project.icon}
                  width={5}
                  height={5}
                  alt={project.title}
                />
              }
              size="sm"
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
