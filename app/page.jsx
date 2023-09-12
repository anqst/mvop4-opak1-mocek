// homepage
import Image from 'next/image'
import PostCard from './components/PostCard';

async function loadData(url) {

  // vařím z vody B)

  const json = await fetch(url);
  const data = await json.json();
  return (data); // stále vařím z vody (ale aspoň má vysoký obsah minarálů)
}

let posts = await loadData("https://jsonplaceholder.typicode.com/posts"); // LETSFUCKINGOOOOOOOOOOOOOOOO
console.log(posts)

export default function Homepage() {
  return (
    <main className='flex flex-col justify-start items-start py-12 px-8 gap-4'>

      <h1 className='text-lg'>New "fresh" posts from r/ArcaneOdyssey</h1>

      <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {posts.map((post) => {
          return <PostCard id={post.id} title={post.title} />
        })}
      </div>

    </main>
  )
}
