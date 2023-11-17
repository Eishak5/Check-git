import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Importing icon components
import { BsFillHdmiFill, BsSpotify, BsYoutube, BsTwitch } from 'react-icons/bs';
import { BsHdmi } from "react-icons/bs";
import { AiFillUsb, AiFillFolderAdd } from 'react-icons/ai';
import { FaGamepad, FaGoogleDrive } from 'react-icons/fa';
import { SiPrimevideo, SiHulu, SiNetflix, SiApplemusic } from 'react-icons/si';

// Importing sidebar icons
import { GoHomeFill } from "react-icons/go";
import { TbReplaceFilled } from "react-icons/tb";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { IoStorefront, IoSettings } from "react-icons/io5";

// Importing custom components
import TopBar from '../components/topBar/topBar';

// IconCard component definition
const IconCard = ({ IconComponent, text, iconColor, bgColorClass }) => (
  <div 
    className={`${bgColorClass} rounded-lg text-center p-6 flex flex-col items-center justify-center shadow-lg text-white font-poppins cursor-pointer `} 
    style={{ 
      height: '150px',
      clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)'
    }}
  >
    <IconComponent fontSize={100} color={iconColor || 'white'}/>
    <div className='text-white font-poppins text-2xl'>{text}</div>
  </div>
);

// HomePage component definition
const HomePage = () => {
  const router = useRouter();

  // Function to check if the current route matches the given path
  const isActive = (path) => router.pathname === path;

  return (
    <div> 
      <TopBar/>

      <div className='bg-slate-950 relative min-h-screen flex' style={{ paddingBottom: '7%', backgroundColor: '#0b0022'}}>
        {/* Sidebar Navigation */}
        <nav className='bg-indigo-950 w-80' style={{ flex: '45%', paddingLeft: '4%', paddingTop: '3%' , backgroundColor:'#0b0022'}}>

          {/* Navigation Links */}
          {/* Home Link */}
          <Link href="/" className={`flex items-center m-12 font-poppins space-x-6 ${isActive('/') ? 'text-slate-50' : 'text-slate-400'} hover:text-slate-300`}>
            <GoHomeFill size={26} />
            <span style={{fontSize: '18px'}}>Home</span>
          </Link>

          {/* Replace Link */}
          <Link href="/replace" className={`flex items-center m-12 font-poppins space-x-6 cursor-pointer ${isActive('/replace') ? 'text-slate-50' : 'text-slate-400'} hover:text-slate-300`}>
            <TbReplaceFilled size={26} />
            <span style={{fontSize: '18px'}}>What to Replace</span>
          </Link>

          {/* Featured Link */}
          <Link href="/featured" className={`flex items-center m-12 font-poppins space-x-6 cursor-pointer ${isActive('/featured') ? 'text-slate-50' : 'text-slate-400'} hover:text-slate-300`}>
            <MdOutlineFeaturedPlayList size={26} />
            <span style={{fontSize: '18px'}}>FeaturedFree</span>
          </Link>

          {/* Content Store Link */}
          <Link href="/content-store" className={`flex items-center m-12 font-poppins space-x-6 cursor-pointer ${isActive('/content-store') ? 'text-slate-50' : 'text-slate-400'} hover:text-slate-300`}>
            <IoStorefront size={26} />
            <span style={{fontSize: '18px'}}>BlokTV Content Store</span>
          </Link>

          {/* Settings Link */}
          <Link href="/settings" className={`flex items-center m-12 font-poppins space-x-6 cursor-pointer ${isActive('/settings') ? 'text-slate-50' : 'text-slate-400'} hover:text-slate-300`}>
            <IoSettings size={26} />
            <span style={{fontSize: '18px'}}>Setting</span>
          </Link>
        </nav>

        {/* Main Content Area */}
        Apps + Inputs
        <div className='flex-1 grid grid-cols-3 gap-6' style={{ flex: '55%', marginRight:'10%', paddingTop: '7%'}}>
          {/* Icon Cards */}
          {/* Each card represents a different service or feature */}
          <IconCard 
            IconComponent={BsHdmi} 
            text="HDMI" 
            iconColor="rgba(19,190,236,255)" 
            bgColorClass="bg-[#240D50]"
          />

          <IconCard 
            IconComponent={AiFillUsb} 
            text="USB" 
            iconColor="rgba(19,190,236,255)" 
            bgColorClass="bg-[#240D50]"
          />

          <IconCard 
            IconComponent={FaGamepad} 
            text="Video Games" 
            iconColor="rgba(19,190,236,255)" 
            bgColorClass="bg-[#240D50]"
          />

          <IconCard 
            IconComponent={SiPrimevideo} 
            bgColorClass="bg-slate-100"
            iconColor="black" 
          />

          <IconCard 
            IconComponent={SiHulu} 
            bgColorClass="bg-green-600"
          />

          <IconCard 
            IconComponent={BsTwitch} 
            bgColorClass="bg-purple-900 "
          />

          <IconCard 
            IconComponent={SiNetflix} 
            bgColorClass="bg-red-900 "
          />


          <IconCard 
            IconComponent={BsSpotify} 
            bgColorClass="bg-green-600 "
          />

          <IconCard 
            IconComponent={BsYoutube} 
            bgColorClass="bg-white"
            iconColor="rgba(255,0,0,255)" 

          />

          <IconCard 
            IconComponent={SiApplemusic} 
            bgColorClass="bg-rose-600"
          />

          <IconCard 
            IconComponent={FaGoogleDrive} 
            bgColorClass="bg-blue-600"
          />


          <IconCard 
            IconComponent={AiFillFolderAdd} 
            bgColorClass="bg-yellow-600"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
