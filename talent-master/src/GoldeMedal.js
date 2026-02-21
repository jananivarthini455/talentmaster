import React, { useState } from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

// Import your 6 images
import image1 from './images/img1.jpg';
import image2 from './images/img3.jpg';
import image3 from './images/img4.jpg';
import image4 from './images/img5.jpg';
import image5 from './images/img6.jpg';
import image6 from './images/img1.jpg';

function GoldMedal() {
  const [votes, setVotes] = useState({
    image1: 0,
    image2: 0,
    image3: 0,
    image4: 0,
    image5: 0,
    image6: 0,
  });

  const handleVote = (key) => {
    setVotes(prev => ({
      ...prev,
      [key]: prev[key] + 1
    }));
  };

  const images = [
    { key: "image1", src: image1, name: "Talent 1" },
    { key: "image2", src: image2, name: "Talent 2" },
    { key: "image3", src: image3, name: "Talent 3" },
    { key: "image4", src: image4, name: "Talent 4" },
    { key: "image5", src: image5, name: "Talent 5" },
    { key: "image6", src: image6, name: "Talent 6" },
  ];

  return (
    <>
      <Header />

      <Box sx={{ py: 6, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 5 }}
          >
            Gold Medal Talents
          </Typography>

          <Grid container spacing={4}>
            {images.map((img) => (
              <Grid item xs={12} sm={6} md={4} key={img.key}>
                <Box
                  sx={{
                    textAlign: "center",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "translateY(-5px)" },
                  }}
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.name}
                    sx={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {/* Voting Section */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                      py: 1,
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <IconButton
                      onClick={() => handleVote(img.key)}
                      sx={{ color: "#f97316" }}
                    >
                      <ThumbUpIcon />
                    </IconButton>
                    <Typography sx={{ fontWeight: 600 }}>{votes[img.key]}</Typography>
                  </Box>

                  <Typography sx={{ fontWeight: 600, py: 1 }}>{img.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default GoldMedal;
