import Header from '../components/Header'
import Search from '../components/Search'
import IntroPost from '../components/IntroPost'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'

import posts from '../data/posts.json'

export default function Home() {
  return (
    <div>
        <Header/>
        <Search/>
        {posts.length > 0 ?  <IntroPost post={posts[0]}/> : null}
        <Blogs/>
        <Footer/>
    </div>
  )
}
