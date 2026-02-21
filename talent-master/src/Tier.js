import React from "react";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
import Header from "./Header";
import photologo from './images/photologo.jpg'; // left image
import takecarelogo from './images/takecarelogo.jpg'; // right image
// import { Container, Box } from "@mui/material";
import tree from './images/tree.jpg'
import winning from './images/winningimage.jpg'
import Footer from './Footer.js'


function Tier() {
  return (
    <>
      <Header />

      {/* Talent Monster + TCIF Section */}
      <Box sx={{ paddingY: 6, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">

            {/* Left Column: Talent Monster */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Box
                  component="img"
                  src={photologo}
                  alt="Talent Monster"
                  sx={{
                    width: { xs: 60, md: 100 },
                    height: "auto",
                    borderRadius: 1,
                    objectFit: "cover",
                    flexShrink: 0
                  }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Talent Monster
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#444", lineHeight: 1.6 }}>
                    Talent Monster is an International talent fest aimed at identifying talents across the globe and promoting them on digital platforms thus paving their way to a flourishing career in the field of their choice. The event aims at uniting talents from across the globe and showcasing them to a global audience.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column: Take Care International Foundation */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Box
                  component="img"
                  src={takecarelogo}
                  alt="Take Care International Foundation"
                  sx={{
                    width: { xs: 60, md: 100 },
                    height: "auto",
                    borderRadius: 1,
                    objectFit: "cover",
                    flexShrink: 0
                  }}
                />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    Take Care International Foundation
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, color: "#444", lineHeight: 1.6 }}>
                    TAKE CARE INTERNATIONAL FOUNDATION (TCIF) is a social organization. The primary focus of TCIF is empowering the society through online edutainment programs. We deliver social awareness messages and organize skill development trainings, Inspire people with successful business stories, Motivational content, lifestyle interviews and much more, through new media and entertainment.
                  </Typography>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Participation Tiers Section */}
      <Box sx={{ paddingY: 6, backgroundColor: "#fff" }}>
        <Container maxWidth="lg">

          {/* Heading */}
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 4,
              color: "#333"
            }}
          >
            Participation Tiers
          </Typography>

          {/* Tier Cards */}
          <Grid container spacing={4}>

            {/* Tier 1 */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: "center", borderRadius: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>Basic Tier</Typography>
                <Typography sx={{ color: "#666", mb: 3 }}>
                  Entry level participation to showcase your talent.
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#f97316", textTransform: "none", "&:hover": { backgroundColor: "#ea580c" } }}>
                  Enter Now
                </Button>
              </Paper>
            </Grid>

            {/* Tier 2 */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: "center", borderRadius: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>Premium Tier</Typography>
                <Typography sx={{ color: "#666", mb: 3 }}>
                  Higher visibility and additional benefits.
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#f97316", textTransform: "none", "&:hover": { backgroundColor: "#ea580c" } }}>
                  Enter Now
                </Button>
              </Paper>
            </Grid>

            {/* Tier 3 */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ padding: 4, textAlign: "center", borderRadius: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>Elite Tier</Typography>
                <Typography sx={{ color: "#666", mb: 3 }}>
                  Maximum exposure and recognition.
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#f97316", textTransform: "none", "&:hover": { backgroundColor: "#ea580c" } }}>
                  Enter Now
                </Button>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>

        <Container sx={{ textAlign: "center", marginTop: 3, marginBottom: 2 }}>
        <img 
          src={tree} 
          alt="Logo" 
          style={{ maxWidth: "380px" }}
        />
      </Container>
    <Container sx={{ textAlign: "center", marginTop: 3, marginBottom: 2 }}>
        <img 
          src={winning} 
          alt="Logo" 
          style={{ maxWidth: "500px" }}
        />
      </Container>
     <Footer />
    </>
  );
}

export default Tier;
