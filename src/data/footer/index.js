import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocials = [
  {
    name: 'Facebook',
    icon: iconStyle(FaFacebook),
  },
  {
    name: 'Instagram',
    icon: iconStyle(FaInstagram),
  },
  {
    name: 'YouTube',
    icon: iconStyle(FaYoutube),
  },
  {
    name: 'Twitter',
    icon: iconStyle(FaTwitter),
  },
  {
    name: 'LinkedIn',
    icon: iconStyle(FaLinkedin),
  },
];

export const footerData = [
  {
    title: 'Quick Links',
    links: ['About Us', 'Pricing', 'Contact'],
  },
];
