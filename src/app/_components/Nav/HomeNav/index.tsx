'use client';
import {
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
  Avatar,
  Button,
} from '@nextui-org/react';
import ContactForm from '@/app/_components/ContactForm';
import { Suspense } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faAddressBook,
  faPaintBrush,
  faCube,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

const HomeBtns = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const btns = [
    {
      name: 'home',
      href: '/',
      icon: faHouse,
      ariaLabel: 'Home Page',
    },
    {
      name: 'Projects',
      href: '/projects',
      icon: faCube,
      ariaLabel: 'Projects Page',
    },
    {
      name: 'Resume',
      href: '/document-resume',
      icon: faFile,
      ariaLabel: 'Resume/Skills Page',
    },
  ];

  const contactBtn = {
    name: 'contact',
    href: '/contact',
    icon: faAddressBook,
    ariaLabel: 'Contact Me',
  };

  return (
    <div className="flex flex-col me-9 mt-11">
      {btns.map((btn) => {
        return (
          <Button
            key={btn.name}
            radius="full"
            isIconOnly={true}
            aria-label={btn.ariaLabel}
            variant="ghost"
            as={Link}
            href={btn.href}
            className="m-1 hover:scale-110"
            color="primary"
          >
            <FontAwesomeIcon icon={btn.icon} />
          </Button>
        );
      })}
      <Button
        radius="full"
        isIconOnly={true}
        aria-label={contactBtn.ariaLabel}
        variant="ghost"
        as={Link}
        href="/contact"
        className="m-1 hover:scale-110"
        color="primary"
        onPress={onOpen}
      >
        <FontAwesomeIcon icon={contactBtn.icon} />
      </Button>{' '}
      <Suspense fallback={<div>loading...</div>}>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          {/* Add your modal content here */}
          <ModalContent>
            {(onClose) => {
              return (
                <>
                  <ContactForm />
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              );
            }}
          </ModalContent>
        </Modal>
      </Suspense>
    </div>
  );
};

export default HomeBtns;
