import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Memebate() {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      setLoading(true);
      setIsError(false);
      try {
        const resp = await axios.get(`/media/${id}`);
        console.log(resp);
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
  }, [id]);

  return (
    <div className="memebate">
      <div className="subject">
        <div className="title">
          <h1>{data.title}</h1>
          <div className="tags">
            <div className="tag">
              {data.category}
            </div>
            <div className="tag">
              {data.format}
            </div>
          </div>
        </div>
        <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${
                  data?.debate?.indexOf("=") > -1 ? data?.debate?.split("=")[1] : data.debate
                }`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
      </div>
    </div>
  );
}

export default Memebate;
