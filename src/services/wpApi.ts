import axios from 'axios'

const url: string = "/wp-json/wp/v2/posts";

axios
  .get(url)
  .then(res => console.log(res))
