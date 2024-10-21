import * as React from "react";
import { TextField } from "@mui/material";

export default function MuiInput(props: any) {
  return (
    <TextField
      sx={{
        boxShadow: "none",
        background: "#fff",
        ".MuiInputBase-input": { padding: "10px", fontSize: "14px" },
        ".MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#0000003b !important",
        },
        ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#0000003b !important",
        },
      }}
      {...props}
    />
  );
}
