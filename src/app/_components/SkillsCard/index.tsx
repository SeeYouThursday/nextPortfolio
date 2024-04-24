'use client';

import { Card, CardBody, CardHeader, CardFooter } from '@nextui-org/react';

const SkillsCard = ({ skills }: { skills: string[] }) => {
  return (
    <>
      <Card>
        <CardBody>
          <ul>
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </>
  );
};

export default SkillsCard;
