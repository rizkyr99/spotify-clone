import React from 'react';
import Logo from '../assets/logo.png';
import SidebarMenuContainer from './SidebarMenuContainer';
import SidebarPlaylistContainer from './SidebarPlaylistContainer';

const Sidebar = () => {
  return (
    <div className='bg-black text-gray- max-w-[250px] p-6 pr-0 pb-0 h-screen overflow-hidden flex flex-col'>
      <img src={Logo} className='max-w-[130px]' alt='' />

      <SidebarMenuContainer />
      <SidebarPlaylistContainer />
    </div>
  );
};

export default Sidebar;
