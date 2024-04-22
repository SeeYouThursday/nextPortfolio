'use client';
import { Avatar, Button, Link } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faAddressBook,
  faPaintBrush,
  faCube,
} from '@fortawesome/free-solid-svg-icons';
const HomeBtns = () => {
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
      name: 'contact',
      href: '/contact',
      icon: faAddressBook,
      ariaLabel: 'Contact Me',
    },
  ];

  return (
    <>
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
    </>
  );
};

export default HomeBtns;
