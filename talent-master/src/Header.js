// Header.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Menu, MenuItem } from "@mui/material";
import photo from './images/photologo.jpg';
import photoone from './images/photo2.jpg';

function Header() {
  const navigate = useNavigate();

  // ====== Talent Marquee Dropdown State ======
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleClose();
  };
  // ============================================

  return (
    <>
      {/* Logo */}
      <Container sx={{ textAlign: "center", marginTop: 3, marginBottom: 2 }}>
        <img 
          src={photo} 
          alt="Logo" 
          style={{ maxWidth: "280px" }}
        />
      </Container>

      {/* Navigation Header */}
      <AppBar position="static" sx={{ backgroundColor: "#f97316", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "center", gap: 4 }}>
          <Button onClick={() => navigate("/")} sx={{ color: "#fff", fontWeight: 600, textTransform: "none" }}>
            Home
          </Button>
          <Button onClick={() => navigate("/tiers")} sx={{ color: "#fff", fontWeight: 600, textTransform: "none" }}>
            Tier
          </Button>
          <Button onClick={() => navigate("/enter-now")} sx={{ color: "#fff", fontWeight: 600, textTransform: "none" }}>
            Enter Now
          </Button>

          {/* Talent Marquee Dropdown */}
          <Button
            sx={{ color: "#fff", fontWeight: 600, textTransform: "none" }}
            onClick={handleClick}
          >
            Talent Marquee
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={() => handleNavigate("/gold-medal")}>Gold Medal Talents</MenuItem>
            <MenuItem onClick={() => handleNavigate("/silver-medal")}>Silver Medal Talents</MenuItem>
            <MenuItem onClick={() => handleNavigate("/bronze-medal")}>Bronze Medal Talents</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
