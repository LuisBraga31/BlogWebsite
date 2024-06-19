import Search from '../components/Search'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'

import posts from '../data/posts.json'
import { useEffect } from 'react';

export default function Home() {
  
  useEffect(() => {
      window.scrollTo({
          top: 0,
          transitionDelay: 300,
          behavior: "smooth"
        });
  }, []);

  return (
    <div>
        <Search/>
        {posts.length > 0 ?  <IntroPost post={posts[0]}/> : null}
        {posts.length > 0 ?  <Blogs posts={posts}/> : null}
    </div>
  )
}
