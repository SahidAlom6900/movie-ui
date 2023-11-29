import React from "react";
import { Button } from "@mui/material";

const ButtonComponent = ({ onBtnClick = () => {} }) => {
  return (
    <Button
      variant="contained"
      onClick={onBtnClick}
      sx={{
        margin: "10px",
        width: "70%",
        height: "50px",
        fontSize: "16px",
        borderRadius: "10px",
        color: "#ffffff",

        backgroundColor: "#ffffff33",
        border: "1px solid #ffffff",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#ffffff33",
          border: "1px solid #ffffff",
        },
      }}>
      Book Show
    </Button>
  );
};

export default ButtonComponent;
