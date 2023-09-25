// homepage
import Image from 'next/image'
import PostCard from './components/PostCard';
import functions from './functions'

let posts = await functions.fetchDataFromURL("https://jsonplaceholder.typicode.com/posts");

export default function Homepage() {
  return (
    <>
      <h1 className='text-lg'>New "fresh" posts from r/ArcaneOdyssey</h1>

      <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {posts.map((post) => {
          return <PostCard id={post.id} title={post.title} />
        })}
      </div>
    </>

  )
}
