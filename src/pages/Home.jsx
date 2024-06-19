import { useEffect, useState } from 'react';

import Search from '../components/Search'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'

import posts from '../data/posts.json'

export default function Home() {

  const [filter, setFilter] = useState("All"); 
  const [postFilter, setPostFilter] = useState([]);

  useEffect(() => {

    let list = [];

    for(let i = 0; i < posts.length; i++) {
      if(filter != "All") {
        if(posts[i].tag === filter) {
          list.push(posts[i])
        } 
      } else {
        list.push(posts[i])
      }
    }

    setPostFilter(list)

  }, [filter])


  useEffect(() => {
      window.scrollTo({
          top: 0,
          transitionDelay: 300,
          behavior: "smooth"
        });
  }, []);

  return (
    <div>
        <Search setFilter={setFilter}/>
        {posts.length > 0 ?  <IntroPost post={postFilter[0] ? postFilter[0] : posts[0]} /> : null}
        {posts.length > 0 ?  <Blogs posts={posts} filter={filter} /> : null}
    </div>
  )
}
