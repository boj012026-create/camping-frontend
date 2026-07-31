import { useEffect, useState } from 'react'
import hrp from 'html-react-parser';

interface Post {
  id: number
  acf: {
    cabin_name: string
    price_a_night: number;
  }
}

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const url: string = "/wp-json/wp/v2/posts";

  useEffect( () => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch((err) => console.error('error fetching cabins:', err))
  }, []);

  return (
    <>
    <h1 className="text-6xl"> Hytter</h1>
    <div className="flex flex-wrap justify-around gap-8">
      {posts.map((post) => (
        <article className="flex flex-col items-start" key={post.id}>
          <h2 className="text-4xl">{post.title.rendered}</h2>
          <h2>{post.acf?.price_a_night}</h2>
          <p>{post.acf?.cabin_description}</p>
        </article>
        )
      )}
     </div> 
    </>
  )
}

export default App
