import { BellIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';

export const Navbar = () => {
  useEffect(() => {
    document.addEventListener('animationend', () => {

    })
    return () => {
      // document.removeEventListener('animationend', )
    }
  }, [])


  //나중에 ripple 넣어보자
  const handleFileSettingBtnClick: React.MouseEventHandler = (e) => {
    console.debug('e:', e)
    
  };

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="container">
        <nav className="max-w-screen-xl h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl">
          <div className="h-full w-full px-5 py-2 flex flex-wrap items-center justify-between text-white">
            <span className="font-bold text-inherit mr-4 ml-2">설정</span>
            <div className="flex ml-auto gap-1.5 md:mr-4">
              <button
                id='ripple-btn'
                className="relative text-white font-bold h-full bg-black py-3 px-6 text-xs hover:opacity-80 active:bg-white/30 active:shadow-button_active rounded-lg shadow-button active:animation-ripple"
                onClick={handleFileSettingBtnClick}>
                배포 파일 세팅하기
              </button>
              <button className="w-10 h-10 hover:bg-white/10 active:bg-white/30 rounded-lg">
                <Cog6ToothIcon className="h-4 w-full" />
              </button>
              <button className="w-10 h-10 hover:bg-white/10 active:bg-white/30 rounded-lg">
                <BellIcon className="h-4 w-full" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
