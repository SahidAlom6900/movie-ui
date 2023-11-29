import { Button, TextField, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import { userRegistraton } from "../../services/registration";
import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/Link.css";

const RegistrationForm = () => {
  const [data, setData] = React.useState({
    userName: "",
    userEmail: "",
    userContactNumber: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { datas, errRes } = await userRegistraton(data, null);
    console.log(errRes);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        background:
          "transparent linear-gradient(270deg, #2D0102 0%, #2E0102 100%) 0% 0% no-repeat padding-box",
        height: "100vh",
      }}>
      <Typography variant="h5" sx={{ margin: "10px" }}>
        REGISTER
      </Typography>
      <TextField
        size="small"
        variant="standard"
        value={data.userName}
        name="userName"
        label="Full Name"
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
        variant="standard"
        value={data.userContactNumber}
        name="userContactNumber"
        label="Phone Number"
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
        Register
      </Button>
      <Typography variant="p" sx={{ margin: "20px" }}>
        Already Have An Account?{" "}
        <Link to="/login" className="login-link">
          Login Here
        </Link>
      </Typography>
    </Box>
  );
};
export default RegistrationForm;
