import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import TicketForm from "../components/forms/TicketForm";
import Topbar from "../components/organisms/Topbar";
import getAllMovieThreater from "../services/threater";

const TicketPage = ({ onBtnBackClick = () => {}, movieData }) => {
  const [theatreData, setTheatreData] = useState([]);
  useEffect(() => {
    const theatre = async () => {
      const {data,errRes} = await getAllMovieThreater();
      setTheatreData(data);
    };
    theatre();
  }, []);
  
  return (
    <Box
      sx={{
        backgroundColor: "#272525",
        height: "100vh",
        "& .MuiInputBase-root": {
          color: "white",
        },
      }}>
      <Box sx={{ paddingTop: "20vh" }}>
        <TicketForm
          onBtnBackClick={onBtnBackClick}
          movieData={movieData}
          theatreData={theatreData}
        />
      </Box>
    </Box>
  );
};
export default TicketPage;
