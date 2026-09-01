import { query } from '../services/wpGqlA.ts'
import type Cabin from '../interfaces/Cabin.interface.ts'
import { useQuery } from '@apollo/client/react'
import demo from '../assets/json/demo.json'

export default function Cabin() {
  const { loading, error, data } = useQuery(query.cabins)
  if(loading) return <p>Laster Hytter</p>;
  
  //fallback to demo data if no contact back-end
  const wpData: Cabin | undefined = (error || !data) ? demo.data : data

  return (
    <>
    <section className="
      flex
        flex-col
        justify-center
      bg-gradient-to-bl
        from-blue-100
        to-blue-400
    "
    style={{ backgroundImage: `url('${wpData?.posts?.nodes[0]?.hytte.imgurl.node.sourceUrl}')`}}
    >
    <h1 className="
      w-fit
      text-7xl
      p-6
      m-6
      backdrop-blur-md
      rounded-4xl
    "> Hytter</h1>
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
      {wpData.posts?.nodes.map((n: any) => (
        <article id={n.id} className="
          flex
            flex-col
            gap-6
            p-8
          bg-amber-200/10
          rounded-3xl
          drop-shadow-1xl
          backdrop-blur-md
          border-white/25
          " >
          <h2 className="text-4xl">{n.hytte.cabin}</h2>
          <img src={n.hytte.imgurl.node.sourceUrl} className="
          border-4
          border-green-200/10
          rounded-3xl
          aspect-square
          " />
          <p className="
            rounded-3xl
            bg-green-200/10
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
