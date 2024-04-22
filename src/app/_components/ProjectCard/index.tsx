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
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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
      <Card className="flex flex-col justify-center items-center w-[250px] h-80 m-3">
        <CardHeader className="flex justify-center text-center text-balance font-bold h-16">
          <div>{project.title}</div>
        </CardHeader>
        <Image
          src={project.src}
          height={150}
          width={200}
          alt={`${project.title} image`}
          className="rounded-sm border-4 border-violet-400"
        />
        <CardBody className="text-sm overflow-visible">
          {project.shortDescrip}
        </CardBody>
        <CardFooter className="flex justify-center">
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
                  bounce
                />
              }
              size="sm"
            >
              Repo
            </Button>
            <Button color="secondary" size="sm">
              Stack
            </Button>
            <Button
              as={Link}
              target="_blank"
              href={project.href}
              color="primary"
              endContent={
                <Image
                  src={project.icon}
                  width={10}
                  height={10}
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
      <Spacer x={2}></Spacer>
    </>
  );
};

export default ProjectCard;
