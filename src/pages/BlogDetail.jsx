import { useParams } from 'react-router'
import posts from '../data/posts.json'
import { useEffect } from 'react';

export default function BlogDetail() {

    const { id } = useParams();
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            transitionDelay: 300,
            behavior: "smooth"
          });
    }, []);

  return (
    <div className='px-6 md:px-20 mt-10 lg:px-56'>
        <h3 className='text-blue-500 text-[16px]'> {posts[id-1].tag} </h3>
        <h3 className='text-[30px] font-bold'> {posts[id-1].title} </h3>
        <div className='flex items-center mt-5'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSR7eJyNyKvK90HclIFMQJTCNeeJNLMdviA&s"
                  className='w-[30px] rounded-full'
              />
              <div className='ml-2'>
                <h3 className='font-bold text-[12px]'> Admin</h3>
                <h3 className='text-gray-500 text-[10px]'> 18 Junho de 2024 </h3>
              </div>
            </div>
        <img src={posts[id-1].image_link} className='rounded-2xl mt-5 mb-5 w-full h-[600px] border-[1px]' />
        <h3 className='text-[24px] text-justify leading-16'> {posts[id-1].text} </h3>
    </div>
  )
}
