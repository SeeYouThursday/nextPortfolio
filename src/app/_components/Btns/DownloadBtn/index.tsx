'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function DownloadBtn() {
  return (
    <>
      <Button
        as={Link}
        download={'GalyenResume2024.pdf'}
        href="/GalyenResume2024.pdf"
        target="_blank"
        color="primary"
        className="text-md ms-4"
        variant="ghost"
      >
        Download Resume
      </Button>
    </>
  );
}
