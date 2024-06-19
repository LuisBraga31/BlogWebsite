import { useNavigate } from 'react-router';
import logo from '../assets/img/logo.png';
import { IoLogoYoutube } from 'react-icons/io5';

export default function Header() {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center gap-4 md:gap-0 md:justify-between md:flex-row items-center flex-wrap '>
      
      <img src={logo} className='w-[180px] cursor-pointer' onClick={() => navigate('/')}/>
      
      <ul className='flex gap-4 md:gap-14 flex-wrap'>
        <li className='hover:font-bold cursor-pointer' onClick={() => navigate('/')}> Home </li>
        <li className='hover:font-bold cursor-pointer'> About Us </li>
        <li className='hover:font-bold cursor-pointer'> Contact Us </li>
      </ul>

      <button className='px-3 py-2 bg-red-500 rounded-full text-white flex items-center'> 
         Subscribe <IoLogoYoutube className='ml-3 text-[20px]'/>
      </button>

    </div>
  )
}
