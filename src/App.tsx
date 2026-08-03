import { useEffect, useState } from 'react'
import type CabinInterface from './interfaces/Cabin.interface.ts'
import hrp from 'html-react-parser';


function App() {
  const [cabins, setCabins] = useState<CabinInterface[]>([])
  const url: string = "/wp-json/wp/v2/posts";

  useEffect( () => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCabins(data))
      .catch((err) => console.error('error fetching cabins:', err))
  }, []);

  return (
    <>
    <h1 className="text-6xl"> Hytter</h1>
    <div className="flex flex-wrap justify-around gap-8">
      {cabins.map((cabin) => (
        <article className="flex flex-col items-start" key={cabin.id}>
          <h2 className="text-4xl">{cabin.acf.cabin_name}</h2>
          <h2>{cabin.acf.price_a_night}</h2>
          <p>{cabin.acf.cabin_description}</p>
        </article>
        )
      )}
     </div> 
    </>
  )
}

export default App
