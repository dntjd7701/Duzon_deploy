import { callApi } from '@/utils';
import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { Button, IconButton, Navbar as MTNavbar, Typography } from '@material-tailwind/react';

export function Navbar() {
  const fileSettingBtnHandle = async () => {
    try {
      await callApi('http://localhost:7007/setting');
    } catch (error) {
      console.debug('fileSettingBtnHandle:', error);
    }
  };

  return (
    <div className='px-10 sticky top-4 z-50'>
      <div className='mx-auto container'>
        <MTNavbar placeholder={''} variant={'gradient'} blurred color={'blue-gray'} className={'mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3'}>
          <div className='flex flex-wrap items-center justify-between gap-y-4 text-white'>
            <Typography placeholder={''} as='a' href='#' variant='h6' className='mr-4 ml-2 cursor-pointer py-1.5'>
              설정
            </Typography>
            <div className='ml-auto flex gap-1 md:mr-4'>
              <Button placeholder={''} color='gray' onClick={fileSettingBtnHandle}>
                배포 파일 세팅하기
              </Button>
              <IconButton placeholder={''} variant='text' color='white'>
                <Cog6ToothIcon className='h-4 w-4' />
              </IconButton>
              <IconButton placeholder={''} variant='text' color='white'>
                <BellIcon className='h-4 w-4' />
              </IconButton>
            </div>
            {/* <div className='relative flex w-full gap-2 md:w-max'>
              <Input
                crossOrigin={''}
                placeholder={''}
                type='search'
                color='white'
                label='모듈명 입력...'
                className='pr-20'
                containerProps={{
                  className: 'min-w-[288px]',
                }}
                onChange={(e) => {
                  console.log(e);
                }}
              />
              <Button placeholder={''} size='sm' color='white' className='!absolute right-1 top-1 rounded'>
                조회
              </Button>
            </div> */}
          </div>
          {/* <Collapse open={open}>
            <div className='container mx-auto mt-3 border-t border-gray-200 px-2 pt-4'>
              <ul className='flex flex-col gap-4'>
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className='h-5 w-5' />
                    {name}
                  </NavItem>
                ))}
              </ul>
              <div className='mt-6 mb-4 flex items-center gap-4'>
                <Button placeholder={''} variant='text'>
                  Log in
                </Button>
                <a href='https://www.material-tailwind.com/blocks' target='_blank'>
                  <Button placeholder={''} color='gray'>
                    blocks
                  </Button>
                </a>
              </div>
            </div>
          </Collapse> */}
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
