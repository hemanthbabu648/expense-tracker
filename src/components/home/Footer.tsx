'use client';

import { ActionIcon } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

import CONSTANTS from '../../constants/common';
import URLS from '../../constants/urls';

interface SocialMedia {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const SOCIAL_MEDIA: SocialMedia[] = [
  {
    name: 'Twitter',
    url: 'https://x.com/hemanthbabu648',
    icon: <IconBrandTwitter size={18} stroke={1.5} />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hemanthbabu648',
    icon: <IconBrandInstagram size={18} stroke={1.5} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hemanthbabu648',
    icon: <IconBrandLinkedin size={18} stroke={1.5} />,
  },
]

const Footer = () => {
  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-gray-300 px-4 py-2 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src={URLS.BRAND.url}
            width={50}
            height={40}
            alt={URLS.BRAND.name}
            style={{ width: 'auto', height: '40px' }}
          />
          <span className="whitespace-nowrap text-lg sm:text-xl">
            {CONSTANTS.BRAND_NAME}
          </span>
        </div>
        <p className="text-center text-sm font-normal sm:text-base">
          &copy; 2025 {URLS.PORTFOLIO.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {SOCIAL_MEDIA.map((social) => (
            <ActionIcon
              key={social.name}
              size="lg"
              variant="default"
              radius="xl"
              className="hover:bg-primary-blue-light hover:text-white"
              onClick={() => handleSocialClick(social.url)}
            >
              {social.icon}
            </ActionIcon>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
