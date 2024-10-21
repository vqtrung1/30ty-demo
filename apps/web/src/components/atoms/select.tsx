import * as React from "react";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function MuiSelect(props: any) {
  const [age, setAge] = useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <Select
      value={age}
      onChange={handleChange}
      displayEmpty
      sx={{
        boxShadow: "none",
        fontSize: "14px",
        background: "#fff",
        ".MuiSelect-select": { padding: "10px" },
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#0000003b",
        },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#0000003b",
          },
      }}
      {...props}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
}
