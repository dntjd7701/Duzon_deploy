'use client';

import { Typography } from '@material-tailwind/react';
import { ModuleCard } from '@/components/module-card';

interface MainProps {
  modules: string[];
}
export const Main = ({ modules }: MainProps) => {
  console.debug('modules:', modules);
  return (
    <section className='px-8 py-10'>
      <div className='container mx-auto mb-24 text-center'>
        <Typography variant='h2' color='white' placeholder={''}>
          더존 개발서버 배포
        </Typography>
        <Typography placeholder={''} variant='h5' className='mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8'>
          솔루션 BS개발부 ERP물류개발팀
        </Typography>
      </div>
      <div className='container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14'>
        {modules.map((module, idx) => (
          <ModuleCard key={idx} module={module} />
        ))}
      </div>
    </section>
  );
};

export default Main;
