// import "./styles.css";
import { Card } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/posts?_limit=50`)
        .then((res) => res.data);
      setData(response);
      console.log(response, "data");
    };
    getData();
  }, []);

  return (
    <div>
      <>
        <h1>API Posts</h1>
        <ul>
          {data &&
            data.map(({ id, title }) => (
              <Card
                key={id}
                sx={{
                  display: "flex",
                  padding: "20px",
                  width: "300px",
                  backgroundColor: "lightgray",
                }}
              >
                <h3>{title}</h3>
              </Card>
            ))}
        </ul>
      </>
    </div>
  );
}
