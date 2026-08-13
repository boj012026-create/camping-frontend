import { query } from '../services/wpGqlA.ts'
import type CabinInterface from '../interfaces/Cabin.interface.ts'
import { useQuery } from '@apollo/client/react'

export default function Cabin() {
  const { loading, error, data } = useQuery(query.cabins)
  const wpData = data as CabinInterface | undefined;
  if(loading) return <p>Laster Hytter</p>;
  if(error) return <p>Feil ved lasting</p>


  //test();

  return (
    <>
    <section className="flex flex-col justify-center">
    <h1 className="text-7xl text-center"> Hytter</h1>
    <div className="grid grid-cols-2 align-items-end justify-items-start">
      {wpData.posts.nodes.map((n: any) => (
        <article id={n.id} className="">
          <h2 className="text-4xl">{n.hytte.cabin}</h2>
          <img src={n.hytte.imgurl.node.sourceUrl} />
          <p>{n.hytte.description}</p>
          <h3 className="text-2xl">{n.hytte.price}Kr</h3>
        </article>
      ))}
     </div> 
    </section>
    </>
  )
}
