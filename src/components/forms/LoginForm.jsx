import React, { useEffect, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { UserLogin } from "../../services/login";
import "../../styles/Link.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [data, setData] = useState({
    userEmail: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { datas, errRes } = await UserLogin(data, null);
    if (!datas?.error && datas?.data != null) {
      navigate("/movie");
    }
  };

  useEffect(() => {}, [data]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: "#fff",
        background:
          "transparent linear-gradient(270deg, #2D0102 0%, #2E0102 100%) 0% 0% no-repeat padding-box",
      }}>
      <Typography variant="h5" sx={{ margin: "10px" }}>
        LOGIN
      </Typography>
      <TextField
        size="small"
        variant="standard"
        value={data.userEmail}
        name="userEmail"
        label="E-mail ID"
        sx={{
          padding: "0",
          margin: "10px",
          width: "80%",
          borderBottom: "2px solid #fff",
          "& .MuiFormLabel-root": {
            color: "#fff",
          },
        }}
        onChange={handleChange}
      />
      <TextField
        size="small"
        type="password"
        variant="standard"
        value={data.password}
        name="password"
        label="Password"
        sx={{
          padding: "0",
          margin: "10px",
          width: "80%",
          borderBottom: "2px solid #fff",
          "& .MuiFormLabel-root": {
            color: "#fff",
          },
        }}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{
          margin: "10px",
          width: "50%",
          height: "50px",
          fontSize: "16px",
          borderRadius: "10px",
          backgroundColor: "white",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#fff  ",
          },
          color: "black",
        }}
        onClick={handleSubmit}>
        Login
      </Button>
      <Typography variant="p" sx={{ margin: "20px" }}>
        Don't Have An Account?
        <Link to="/registration" className="login-link">
          Register Here
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
