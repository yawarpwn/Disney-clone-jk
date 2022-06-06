import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import { useSession  } from 'next-auth/react'
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from '@heroicons/react/outline'

export default function Header() {
  const { data: session } = useSession()
  return (
    <div className='bg-[#040714] sticky top-0 h-[72px] px-10 flex items-center md:px-12 z-40'>
      <Link href='/'>
        <Image
          className='cursor-pointer'
          src='/images/logo.svg'
          alt='logo'
          width={80}
          height={80}
        />
      </Link>
      {session && (
        <div className='ml-10 hidden md:flex items-center space-x-6'>
          <a className='header-link group'>
            <HomeIcon className='h-4' />
            <span className='span'>Home</span>
          </a>
          <a className='header-link group'>
            <SearchIcon className='h-4' />
            <span className='span'>Search</span>
          </a>
          <a className='header-link group'>
            <PlusIcon className='h-4' />
            <span className='span'>Watchlist</span>
          </a>
          <a className='header-link group'>
            <StarIcon className='h-4' />
            <span className='span'>Originals</span>
          </a>
          <a className='header-link group'>
            <img src='/images/movie-icon.svg' alt='' className='h-5' />
            <span className='span'>Movies</span>
          </a>
          <a className='header-link group'>
            <img src='/images/series-icon.svg' alt='' className='h-5' />
            <span className='span'>Series</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          onClick={() => signIn(
            'github'
          )}
          className='ml-auto border px-4 py-1.5 rounded cursor-pointer 
          font-medium tracking-wide 
          hover:bg-white hover:text-black transition duration-200'
        >
          Login
        </button>
      ) : (
        <img
          src={session.user.image}
          onClick={() => signOut()}
          className='ml-auto w-12 h-12 rounded-full object-cover cursor-pointer'
        />
      )}
    </div>
  )
}

