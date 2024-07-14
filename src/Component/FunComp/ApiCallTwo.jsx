import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApiCallTwo() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    handlefetch();
  }, []);

  const handlefetch = async () => {
    const resposne = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );

    setdata(resposne?.data);
  };

  return (
    <div>
      {data.map((das, i) => (
        <div key={i}>
          <h1>{das.title}</h1>
          <img src={das.image}/>
          <h3>{das.price}</h3>


        </div>
      ))}
    </div>
  );
}
