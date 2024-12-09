"use client";
// components/Navbar.tsx
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};


const NavBar = () => {
  const ROOT_PATH = process.env.NEXT_PUBLIC_ROOT_PATH;
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    console.log("Pathname:", pathname);
    setCurrentRoute(pathname);
  }, [pathname]);

  return (
       <Navbar shouldHideOnScroll>
       <NavbarBrand>
         <AcmeLogo />
         <p className="font-bold text-inherit">Quantum Architecture</p>
       </NavbarBrand> 
       <NavbarContent className="hidden sm:flex gap-4" justify="center">
         <NavbarItem key="HOME" isActive={currentRoute === (ROOT_PATH ? `${ROOT_PATH}/` : '/')}>
           <Link color="foreground" href={ROOT_PATH ? `${ROOT_PATH}/` : '/'}>
           Home
           </Link>
         </NavbarItem>
         <NavbarItem key="ARTICLES" isActive={currentRoute === (ROOT_PATH ? `${ROOT_PATH}/articles` : '/articles')}>
           <Link  color="foreground" href={ROOT_PATH ? `${ROOT_PATH}/articles` : '/articles'}>
           Articles
           </Link>
         </NavbarItem>
         <NavbarItem key="ABOUT" isActive={currentRoute === (ROOT_PATH ? `${ROOT_PATH}/about` : '/about')}>
           <Link color="foreground" href={ROOT_PATH ? `${ROOT_PATH}/about` : '/about'}>
           About
           </Link>
         </NavbarItem>
       </NavbarContent>
     </Navbar>
  );
};
export default NavBar;


