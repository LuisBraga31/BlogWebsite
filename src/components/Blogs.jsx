/* eslint-disable react/prop-types */

import { useNavigate } from "react-router"

export default function Blogs({ posts }) {

  const navigate = useNavigate();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
        {posts.map((item) => (
          <div key={item.id} className='m-4 cursor-pointer' onClick={() => navigate(`blog/${item.id}`)}>
            <img src={item.image_link} className='w-full rounded-2xl object-cover h-[200px]'/>
            <h3 className='text-blue-500 mt-3'> {item.tag} </h3>
            <h3 className='font-bold mt-3'> {item.title} </h3>
            <h3 className='line-clamp-3 text-justify text-gray-400 mt-3'> {item.description} </h3>
            <div className='flex items-center mt-5'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSR7eJyNyKvK90HclIFMQJTCNeeJNLMdviA&s"
                  className='w-[50px] rounded-full'
              />
              <div className='ml-2'>
                <h3 className='font-bold text-[12px]'> Admin</h3>
                <h3 className='text-gray-500 text-[10px]'> 18 Junho de 2024 </h3>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
