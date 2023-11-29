import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { color } from "@mui/system";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useEffect } from "react";
import getAllMovieThreater from "../../services/threater";
import bookMovie from "../../services/bookMovie";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  backgroundColor: "#292727",
  color: "#fff",
};

const ModalComponent = ({
  movieData = {},
  chooseDropdownData,
  valueTime = null,
  valueDate = null,
  chooseDropdownSeat,
  handleOpen = () => {},
  valueSeat = {},
  valueTheater = {},
}) => {
  const [open, setOpen] = React.useState(false);
  const [total, setTotal] = React.useState(false);
  handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTotal(movieData?.ticketPrice * chooseDropdownSeat);
  });

  const handleClick10 = () => {
    if (movieData?.ticketPrice * chooseDropdownSeat > 1000) {
      setTotal(movieData?.ticketPrice * chooseDropdownSeat * (1 - 0.1));
    }
  };

  const handleClick15 = () => {
    if (movieData?.ticketPrice * chooseDropdownSeat > 1500) {
      setTotal(movieData?.ticketPrice * chooseDropdownSeat * (1 - 0.15));
    }
  };

  const handleProcced = () => {
    let theatreId = valueTheater?.theatreId;
    let movieId = movieData?.movieId;
    let seatCount = valueSeat?.id;
    let bookingAmount = total;

    let payload = {
      theatreId,
      movieId,
      seatCount,
      bookingAmount,
      bookingTime: valueTime,
      bookingDate: valueDate,
    };
    bookMovie(payload);
    console.log("payload ", payload);
  };

  return (
    <div>
      <Button
        sx={{
          color: `${
            chooseDropdownData?.length > 0 &&
            chooseDropdownSeat?.length > 0 &&
            valueDate?.length > 0 &&
            valueTime?.length > 0
              ? "black"
              : "white"
          }`,
          backgroundColor: `${
            chooseDropdownData?.length > 0 &&
            chooseDropdownSeat?.length > 0 &&
            valueDate?.length > 0 &&
            valueTime?.length > 0
              ? "#fff"
              : "gray"
          }`,
          borderRadius: "10px",
          padding: "10px 50px",
          margin: "0",
          "&:hover": {
            color: "#FFF",
            backgroundColor: "#252525",
            boxShadow: "0px 0px 33px -2px rgba(0,0,0,.5)",
          },
        }}
        disabled={
          chooseDropdownData?.length > 0 &&
          chooseDropdownSeat?.length > 0 &&
          valueDate?.length > 0 &&
          valueTime?.length > 0
            ? false
            : true
        }
        onClick={handleOpen}>
        Next
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box
            sx={{
              padding: "8px 24px",
              borderBottom: "1px solid white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Typography>Invoice</Typography>
            <IconButton onClick={handleClose} sx={{ color: "white" }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              padding: "16px 24px",
              borderBottom: "1px solid white",
              fontWeight: "light",
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography variant="p" sx={{ marginTop: "5px" }}>
              Movie Name:
              <span style={{ fontWeight: "bold", padding: "0 5px" }}>
                {movieData?.movieName}
              </span>
            </Typography>
            <Typography variant="p" sx={{ marginTop: "5px" }}>
              Theater Name:
              <span style={{ fontWeight: "bold", padding: "0 5px" }}>
                {chooseDropdownData}
              </span>
            </Typography>
            <Typography variant="p" sx={{ marginTop: "5px" }}>
              No. Of Seats:{" "}
              <span style={{ fontWeight: "bold", padding: "0 5px" }}>
                {chooseDropdownSeat}
              </span>
            </Typography>
            <Box
              sx={{
                backgroundColor: "rgb(47, 46, 46)",
                margin: "1rem 0 3rem 0",
              }}>
              <Typography
                sx={{
                  backgroundColor: "#fff",
                  color: "rgba(0,0,0,0.7)",
                  padding: "5px 5px 5px 10px",
                  fontSize: "14px",
                }}>
                Apply Promo Code
              </Typography>
              <Box
                sx={{
                  padding: "5px 5px 5px 10px",
                  margin: "10px",
                  borderBottom: ".5px solid rgba(255,255,255,.5)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography variant="p" fontSize={"20px"}>
                  10%
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    wordWrap: "break-word",
                    width: "18rem",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                  }}>
                  Applicable only if total amount is above <br />
                  1,000 Rs
                </Typography>
                <Button
                  sx={{
                    color: "black",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#252525",
                      color: "#fff",
                    },
                  }}
                  onClick={handleClick10}
                  variant="contained">
                  Apply
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "5px 5px 5px 10px",
                  margin: "10px",
                  borderBottom: "1px solid rgba(255,255,255,.5)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography variant="p" fontSize={"20px"}>
                  15%
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    wordWrap: "break-word",
                    width: "18rem",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.5)",
                  }}>
                  Applicable only if total amount is above
                  <br /> 1,500 Rs
                </Typography>
                <Button
                  sx={{
                    color: "black",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    "&:hover": {
                      backgroundColor: "#252525",
                      color: "#fff",
                    },
                  }}
                  onClick={handleClick15}
                  variant="contained">
                  Apply
                </Button>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <Typography variant="p">Total Payable Amout:</Typography>
              <Typography>
                <CurrencyRupeeIcon fontSize="small" />
                {total} /-
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "8px 24px",
              display: "flex",
              justifyContent: "center",
            }}>
            <Button
              variant="contained"
              onClick={handleProcced}
              sx={{
                padding: "2% 25%",
                color: "#fff",
                backgroundColor: "#282929",
                border: "1px solid white",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#252525",
                },
              }}>
              Procced
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
