'use client';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const ResumeLinkBtn = () => {
  return (
    <>
      <Button
        as={Link}
        href="https://drive.google.com/file/d/1Zs41BY8Y2oLdtGPe-fhB-p7rO0YPnEkE/view?usp=sharing"
        color="success"
        target="_blank"
        variant="ghost"
      >
        Resume Link
      </Button>
    </>
  );
};

export default ResumeLinkBtn;
