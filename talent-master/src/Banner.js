// Banner.js
import React from "react";
import { Container, Box } from "@mui/material";
import photo from './images/photologo.jpg';
import photoone from './images/photo2.jpg';

function Banner() {
  return (
    <>
      {/* Logo Section */}
      <Container sx={{ textAlign: "center", marginTop: 3, marginBottom: 2 }}>
        <img 
          src={photo} 
          alt="Logo" 
          style={{ maxWidth: "280px" }}
        />
      </Container>

      {/* Banner Image */}
      <Box sx={{ marginTop: 2 }}>
        <img 
          src={photoone} 
          alt="Banner" 
          width="100%" 
          style={{ display: "block" }}
        />
      </Box>
    </>
  );
}

export default Banner;
