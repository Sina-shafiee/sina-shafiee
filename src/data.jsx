import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RxAvatar, RxDashboard } from 'react-icons/rx';

export default {
  navbarLinks: [
    { title: 'Home', url: '/' },
    { title: 'Projects', url: '/projects' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' }
  ],
  sideBarLinks: [
    { title: 'HOME', icon: <RxDashboard />, link: '/dashboard', id: 1 },
    {
      title: 'PROFILE',
      icon: <RxAvatar />,
      link: '/dashboard/profile',
      id: 3
    },
    {
      title: 'PROJECTS',
      icon: <AiOutlineFundProjectionScreen />,
      link: '/dashboard/projects',
      id: 2
    }
  ]
};
