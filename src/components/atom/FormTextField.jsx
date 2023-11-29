import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

const FormTextField = (props) => {
  const [data, setData] = React.useState("");
  const handleChange = (e) => {
    console.log(e.target.name);
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <FormControl sx={{ width: props.width, margin: "2px" }}>
      <TextField
        size="small"
        id="outlined-basic"
        placeholder={props.placeholder}
        variant="outlined"
        value={data}
        name={props.field}
        label={props.field}
        onChange={handleChange}
      />
    </FormControl>
  );
};

export default FormTextField;
