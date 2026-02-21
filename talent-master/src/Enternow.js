import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, MenuItem, Button } from "@mui/material";
import Header from "./Header";
import Footer from './Footer';
// import React, { useState } from "react";



function EnterNow() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  category: "",
  facebookId: "",
  instagramId: "",
  mediaLinks: "",
});


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};



const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5050/api/enter-now", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    alert("Form submitted successfully!");
    console.log(data);

  } catch (error) {
    console.error("Error:", error);
  }
};


  return (
    <>
      <Header />

      {/* Banner Section */}
      <Box sx={{ paddingY: 6, backgroundColor: "#fff" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
            Enter Now
          </Typography>

          <Typography sx={{ fontSize: "16px", color: "#444", lineHeight: 1.8, mb: 5, textAlign: "center" }}>
            Register yourself and showcase your talent on a global platform. Fill in the details below to participate.
          </Typography>

          {/* Registration Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

            {/* 1. Full Name */}
            <TextField label="Full Name *" variant="outlined" fullWidth required name="name"
  value={formData.name}
  onChange={handleChange} />

            {/* 2. Donate your Talent */}
            <TextField
              select
              label="Donate Your Talent *"
              variant="outlined"
              fullWidth
              required
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>

            {/* 3. Language */}
            <TextField label="Language *" variant="outlined" fullWidth required placeholder="Enter your language" />

            {/* 4. Current Qualification */}
            <TextField label="Your Current Qualification *" variant="outlined" fullWidth required />

            {/* 5. Current Institution */}
            <TextField label="Your Current Institution *" variant="outlined" fullWidth required />

            {/* 6. Talent Category */}
            <TextField
              select
              label="Choose the Talent Category You Want to Enter *"
              variant="outlined"
              fullWidth
              required
              name="category"
  value={formData.category}
  onChange={handleChange}
            >
              <MenuItem value="Singing">Singing</MenuItem>
              <MenuItem value="Dancing">Dancing</MenuItem>
              <MenuItem value="Acting">Acting</MenuItem>
              <MenuItem value="Music">Music</MenuItem>
              <MenuItem value="Art">Art</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </TextField>

            {/* 7. Facebook ID */}
            <TextField label="Facebook ID" variant="outlined" fullWidth placeholder="Enter your Facebook profile link" name="facebookId"
  value={formData.facebookId}
  onChange={handleChange} />

            {/* 8. Instagram ID */}
            <TextField label="Instagram ID" variant="outlined" fullWidth placeholder="Enter your Instagram profile link"  name="instagramId"
  value={formData.instagramId}
  onChange={handleChange} />

            {/* 9. Video / Image Gallery URL */}
            <TextField
              label="Video / Image Gallery URL Link *"
              variant="outlined"
              fullWidth
              required
              name="mediaLinks"
  value={formData.mediaLinks}
  onChange={handleChange}
              placeholder="Provide link to your work (YouTube, Google Drive, etc.)"
            />

            {/* 10. Email */}
            <TextField label="Email *" variant="outlined" fullWidth required type="email" name="email"
  value={formData.email}
  onChange={handleChange} />

            {/* 11. Phone Number */}
            <TextField label="Phone Number *" variant="outlined" fullWidth required  name="phone"
  value={formData.phone}
  onChange={handleChange} />

            {/* Submit Button - Small, Left Aligned, Blue */}
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#1E90FF", // blue background
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "14px",      // smaller size
                  py: 1,                 // smaller padding
                  px: 3,
                  "&:hover": { backgroundColor: "#187bcd" },
                }}
              >
                Submit
              </Button>
            </Box>

          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}

export default EnterNow;
