'use client';
import {
  Modal,
  ModalContent,
  ModalFooter,
  useDisclosure,
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
  faCube,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

const HomeBtns = ({ location }: { location?: string }) => {
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
    <nav
      className={
        location === 'under'
          ? 'md:hidden flex mt-11 justify-center'
          : 'flex flex-col me-9 ms-3 mt-11 fixed'
      }
    >
      {btns.map((btn) => {
        return (
          <div key={btn.name} className="flex justify-start items-center">
            <Tooltip
              content={btn.name}
              placement={location === 'under' ? 'bottom' : 'right-end'}
            >
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
            <p className="hidden md:flex ms-1 text-sm">{btn.name}</p>
          </div>
        );
      })}
      <div className="flex justify-start items-center">
        <Tooltip
          content="Contact Me"
          placement={location === 'under' ? 'bottom' : 'right-end'}
        >
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
        <h3 className="hidden md:flex ms-1 text-sm text-balance w-10 text-center">
          Contact Me
        </h3>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
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

const BtnTooltip = ({ name }: { name: string }) => {
  return (
    <Tooltip content={name} placement="bottom-end">
      <Button radius="full" isIconOnly={true} variant="ghost" color="primary">
        {name}
      </Button>
    </Tooltip>
  );
};