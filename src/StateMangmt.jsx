import { Box, Card, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function StateMangmt() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    city: "",
    country: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Card
        sx={{
          padding: "30px",
          width: "500px",
          gap: "30px",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightcoral",
        }}
      >
        <Typography variant="h4">Multiple State Management</Typography>
        <form>
          <Stack gap={2}>
            <TextField
              variant="outlined"
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              type="text"
              placeholder="City"
              name="city"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              type="text"
              placeholder="Country"
              name="country"
              onChange={handleChange}
            />
          </Stack>
        </form>
        <Typography variant="h4">Name:{user.name}</Typography>
        <Typography variant="h4">Username:{user.username}</Typography>
        <Typography variant="h4">Email:{user.email}</Typography>
        <Typography variant="h4">Pasword:{user.password}</Typography>
        <Typography variant="h4">city:{user.city}</Typography>
        <Typography variant="h4">Country:{user.country}</Typography>
      </Card>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "end",
          justifyContent: "end",
        }}
      ></Box>
    </Box>
  );
}
