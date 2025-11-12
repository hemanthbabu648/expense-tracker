'use client';

import {
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import Link from 'next/link';

import CONSTANTS from '@/constants/common';
import URLS from '@/constants/urls';

import ButtonLink from '../commons/ButtonLink';

const Header = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <header className="h-16 py-2 shadow-sm">
      <nav className="mx-auto flex w-full items-center justify-between px-4 sm:max-w-7xl">
        {/* Brand Logo */}
        <div className="flex items-center gap-4 md:gap-20">
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src={URLS.BRAND.url}
              width={50}
              height={45}
              alt={URLS.BRAND.name}
              style={{ width: 'auto', height: '50px' }}
            />
            <span className="whitespace-nowrap text-xl lg:text-2xl">
              {CONSTANTS.BRAND_NAME}
            </span>
          </Link>
        </div>
        {/* Navigation Links: from sm device onwards */}
        <div className="hidden sm:block">
          <ul className="flex list-none gap-x-2 text-base font-normal lg:gap-x-5">
            {URLS.HOME.map((url) => (
              <li key={url.name} className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100">
                <Link href={url.path}>{url.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu: for mobile*/}
        <div className="sm:hidden">
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        </div>
        {/* Auth Buttons: from sm device onwards */}
        <div className="hidden sm:flex gap-2">
          <ButtonLink
            label="Sign in"
            href="/auth/sign-in"
            size="md"
            variant="outline-primary"
          />
          <ButtonLink
            label="Sign up"
            href="/auth/sign-up"
            size="md"
            variant="primaryBlue"
          />
        </div>
      </nav>
      {/* Navigation Links: for mobile*/}
      {opened && (
        <div className="absolute left-0 top-16 z-10 h-screen w-full bg-white md:hidden">
          <div className="flex flex-col items-center">
            <ul className="flex list-none flex-col items-center gap-y-4 text-base font-normal">
              {URLS.HOME.map((url) => (
                <li key={url.name} className="cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100">
                  <Link href={url.path}>{url.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-2">
              <ButtonLink
                label="Sign in"
                href="/auth/sign-in"
                size="md"
                variant="outline-primary"
              />
              <ButtonLink
                label="Sign up"
                href="/auth/sign-up"
                size="md"
                variant="primaryBlue"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
