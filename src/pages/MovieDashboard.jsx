import * as React from "react";
import { Box } from "@mui/material";
import MovieCard from "../components/molecules/MovieCard";
import movieImg from "../constants/movieImg";
import CarouselComponent from "../components/molecules/CarouselComponent";
import { useState } from "react";
import { useEffect } from "react";
import getAllMovies from "../services/movie";
import Topbar from "../components/organisms/Topbar";

const MovieDashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataa = async () => {
      const { datas, errRes } = await getAllMovies();
      setData(datas);
    };
    dataa();
  }, []);
  console.log(data);
  return (
    <Box
      sx={{
        backgroundColor: "#272525",
        "& .MuiInputBase-root": {
          color: "white",
        },
      }}>
      <Topbar />
      <MovieCard images={data} />
    </Box>
  );
};

export default MovieDashboard;
