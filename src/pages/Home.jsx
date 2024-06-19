import Search from '../components/Search'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'

import posts from '../data/posts.json'

export default function Home() {
  return (
    <div>
        <Search/>
        {posts.length > 0 ?  <IntroPost post={posts[0]}/> : null}
        {posts.length > 0 ?  <Blogs posts={posts}/> : null}
    </div>
  )
}
