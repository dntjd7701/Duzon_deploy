'use client';

// components
import { Navbar } from '@/components';
import Main from './main';
import React, { useEffect } from 'react';
import { callApi } from '../utils';

// sections
export default function RootPage() {
  const [modules, setModules] = React.useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { resultData } = await callApi('http://localhost:7007/modules');
      setModules(resultData);
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
