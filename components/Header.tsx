import {
  Briefcase,
  HomeIcon,
  MessageSquare,
  SearchIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='flex items-center p-3 max-w-6xl mx-auto'>
      <Image
        className='rounded-lg'
        src='https://links.papareact.com/b3z'
        width={40}
        height={40}
        alt='logo'
      />

      <div className='flex-1'>
        <form className='flex items-center space-x-1 bg-gray-100 rounded-md flex-1 mx-2 max-w-96'>
          <SearchIcon className='h-4 text-gray-600' />
          <input
            type='text'
            placeholder='Search'
            className='bg-transparent flex-1 outline-none'
          />
        </form>
      </div>
      <div className='flex items-center space-x-4 px-5'>
        <Link href='' className='icon'>
          <HomeIcon className='h-6' />
          <p>Home</p>
        </Link>

        <Link href='' className='icon hidden md:flex'>
          <UsersIcon className='h-6' />
          <p>Network</p>
        </Link>

        <Link href='' className='icon hidden md:flex'>
          <Briefcase className='h-6' />
          <p>Jobs</p>
        </Link>

        <Link href='' className='icon hidden md:flex'>
          <MessageSquare className='h-6' />
          <p>Messaging</p>
        </Link>

        {/* User Button */}

        {/* Sign in Button */}
      </div>
    </div>
  );
};

export default Header;
