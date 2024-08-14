'use client'
import { Info, MessagesSquare } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export default function Header() {
  const [login, setLogin] = useState(false)
  if (typeof window !== 'undefined') useEffect(() => {
    Cookies.get('token') ? setLogin(true) : setLogin(false)
  }, [])
  return (
    <>
      <header className='flex justify-between items-center fixed z-50 h-16 w-screen shadow-lg bg-gray-base text-white'>
        <div className='w-full flex items-center justify-start px-16 gap-4 opacity-70'>
          <Link href='/chat' className={twMerge('hover:text-brand-primary-future-blue-50 flex items-center gap-2', login ? '' : 'hidden')}>
            <MessagesSquare />
            chats
          </Link>
          <Link  href='/help' className={twMerge('hover:text-brand-primary-future-blue-50 flex items-center gap-2', login ? '' : 'hidden')}>
            <Info />
            help
          </Link>
        </div>
        <div className='w-full flex items-center justify-center px-16 gap-4 opacity-70'>
        </div>
        <div className='w-full flex items-center justify-end px-16 gap-4 opacity-70'>
        </div>

      </header>
      <div className="h-16 w-full bg-black" />
    </>
  )
}
