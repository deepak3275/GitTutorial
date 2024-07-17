
import axios from "axios"

const url = 'https://api.unsplash.com/search/photos?client_id=dpKH9LTHmtJeegqCXJ2uoA9qVtKBN4dXXQ0xVl4brj0&query=office';


const Gallery = () => {

  const response = ({
    queryKey: ['images'],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  })
    console.log(response)

  return (
    <div>
      Gallery
    </div>
  )
}

export default Gallery
