import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <>
      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#bbb",
          textAlign: "center",
          paddingTop: 3,
          paddingBottom: 3,
          fontSize: "14px",
          position: "relative"
        }}
      >
        © 2019, WowCelebration. All rights reserved
      </Box>

      {/* Scroll To Top Button */}
      <Box
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          right: 20,
          bottom: 20,
          width: 40,
          height: 40,
          backgroundColor: "#f97316",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          borderRadius: "4px",
          zIndex: 999,
          "&:hover": {
            backgroundColor: "#ea580c"
          }
        }}
      >
        <KeyboardArrowUpIcon sx={{ color: "#fff", fontSize: 22 }} />
      </Box>
    </>
  );
}

export default Footer;
