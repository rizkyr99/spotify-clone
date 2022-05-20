import React from 'react';
import LogoBlack from '../assets/logo_black.png';
import facebook from '../assets/facebook.png';

const Login = () => {
  return (
    <div>
      <header className='border-b border-gray-300 h-28 flex justify-center items-center'>
        <img src={LogoBlack} className='h-14' alt='' />
      </header>
      <main className='max-w-md p-2 text-center mx-auto mt-8'>
        <p className='text-sm font-bold'>Untuk melanjutkan, masuk ke Spotify</p>
        <div className='flex flex-col gap-y-3 my-4'>
          <button className='bg-[#3b5998] text-white uppercase rounded-full font-semibold flex h-12 items-center justify-center gap-x-2 tracking-wider'>
            <img src={facebook} className='h-4' alt='' />
            Lanjutkan dengan Facebook
          </button>
          <button className='bg-gray-900 text-white uppercase rounded-full font-semibold flex h-12 items-center justify-center gap-x-2 tracking-wider'>
            <img src={facebook} className='h-4' alt='' />
            Lanjutkan dengan Facebook
          </button>
          <button className='border border-gray-600 text-gray-500 uppercase rounded-full font-semibold flex h-12 items-center justify-center gap-x-2 tracking-wider'>
            <img src={facebook} className='h-4' alt='' />
            Lanjutkan dengan Google
          </button>
          <button className='border border-gray-600 text-gray-500 uppercase rounded-full font-semibold flex h-12 items-center justify-center gap-x-2 tracking-wider'>
            <img src={facebook} className='h-4' alt='' />
            Lanjutkan dengan Nomor Telepon
          </button>
        </div>
        <div className='uppercase text-xs font-bold relative'>
          <span className='bg-white px-4'>atau</span>
          <hr className='absolute top-2 left-0 w-full -z-10 border-t-2 border-gray-300' />
        </div>
        <form className='my-4 text-left border-b border-gray-300 pb-5'>
          <label className='block mb-2 text-sm font-bold'>Alamat email atau nama pengguna</label>
          <input
            type='text'
            placeholder='Alamat email atau nama pengguna'
            className='w-full border border-gray-800 p-3 rounded-md mb-3'
          />
          <label className='block mb-2 text-sm font-bold'>Alamat email atau nama pengguna</label>
          <input
            type='text'
            placeholder='Alamat email atau nama pengguna'
            className='w-full border border-gray-800 p-3 rounded-md mb-3'
          />
          <p className='mb-2'>Lupa kata sandimu?</p>
          <div className='flex justify-between'>
            <div>
              <input type='checkbox' id='remember' className='default:ring-2' />
              <label htmlFor='remember' className='ml-2'>
                Ingat aku
              </label>
            </div>
            <button className='bg-green-500 text-black py-4 px-10 rounded-full uppercase tracking-wider font-bold text-sm hover:scale-105 hover:bg-green-400'>
              Masuk
            </button>
          </div>
        </form>
        <div>
          <p className='font-bold text-lg mb-4'>Tidak punya akun?</p>
          <button className='uppercase border border-gray-500 w-full h-12 rounded-full text-gray-600 font-semibold tracking-widest mb-2'>
            Mendaftar ke Spotify
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
