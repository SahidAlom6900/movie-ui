import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonComponent from "../atom/ButtonComponent";
import img from "../../assets/movie-img/1.png";
import { Box, Grid } from "@mui/material";
import TicketForm from "../forms/TicketForm";
import CarouselComponent from "./CarouselComponent";
import TicketPage from "../../pages/TicketPage";

export default function MovieCard({ images }) {
  const [movieCheckout, setMovieCheckout] = useState(false);
  const [movieData, setMovieData] = useState({});
  const handleClick = (e, image) => {
    setMovieData(image);
    setMovieCheckout(!movieCheckout);
  };

  const onClickBack = (e) => {
    setMovieCheckout(!movieCheckout);
  };



  return movieCheckout ? (
    <TicketPage onBtnBackClick={onClickBack} movieData={movieData} />
  ) : (
    <Box sx={{ margin: "60px 0 0 0" }}>
      <CarouselComponent />
      <Grid container>
        {images?.data?.map((image, index) => (
          <Grid
            key={index}
            item
            lg={3}
            xs={12}
            md={4}
            sm={6}
            sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{ width: 250, margin: "25px 0", backgroundColor: "#272525" }}>
              <CardMedia
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  height: 300,
                  borderRadius: "15px",
                }}
                image={image.moviePoster}
                title="green iguana">
                <ButtonComponent onBtnClick={(e) => handleClick(e, image)} />
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
