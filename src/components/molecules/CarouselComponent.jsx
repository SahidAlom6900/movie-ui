import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import Box from "@mui/material/Box";
import movieImg  from "../../constants/movieImg";

const CarouselComponent = () => {
  return (
    <Carousel>
      {movieImg?.map((image, index) => (
        <Carousel.Item key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0",
            }}>
            <img
              style={{
                width: "95%",
                height: "calc(1000px - 650px)",
                borderRadius: "25px",
                boxShadow: "-1px 2px 23px -6px rgba(0,0,0,0.75)",
              }}
              variant="top"
              src={image.imgPath}
              alt={image.label}
            />
          </Box>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
