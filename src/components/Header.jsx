import logo from '../assets/img/logo.png';
import { IoLogoYoutube } from 'react-icons/io5';

export default function Header() {
  return (
    <div className='flex justify-between items-center'>
      
      <img src={logo}  className='w-[180px]'/>
      
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'> Home </li>
        <li className='hover:font-bold cursor-pointer'> About Us </li>
        <li className='hover:font-bold cursor-pointer'> Contact Us </li>
      </ul>

      <button className='px-3 py-2 bg-red-500 rounded-full text-white flex items-center'> 
         Subscribe <IoLogoYoutube className='ml-3 text-[20px]'/>
      </button>

    </div>
  )
}
