'use client';
import React, { Suspense } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Modal,
  ModalFooter,
  ModalContent,
  useDisclosure,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import ContactForm from '@/app/_components/ContactForm';

interface navItem {
  href: string;
  title: string;
  isActive: boolean;
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  //   const [isActive, setIsActive] = React.useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const navItems: navItem[] = [
    { href: '/', title: 'Home', isActive: false },
    { href: '/projects', title: 'Recent Projects', isActive: false },
    { href: '/document-resume', title: 'Resume', isActive: false },
    // { href: '/projects', title: 'Contact', isActive: false },
  ];

  const pathname = usePathname();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-indigo-950/90 shadow-inner"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden text-sky-50"
        />
        <NavbarBrand>
          <p className="font-bold text-sky-200 ">Full Stack Development</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <NavbarItem
              key={item.title}
              isActive={isActive}
              className="hover:bg-violet-600 p-2 px-3 rounded-3xl hover:text-white text-primary"
            >
              <Link color="success" href={item.href} className="text-white">
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
        <NavbarItem>
          <Button
            radius="full"
            aria-label="Contact Me"
            // variant="ghost"
            className="m-1 hover:scale-110"
            color="primary"
            onPress={onOpen}
          >
            {/* <FontAwesomeIcon icon={contactBtn.icon} /> */}
            Contact Me
          </Button>
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
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                      </ModalFooter>
                    </>
                  );
                }}
              </ModalContent>
            </Modal>
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color="primary" className="w-full" href={item.href} size="lg">
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
