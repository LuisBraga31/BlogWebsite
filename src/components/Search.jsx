import { useState } from 'react';
import banner from '../assets/img/banner.jpg';
import { IoSearchOutline } from 'react-icons/io5';

export default function Search() {

  const tags = [
    {
      id: 1,
      name: 'All'
    },
    {
      id: 2,
      name: 'Front-End'
    },
    {
      id: 3,
      name: 'Back-End'
    },
    {
      id: 4,
      name: 'Testing'
    },
    {
      id: 5,
      name: 'DataBase'
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex justify-center mt-8 flex-col px-[70] md:px-[150px]'>
      <img src={banner} className='rounded-2xl h-80'/>
      <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[20%] flex items-center'>
        <IoSearchOutline className='text-[20px] text-gray-400'/>
        <input type="text" placeholder='Search' className='outline-none ml-2'/>
      </div>

      <div className='flex gap-10 justify-center mt-5 '>
        {tags.map((item, index)=> (
          <ul key={item.id}onClick={()=> setActiveIndex(index)}  
              className={`${index==activeIndex ? 'bg-blue-500 text-white' : null} 
              p-1 pb-2 rounded-sm md:rounded-full border-[1px] cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] hover:border-blue-500 transition-all duration-100 ease-in-out`}>
            <li> {item.name} </li>
          </ul>
        ))}
      </div>

    </div>
  )
}
