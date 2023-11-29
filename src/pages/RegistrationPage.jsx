import * as React from "react";
import { Box, Grid } from "@mui/material";
import ImageReg from "../assets/movie_reg.png";
import RegistrationForm from "../components/forms/RegistrationForm";

const RegistrationPage = () => {
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
              backgroundImage: `url(${ImageReg})`,
              backgroundRepeat: "no-repeat",
              height: "100vh",
              backgroundSize: "cover",
            }}></Box>
        </Grid>
        <Grid item lg={5} xs={12} md={5} sm={3}>
          <RegistrationForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationPage;
