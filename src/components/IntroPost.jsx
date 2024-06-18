/* eslint-disable react/prop-types */

export default function IntroPost({post}) {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
      
      <img src={post.image_link} className='rounded-2xl object-cover w-full h-full'/>

      <div>
        <h4 className='text-blue-500'> {post.tag} </h4>
        <h2 className='text-[23px] font-bold mt-5'> {post.title} </h2>
        <h4 className='line-clamp-6 text-gray-400 mt-5 text-justify'> {post.description} </h4>

        <div className='flex items-center mt-5'>
          <img src="https://media.istockphoto.com/id/1130884625/pt/vetorial/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=TY231Axfe9YpJTZj10JgZqaeoBRI1_wo-J3IBfsi5Ss="
              className='w-[50px] rounded-full'
          />
          <div className='ml-2'>
            <h3 className='font-bold'> Admin</h3>
            <h3 className='text-gray-500'> 18 Junho de 2024 </h3>
          </div>
        </div>
      </div>

    </div>
  )
}
