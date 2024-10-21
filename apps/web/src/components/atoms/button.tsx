import { Button } from "@mui/material";
import React from "react";

const MuiButton = ({ label, icon, variant, ...rest }: any) => {
  return (
    <Button
      variant={variant}
      startIcon={icon}
      sx={{
        fontSize: "14px",
        textTransform: "inherit",
        borderColor: "#0000003b",
      }}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default MuiButton;
