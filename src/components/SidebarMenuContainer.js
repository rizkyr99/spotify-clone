import React from 'react';
import { BookmarkIcon, HeartIcon, HomeIcon, LibraryIcon, PlusIcon, SearchIcon } from '@heroicons/react/solid';

const SidebarMenuContainer = () => {
  return (
    <div className='border-b border-gray-800'>
      <div className='py-4 flex flex-col gap-y-3 mt-4'>
        <button
          href='/'
          className='text-gray-400 flex items-center gap-x-3 justify-start hover:text-white transition duration-150'>
          <HomeIcon className='h-6 w-6' />
          Home
        </button>
        <button
          href='/'
          className='text-gray-400 flex items-center gap-x-3 justify-start hover:text-white transition duration-150'>
          <SearchIcon className='h-6 w-6' />
          Cari
        </button>
        <button
          href='/'
          className='text-gray-400 flex items-center gap-x-3 justify-start hover:text-white transition duration-150'>
          <LibraryIcon className='h-6 w-6' />
          Koleksi Kamu
        </button>
      </div>
      <div className='py-4 flex flex-col gap-y-3'>
        <button
          href='/'
          className='text-gray-400 flex items-center gap-x-3 justify-start hover:text-white transition duration-150'>
          <PlusIcon className='h-6 w-6' />
          Buat Playlist
        </button>
        <button
          href='/'
          className='text-gray-400 flex items-center gap-x-3 justify-start hover:text-white transition duration-150'>
          <HeartIcon className='h-6 w-6' />
          Lagu yang Disukai
        </button>
        <button
          href='/'
          className='text-gray-400 flex items-center gap-x-3 justify-start hover:text-white transition duration-150'>
          <BookmarkIcon className='h-6 w-6' />
          Home
        </button>
      </div>
    </div>
  );
};

export default SidebarMenuContainer;
