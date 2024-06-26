'use client';
import {
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
  Avatar,
  Button,
  Tooltip,
} from '@nextui-org/react';
import ContactForm from '@/app/_components/ContactForm';
import { Suspense } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      name: 'Home',
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
    <nav className="flex flex-col me-9 ms-3 mt-11 fixed">
      {btns.map((btn) => {
        return (
          <Tooltip key={btn.name} content={btn.name} placement="right-end">
            <Button
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
          </Tooltip>
        );
      })}
      <Tooltip content="Contact Me" placement="right-end">
        <Button
          radius="full"
          isIconOnly={true}
          aria-label={contactBtn.ariaLabel}
          variant="ghost"
          className="m-1 hover:scale-110"
          color="primary"
          onPress={onOpen}
        >
          <FontAwesomeIcon icon={contactBtn.icon} />
        </Button>
      </Tooltip>
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
                  </ModalFooter>
                </>
              );
            }}
          </ModalContent>
        </Modal>
      </Suspense>
    </nav>
  );
};

export default HomeBtns;
