import Image from 'next/image'
import path from 'path'
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
  IoLogoReact
} from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'

const menuItesms = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} className='text-yellow-500' />,
    title: 'Dashboard',
    subtitle: 'Visualization'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} className='text-lime-500' />,
    title: 'Counter',
    subtitle: 'Client Side Counter'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} className='text-purple-500' />,
    title: 'Pokemons',
    subtitle: 'Static Generation'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={40} className='text-red-500' />,
    title: 'Pokemons',
    subtitle: 'Global State'
  }
]

export const Sidebar = () => {
  return (
    <div
      id='menu'
      style={{ width: '400px' }}
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'
    >
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact className='mr-1' />
          <span>Dash</span>
          <span className='text-blue-500'>8</span>.
        </h1>
        <p className='text-slate-500 text-sm'>Manage your actions and activities</p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-full w-8 h-8'
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
              alt='User Avatar'
              width={20}
              height={20}
            />
          </span>
          <span className='text-sm md:text-base font-bold'>John Doe</span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>
        {menuItesms.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}
