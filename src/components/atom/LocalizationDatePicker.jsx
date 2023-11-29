import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const LocalizationDatePicker = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          "& .MuiInputBase-input": {
            padding: "6.5px 14px",
            size: "small",
          },
          "& .MuiButtonBase-input": {
            margin: "0",
          },
        }}
        format="DD-MM-YYYY"
      />
    </LocalizationProvider>
  );
};

export default LocalizationDatePicker;
