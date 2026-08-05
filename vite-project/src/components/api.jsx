import React from "react";
import { useEffect , useState} from "react";
 const Api = () => {
  const [Data, setData] = useState([0]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((Data) => setData( Data));
  }, []);
  return (
    <div>
      {Data.map((item) => {
        return (
          <div key={item.id}>
            <h6>{item.name}</h6>
            <h6>{item.email}</h6>
            <h6>{item.phone}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
