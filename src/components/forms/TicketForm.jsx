import * as React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import {
  Box,
  Button,
  Grid,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import DropdownComponents from "../atom/DropdownComponents";
import { width } from "@mui/system";
import ModalComponent from "../molecules/ModalComponent";
import { useState } from "react";
import { format } from "date-fns";

const selectSeat = [
  { label: "1", id: 1 },
  { label: "2", id: 2 },
  { label: "3", id: 3 },
  { label: "4", id: 4 },
];

const TicketForm = ({ onBtnBackClick = () => {}, movieData, theatreData }) => {
  const [chooseDropdownData, setChooseDropdownData] = useState("");
  const [chooseDropdownSeat, setChooseDropdownSeat] = useState("");
  const [valueTheater, setValueTheater] = useState(null);
  const [valueSeat, setValueSeat] = useState(null);
  const [valueDate, setValueDate] = useState(null);
  const [valueTime, setValueTime] = useState(null);
  const handleAutoChange = (e, newValue) => {
    setValueTheater(newValue);
    setChooseDropdownData(e.target.innerText);
  };

  const handleAutoChangeSeat = (e, newValue) => {
    setValueSeat(newValue);
    setChooseDropdownSeat(e.target.innerText);
  };

  let theatreDataDropdown = theatreData?.data?.map((item) => {
    let name = item.theatreName;
    let id = item.theatreId;
    return { label: name, theatreId: id };
  });

  const handleOpen = () => {};
  return (
    <Box sx={{ height: "100%", backgroundColor: "#272525" }}>
      <Grid container spacing={5}>
        <Grid
          item
          ls={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "80%",
              color: "#fff",
            }}>
            <Typography>Choose Date</Typography>
            <Box
              sx={{
                border: "1px solid #fff",
                width: "100%",
                padding: "6px 0",
                boxShadow: "0px 0px 33px -2px rgba(0,0,0,1)",
                borderRadius: "5px",
                backgroundColor: "#272525",
                "& .MuiOutlinedInput-root": {
                  //     border: "1px solid red !important",
                  //     color: "#272525",
                  "&:hover": {
                    // border: "1px solid red !important",
                  },
                },
              }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  format="DD-MM-YYYY"
                  label="Choose Date"
                  value={valueDate}
                  onChange={(newValue) =>
                    setValueDate(new Date(newValue)?.toDateString())
                  }
                  disablePast={true}
                  slotProps={{
                    textField: { size: "small" },
                    layout: {
                      sx: {
                        "& .MuiDateCalendar-root": {
                          backgroundColor: "#272525",
                          color: "#fff",
                        },
                        "& .MuiButtonBase-root": {
                          color: "#fff",
                        },
                        "& .MuiInputBase-input": {
                          color: "#fff",
                          border: "1px solid #455448",
                        },
                        "& .MuiTypography-root": {
                          color: "#fff",
                        },
                        "& .Mui-selected": {
                          backgroundColor: "#fff !important",
                          border: "1px solid #455448",
                          color: "#272525 !important",
                        },
                      },
                    },
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiFormLabel-root": {
                      color: "#fff",
                    },
                    "& label.Mui-focused": {
                      color: "#fff",
                    },
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#252525",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          ls={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "80%",
              color: "#fff",
            }}>
            <Typography>Choose Time</Typography>
            <Box
              sx={{
                border: "1px solid #fff",
                width: "100%",
                padding: "6px 0",
                boxShadow: "0px 0px 33px -2px rgba(0,0,0,1)",
                borderRadius: "5px",
                backgroundColor: "#272525",
                "& .MuiTextField-root": {
                  border: "0px solid #272525 !important",
                  "&:hover": {
                    border: "0px solid #292525 !important",
                  },
                },
              }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileTimePicker
                  value={valueTime}
                  onChange={(newValue) => {
                    setValueTime(format(new Date(newValue), "HH:mm a"));
                  }}
                  format="hh:mm a"
                  label="Show Time"
                  slotProps={{
                    textField: { size: "small" },
                    actionBar: {
                      actions: ["today"],
                    },
                    layout: {
                      sx: {
                        width: "50px",
                        "& .MuiTimeClock-root": {
                          backgroundColor: "#272525",
                          color: "#fff",
                        },
                        "& .MuiPickersToolbar-root": {
                          backgroundColor: "#272525",
                          color: "#fff",
                        },
                        "& .MuiTypography-root": {
                          backgroundColor: "#272525",
                          color: "#fff",
                        },
                        "& .MuiDialogActions-root": {
                          backgroundColor: "#272525",
                          color: "#fff !important",
                        },
                        "& .MuiButtonBase-root": {
                          color: "#fff !important",
                        },
                        "& .MuiClock-pin": {
                          backgroundColor: "#fff !important",
                        },
                        "& .MuiClockPointer-root": {
                          backgroundColor: "#fff !important",
                        },
                        "& .MuiClockPointer-thumb": {
                          backgroundColor: "#fff !important",
                        },
                      },
                    },
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiFormLabel-root": {
                      color: "#fff",
                    },
                    "& label.Mui-focused": {
                      color: "#fff",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#272525",
                      "&.Mui-focused fieldset": {
                        borderColor: "#272525",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          ls={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}>
          <DropdownComponents
            label={"Choose Theatre"}
            options={theatreDataDropdown}
            onAutoChange={handleAutoChange}
            value={valueTheater}
          />
        </Grid>
        <Grid
          item
          ls={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}>
          <DropdownComponents
            label={"Select Seat"}
            options={selectSeat}
            onAutoChange={handleAutoChangeSeat}
            value={valueSeat}
          />
        </Grid>
      </Grid>
      <Box
        spacing={5}
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "94.5%",
          margin: "3% 0.5%",
        }}>
        <Button
          onClick={onBtnBackClick}
          sx={{
            padding: "0.5% 50px",
            borderRadius: "10px",
            color: "black",
            marginRight: "10px",
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#252525",
              color: "#fff",
            },
          }}
          variant="contained">
          Back
        </Button>
        <ModalComponent
          movieData={movieData}
          chooseDropdownData={chooseDropdownData}
          valueTime={valueTime}
          valueDate={valueDate}
          chooseDropdownSeat={chooseDropdownSeat}
          valueTheater={valueTheater}
          valueSeat={valueSeat}
          handleOpen={handleOpen}
        />
      </Box>
    </Box>
  );
};

export default TicketForm;
