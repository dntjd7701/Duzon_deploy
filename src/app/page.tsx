'use client';

// components
import { Navbar } from '@/components';
import React, { useEffect } from 'react';
import Main from './main';
import { Cog6ToothIcon, BellIcon } from '@heroicons/react/24/solid';

// sections
export default function RootPage() {
  const [modules, setModules] = React.useState<string[]>([]);

  useEffect(() => {
    // fetchData();
    setModules(['production', 'purchase', 'logis']);
  }, []);

  const fetchData = async () => {
    try {
      // const { resultData } = await callApi('http://localhost:7007/modules');
      // setModules(resultData);
    } catch (error) {
      console.error('fetchData:', error);
    }
  };

  return (
    <>
      {/* <NavbarDark /> */}
      <Navbar />
      <Main modules={modules} />
      {/* <Footer /> */}
    </>
  );
}
