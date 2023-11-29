import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";

export default function DropdownComponents({
  label = null,
  options = [],
  onAutoChange = () => {},
  value = null,
}) {
  return (
    <Box
      sx={{
        width: "80%",
        color: "#fff",
      }}>
      <Typography>{label}</Typography>
      <Box
        sx={{
          border: "1px solid #fff",
          width: "100%",
          padding: "6px 0",
          boxShadow: "0px 0px 33px -2px rgba(0,0,0,1)",
          borderRadius: "5px",
          backgroundColor: "#272525",
        }}>
        <Autocomplete
          size="small"
          value={value}
          onChange={onAutoChange}
          disablePortal
          id="combo-box-demo"
          options={options}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          sx={{
            width: "100%",
            "& label.Mui-focused": {
              color: "#fff",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#272525",
              },
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              sx={{
                "& .MuiFormLabel-root": {
                  color: "#fff",
                },
              }}
            />
          )}
          PaperComponent={({ children }) => {
            return (
              <Paper
                sx={{
                  backgroundColor: "#272525",
                  "& ::-webkit-scrollbar": {
                    width: "5px",
                    backgroundColor: "#fff",
                  },
                  "& ::-webkit-scrollbar-thumb": {
                    backgroundColor: "#000",
                  },
                }}>
                <Typography color="#fff"> {children}</Typography>
              </Paper>
            );
          }}
        />
      </Box>
    </Box>
  );
}
