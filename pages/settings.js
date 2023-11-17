import React from 'react';
import Link from 'next/link';
import { BsSearch } from 'react-icons/bs'
import { AiTwotoneSetting } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Clock = () => {
  const d = new Date();
  const [currentTime, setCurrentTime] = React.useState('');

  React.useEffect(() => {
      const date = d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds();
      const timer = setInterval(() => {
          setCurrentTime(date);
      }, 1000);

      return () => clearInterval(timer);
  }, [currentTime]);

  return <>{currentTime}</>;
};

export default function Settings() {
    return (
      <div> 
        <nav className="bg-slate-950 p-12">
          <div className="max-w-8xl mx-auto">
            <div className="flex justify-between">
              <div className='font-poppins text-white'>
                <Link href="/">
                  <AiOutlineArrowLeft />
                    Back Home
                </Link>
              </div>
              <img
              className="object-scale-down h-32 w-64"
              alt=""
              src="/logo-bloktv-1@2x.png"
              />
              <div className="space-x-12">
              <Link href="/">
                < BsSearch color='white' fontSize={30}/>
              </Link>
              <Link href="/">
                <AiTwotoneSetting color='white' fontSize={30}/>
              </Link>
              <Link href="/">
                <RxAvatar color='white' fontSize={30}/>
              </Link>
              <Link href="/">
                <Clock />
              </Link>             
            </div>
            </div>
          </div>
        </nav>

        <div className='bg-slate-950 relative min-h-screen flex'>
          <nav className='bg-slate-950 w-80 text-center'>
            <nav className='text-white m-12 font-poppins'>
              <Link href="/">
                Network
              </Link>
            </nav>
            <nav className='text-white m-12 font-poppins'>
              <Link href="/">
                Remote&Bluetooth
              </Link>
            </nav>
            <nav className='text-white m-12 font-poppins'>
              <Link href="/">
                Theme
              </Link>
            </nav>
            <nav className='text-white m-12 font-poppins'>
              <Link href="/">
                Adblocking Setting
              </Link>
            </nav>
          </nav>
    
          <div className='flex-1 grid grid-cols-3 gap-8'>
            <div className='bg-[#240D50] w-10/12 rounded-tl-lg text-center p-24 h-96 justify-center shadow-lg shadow-indigo-500/40'>
              <img
                className="object-cover h-48 w-96"
                alt=""
                src="/screensaver1.jpg"
                />
              </div>
            <div className='bg-[#240D50] w-10/12 rounded-tl-lg text-center p-24 h-96 justify-center shadow-lg shadow-indigo-500/40'>
            <img
                className="object-cover h-48 w-96"
                alt=""
                src="/screensaver2.jpg"
                />
              </div>
            <div className='bg-[#240D50] w-10/12 rounded-tl-lg text-center p-24 h-96 justify-center shadow-lg shadow-indigo-500/40'>
            <img
                className="object-cover h-48 w-96"
                alt=""
                src="/screensaver3.jpg"
                />
            </div>
            <div className='bg-[#240D50] w-10/12 rounded-tl-lg text-center p-24 h-96 justify-center shadow-lg shadow-indigo-500/40'>
            <img
                className="object-cover h-48 w-96"
                alt=""
                src="/screensaver4.jpg"
                />
            </div>
            <div className='bg-[#240D50] w-10/12 rounded-tl-lg text-center p-24 h-96 justify-center shadow-lg shadow-indigo-500/40'>
            <img
                className="object-cover h-48 w-96"
                alt=""
                src="/screensaver5.jpg"
                />
            </div>
            <div className='bg-[#240D50] w-10/12 rounded-tl-lg text-center p-24 h-96 justify-center shadow-lg shadow-indigo-500/40'>
            <img
                className="object-cover h-48 w-96"
                alt=""
                src="/screensaver6.jpg"
                />
            </div>
          </div>
      
        </div>
      </div>
  );
};
