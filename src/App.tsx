import { useEffect, useState } from 'react'
import type CabinInterface from './interfaces/Cabin.interface.ts'
import hrp from 'html-react-parser';
import Cabin from './components/Cabin.tsx'

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
     <Cabin />
    </>
  )
}

export default App
