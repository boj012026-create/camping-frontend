export default interface Cabin {
  id: number
  title: {
   rendered: string
  }
  acf: {
    name: string
    price: number
    description: string
    imgurl: string
  }
}
