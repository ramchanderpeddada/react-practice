import { Card } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "./App.css";

function Comments() {
  //using useQuery = replacing useEffect 
  const { data } = useQuery("comments", () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?_limit=50`)
      .then((res) => res.data)
  );
  console.log(data, "coments");
  return (
    <>
      <h1>Comments using query </h1>
      <ul
        style={{
          display: "grid",
          margin: "10px",
          gap: "20px",
          gridTemplateColumns: "1fr ",
        }}
      >
        {data &&
          data.map(({ id, name, body }) => (
            <Card
              key={id}
              sx={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                gap: "10px",
                backgroundColor: "lightblue",
              }}
            >
              <h4>Name: {name}</h4>
              <p>Comment: {body}</p>
            </Card>
          ))}
      </ul>
    </>
  );
}

export default Comments;
