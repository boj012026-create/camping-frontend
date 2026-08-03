
import { useEffect, useState } from 'react'
import type CabinInterface from '../interfaces/Cabin.interface.ts'

export default function Cabin() {
  const [cabins, setCabins] = useState<CabinInterface[]>([])
  const url: string = "/wp-json/wp/v2/posts";

  useEffect( () => {
    fetch(url)
      .then(res => res.json())
      .then(data => setCabins(data))
      .catch((err) => console.error('error fetching cabins:', err))
  }, []);

  return (
    <section>
    <h1 className="text-6xl"> Hytter</h1>
    <div className="flex flex-wrap justify-around gap-8">
      {cabins.map((cabin) => (
        <article className="flex flex-col items-start" key={cabin.id}>
          <h2 className="text-4xl">{cabin.title.rendered}</h2>
          <h2>{cabin.acf.price}</h2>
          <p>{cabin.acf.description}</p>
        <img src={cabin.acf?.imgurl}></img>
        </article>
        )
      )}
     </div> 
    </section>
  )
}
