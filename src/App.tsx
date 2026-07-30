import { useEffect, useState } from 'react'

interface Post {
  id: number
  title: { rendered: string }
  content: { rendered: string }
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
    <h1> Hytter</h1>
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p>{post.content.rendered}</p>
        </article>
        )
      )}
     </div> 
    </>
  )
}

export default App
