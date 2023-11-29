import * as React from "react";
import { Box, Grid } from "@mui/material";
import ImageLogin from "../assets/movie_login.png";
import LoginForm from "../components/forms/LoginForm";
import ButtonComponent from "../components/atom/ButtonComponent";

const LoginPage = () => {
  return (
    <Box
      sx={{
        color: "white",
        "& .MuiInputBase-root": {
          color: "white",
        },
      }}>
      <Grid container>
        <Grid item lg={7} xs={12} md={7} sm={9}>
          <Box
            sx={{
              backgroundImage: `url(${ImageLogin})`,
              backgroundRepeat: "no-repeat",
              height: "100vh",
              backgroundSize: "cover",
            }}></Box>
        </Grid>
        <Grid item lg={5} xs={12} md={5} sm={3}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
