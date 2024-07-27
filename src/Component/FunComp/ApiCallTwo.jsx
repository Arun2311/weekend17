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
      {/* {data.map((das, i) => (
        <div key={i}>
          <h1>{das.title}</h1>
          <img src={das.image} />
          <h3>{das.price}</h3>
        </div>
      ))} */}

      <p className="m-4">
        Lorem ipsum <span className="text-danger">dolor</span> sit amet consectetur, adipisicing elit. Reprehenderit
        vel repudiandae error numquam consequuntur quasi nobis odit inventore
        non, ab aspernatur itaque aliquam tenetur veniam rerum nam dolores
        perferendis. Eum?
      </p>
    </div>
  );
}
