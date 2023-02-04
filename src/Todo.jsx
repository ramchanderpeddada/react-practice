import { Card, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

function Todo() {
  const { data } = useQuery("todo", () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=50`)
      .then((res) => res.data)
  );
  return (
    <div>
      <h1>Todo</h1>
      <ul
        style={{
          display: "grid",
          margin: "10px",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {data &&
          data.map(({ id, title, completed }) => (
            <Card
              key={id}
              sx={{
                display: "flex",
                padding: "20px",
                flexDirection: "column",
                gap: "10px",
                backgroundColor: "#ffeb3b",
              }}
            >
              <h4>Title: {title}</h4>
              <Typography
                variant="h6"
                sx={{
                  color: completed ? "green" : "red",
                  textTransform: "uppercase",
                }}
              >
                {completed ? "true" : "false"}
              </Typography>
            </Card>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
