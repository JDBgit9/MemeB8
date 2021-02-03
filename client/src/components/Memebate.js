import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function Memebate() {
    let {id}=useParams();
    const [loading, setLoading]=useState(false)
    const [isError, setIsError]=useState(false)
    const [data, setData]=useState([])
    useEffect(()=> {
        let ignore = false;
        async function fetchData() {
            setLoading(true);
            setIsError(false);
            try {
              const resp = await axios.get(`/media/${id}`);
              console.log(resp)
              if (!ignore) setData(resp.data);
            } catch (error) {
              console.error(error);
              setIsError(true);
            }
            setLoading(false);
          }
           fetchData();
          return () => {
            ignore = true;
          };
    }, [id])

    return (

        <div className="memebate">
            <div className="subject">
              <h1>Title</h1>
            </div>
        </div>
    )
}

export default Memebate
