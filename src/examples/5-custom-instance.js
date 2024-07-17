import { useEffect } from "react"

import authFetch from '../axios/Custom';
import axios from "axios";


const randomUserUrl = 'https://www.randomser.me/api';


const Custominstance = () => {
    const fetchDate = async () => {
        try {
          const resp1 = await authFetch('/react-store-products')
          const resp2 = await axios(randomUserUrl)

        } catch (error) {}
    };

    useEffect(() => {
        fetchDate();
    }, [])


    return (
        <h2 className="text-center">custom instance</h2>
    )
}


export default Custominstance;
