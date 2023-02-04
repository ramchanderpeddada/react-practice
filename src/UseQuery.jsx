import { Box, Card } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import "./App.css";

export default function UseQueryHook() {
  const { data, error } = useQuery("Posts", () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=50`)
      .then((res) => res.data)
  );

  return (
    <>
      <div className="App">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <h1>API Posts using useQuery library</h1>
        </Box>
        <Box>
          {error && <div>{`Error to fetch the data!! - ${error}`}</div>}
          <ul>
            {data &&
              data.map(({ id, title }) => (
                <Card
                  key={id}
                  sx={{
                    display: "flex",
                    padding: "20px",
                    width: "300px",
                  }}
                >
                  <h3>{title}</h3>
                </Card>
              ))}
          </ul>
        </Box>
      </div>
    </>
  );
}
