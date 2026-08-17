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
    <section className="
      flex
        flex-col
        justify-center
      bg-gradient-to-bl
        from-blue-100
        to-blue-400
    ">
    <h1 className="text-7xl text-center"> Hytter</h1>
    <div className="
      flex
        flex-col
      lg:grid
        gap-4
        m-8
        grid-cols-2
        align-items-end
        justify-items-start
    ">
      {wpData.posts.nodes.map((n: any) => (
        <article id={n.id} className="
          flex
            flex-col
            gap-6
            p-8
          bg-amber-500/30
          rounded-3xl
          drop-shadow-1xl
          ">
          <h2 className="text-4xl">{n.hytte.cabin}</h2>
          <img src={n.hytte.imgurl.node.sourceUrl} className="
          border-4
          border-green-200/50
          rounded-3xl
          aspect-square
          " />
          <p className="
            rounded-3xl
            bg-green-200/50
            text-center
            p-4
          ">{n.hytte.description}</p>
          <h3 className="text-2xl">{n.hytte.price}Kr</h3>
        </article>
      ))}
     </div> 
    </section>
    </>
  )
}
