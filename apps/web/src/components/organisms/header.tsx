import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import {
  Container,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Breadcrumbs,
  Link,
  Box,
} from "@mui/material";

const Header: React.FC = () => {
  return (
    <>
      <MainHeader />
      <SubHeader />
    </>
  );
};

const MainHeader = () => {
  return (
    <AppBar
      position="static"
      sx={{ mr: 2, bgcolor: "#fff", color: "#000", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ padding: "0px !important" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "grey" }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            J R T T
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ fontSize: "14px" }}
          >
            Username <AccountCircle sx={{ ml: "10px", color: "grey" }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const SubHeader = () => {
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <Box
      sx={{
        bgcolor: "#e7ecf1",
        padding: "10px 0px",
      }}
    >
      <Container maxWidth="xl">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ fontSize: "14px" }}>
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography sx={{ color: "text.primary", fontSize: "14px" }}>
              Breadcrumbs
            </Typography>
          </Breadcrumbs>
        </div>
      </Container>
    </Box>
  );
};

export default Header;
