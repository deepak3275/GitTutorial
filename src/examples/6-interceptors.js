import { useEffect } from "react";


const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await(url)
      console.log(resp)
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [])


  return <h2 className="text-center">Interceptors</h2>
};

export default Interceptors;