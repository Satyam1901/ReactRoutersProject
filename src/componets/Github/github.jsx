import { useEffect, useState } from "react";


function github() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://api.github.com/users/Satyam1901")
        .then((Response) => Response.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }, []);
    
  return (
    <div className="m-4 text-3xl text-center text-white bg-gray-700">
      Github Followers:{data.followers}
    </div>
    
  );
}

export default github;
