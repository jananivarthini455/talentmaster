import photo from './images/photologo.jpg';
import photoone from './images/photo2.jpg';
import ticketImage from './images/talent-master.jpg';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
import Tiers from "./Tier";

import Header from './Header';
// import { AppBar, Toolbar, Button, Box } from "@mui/material";





import { AppBar, Toolbar, Button, Box, Container, Grid, Typography, Paper } from '@mui/material';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};




function Home() {
  const navigate = useNavigate();

  return (
    <>
    
      <Header />
     
      
        <Box sx={{ width: "100%", display: "block", marginBottom: 2 }}>
              <img 
                src={photoone} 
                alt="Banner" 
                style={{ width: "100%", display: "block" }}
              />
            </Box>

      {/* Statistics Section */}
      <Container sx={{ marginTop: 6, marginBottom: 6 }}>
        <Grid container spacing={3} justifyContent="center">

          <Grid item xs={12} sm={6} md={3}>
            <Paper 
              elevation={0}
              sx={{ 
                padding: 3, 
                textAlign: "center",
                borderRadius: 3,
                border: "1px solid #eee"
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ fontWeight: "bold", color: "#f97316", marginBottom: 1 }}
              >
                50+
              </Typography>
              <Typography sx={{ color: "#555", fontWeight: 500 }}>
                Categories
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper 
              elevation={0}
              sx={{ 
                padding: 3, 
                textAlign: "center",
                borderRadius: 3,
                border: "1px solid #eee"
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ fontWeight: "bold", color: "#f97316", marginBottom: 1 }}
              >
                No
              </Typography>
              <Typography sx={{ color: "#555", fontWeight: 500 }}>
                Age Bar
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper 
              elevation={0}
              sx={{ 
                padding: 3, 
                textAlign: "center",
                borderRadius: 3,
                border: "1px solid #eee"
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ fontWeight: "bold", color: "#f97316", marginBottom: 1 }}
              >
                100+
              </Typography>
              <Typography sx={{ color: "#555", fontWeight: 500 }}>
                Finalists
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper 
              elevation={0}
              sx={{ 
                padding: 3, 
                textAlign: "center",
                borderRadius: 3,
                border: "1px solid #eee"
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ fontWeight: "bold", color: "#f97316", marginBottom: 1 }}
              >
                1M+
              </Typography>
              <Typography sx={{ color: "#555", fontWeight: 500 }}>
                Online Reach
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Container>

    {/* Orange Info Section with Overlapping Image */}
<Box sx={{ position: "relative", marginTop: 8 }}>

  {/* Orange Background Area */}
  <Box
    sx={{
      backgroundColor: "#f97316",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: { xs: 2, md: 20 },  // space for image overlap
      paddingRight: 4,
      color: "#fff"
    }}
  >
    <Container maxWidth="md">
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: 2 }}
      >
        Your Ticket to International Stardom
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: 1.8,
          opacity: 0.95
        }}
      >
        Talent, be it inborn or cultivated, is a result of consistent hard work, faith and perseverance to your vision. Talent is a gift that gives you authenticity and a unique recognition among the crowd. It narrates the story of your personal story and the message you want to convey to the world.
      </Typography>
    </Container>
  </Box>


  {/* Overlapping Image */}
  <Box
    sx={{
      position: "absolute",
      left: { xs: "10px", md: "40px" },
      top: "-70%",
      // transform: "translateY(-50%)",
      zIndex: 2
    }}
  >
    <img
      src={ticketImage}
      alt="Ticket"
      style={{
        width: "380px",
        maxWidth: "90%",
      }}
    />
  </Box>

</Box>


{/* Enter Now Section */}
<Box
  sx={{
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: "#fff"
  }}
>
  <Container maxWidth="lg">
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3
      }}
    >
      {/* Left Text */}
      <Typography
        sx={{
          fontSize: "18px",
          lineHeight: 1.8,
          color: "#444",
          maxWidth: "70%"
        }}
      >
        The only requirement to participate is trust in your own talent.
        Compete under any category of your choice and win prizes.
        Talent Monster is an open platform for people who have burning
        desire to flaunt their talent.
      </Typography>

      {/* Right Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#f97316",
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 1.5,
          paddingBottom: 1.5,
          fontSize: "16px",
          fontWeight: 600,
          textTransform: "none",
          borderRadius: "30px",
          boxShadow: "none",
          whiteSpace: "nowrap",
          "&:hover": {
            backgroundColor: "#ea580c"
          }
        }}
      >
        Enter Now
      </Button>
    </Box>
  </Container>
</Box>


{/* Footer */}
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

{/* Scroll To Top Button (TalentMonster Style) */}
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

export default Home;
