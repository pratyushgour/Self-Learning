import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setData(res);
//       });
//   }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-400 text-white text-2xl">
        Github: {data.followers}
      </div>
      <img src={data.avatar_url} alt="Git Picture" />
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
