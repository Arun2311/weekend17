import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ApiCallTwo() {

  let navigate = useNavigate();

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


  const handlepush = ()=>{

   let aaa=  JSON.stringify(data)
    
    navigate(`/form?arun="shdsahdhi2387347843894798"&data=${aaa}`, {state :{data:data,name:"arun"}})



  }




//   useEffect(()=>{
//  window.location.assign("https://www.instagram.com/accounts/login")
//   },[])


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


      <div>
        <button onClick={handlepush}>Login</button>
    </div>
    </div>
  );
}
