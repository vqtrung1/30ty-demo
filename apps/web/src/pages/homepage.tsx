import * as React from "react";
import { Typography, Container, Box, FormControl } from "@mui/material";
import MuiSelect from "../components/atoms/select";
import MuiTable from "../components/molecules/default-table";
import MuiInput from "../components/atoms/input";
import { FilterAlt } from "@mui/icons-material";
import MuiButton from "../components/atoms/button";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ my: "30px" }}>
      <Box
        gap={32}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <div>
          <Typography
            variant="h5"
            fontWeight="bold"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            列車リストはどこかにある
          </Typography>

          <Typography
            variant="caption"
            fontWeight="600"
            color="#0009"
            component="div"
            sx={{ pt: 0.5 }}
          >
            列車リストはどこかにある
          </Typography>
        </div>

        <FormControl sx={{ maxWidth: 200, width: "100%" }}>
          <MuiSelect />
        </FormControl>
      </Box>

      <Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <FormControl sx={{ maxWidth: 200, width: "100%" }}>
            <MuiSelect />
          </FormControl>

          <FormControl sx={{ maxWidth: 200, width: "100%" }}>
            <MuiSelect />
          </FormControl>

          <FormControl sx={{ maxWidth: 200, width: "100%" }}>
            <MuiInput type={"date"} />
          </FormControl>

          <MuiButton variant="outlined" label="Filter" icon={<FilterAlt />} />
        </Box>

        <MuiTable />
      </Box>
    </Container>
  );
}
