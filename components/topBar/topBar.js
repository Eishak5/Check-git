import React from 'react';
import Link from 'next/link';

// importing icon components
import { BsSearch } from 'react-icons/bs';
import { AiTwotoneSetting } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';

import Clock from './topBarClock';

// TopBar component definition
const TopBar = () => {
  return (
    <nav className="bg-indigo-950 p-6 pt-10" style={{ backgroundColor: '#0b0022' }}>
      <div className="max-w-7xl mx-auto">
        {/* Container for logo and navigation icons */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img
            className="object-scale-down h-20 w-90"
            alt="Logo"
            src="/logo-bloktv-1@2x.png"
          />

          {/* Navigation Icons */}
          <div className="flex space-x-8 items-center">
            {/* Search Icon */}
            <div className="bg-slate-700 p-3 rounded-full cursor-pointer ">
              <Link href="/" passHref>
                <BsSearch color='white' fontSize={20} />
              </Link>
            </div>

            {/* Settings Icon */}
            <div className="bg-slate-700 p-3 rounded-full cursor-pointer ">
              <Link href="/" passHref>
                <AiTwotoneSetting color='white' fontSize={20} />
              </Link>
            </div>

            {/* Avatar Icon */}
            <div className="bg-slate-700 p-2 rounded-full cursor-pointer ">
              <Link href="/" passHref>
                <RxAvatar color='white' fontSize={30} />
              </Link>
            </div>

            {/* Clock Component */}
            <Clock fontSize="1.4rem" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
