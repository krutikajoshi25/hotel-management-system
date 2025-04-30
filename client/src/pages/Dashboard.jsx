import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Grid, Card,
  CardMedia, CardContent, Paper, Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../styles/Navbar';




import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import hero5 from '../assets/hero5.jpg';
const topHotels = [
  { name: 'OceanView Resort', image: image1 },
  { name: 'Mountain Bliss', image: image2 },
  { name: 'City Lights Hotel', image: image3 },
  { name: 'Royal Heritage Stay', image: image4 },
  { name: 'Nature Nest Inn', image: image5 },
];

const reviews = [
  { name: "Ayesha K.", text: "Unforgettable experience!" },
  { name: "Mike J.", text: "Everything was just perfect!" },
  { name: "Sara P.", text: "Super clean rooms and excellent service!" },
];

export default function HotelDashboard() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fffde7', overflowX: 'hidden' }}>
      {/* Navbar */}
      {/* <AppBar position="sticky" sx={{ bgcolor: '#004c99' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600, color: 'yellow' }}>
            Hotel Booking Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/login" sx={{ color: 'yellow', fontWeight: 600 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar> */}
<Navbar/>
      {/* Hero Section */}
      <Box
        sx={{
            backgroundImage: `url(${hero5})`, // Optional hero image in assets
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2
        }}
      >
        <Box sx={{ bgcolor: 'rgba(56, 56, 54, 0.5)', p: 4, borderRadius: 3 }}>
          <Typography variant="h3" fontWeight="bold">Experience Luxury, Comfort & Class</Typography>
          <Typography variant="h6" mt={2}>Book from the top-rated hotels across the world</Typography>
        </Box>
      </Box>

      {/* Hotel Cards */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" fontWeight={600} color="#004c99" mb={3}>Top Hotels</Typography>
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {topHotels.map((hotel, i) => (
            <Grid item xs={2.4} key={i}> {/* Ensure that all cards stay in one row */}
              <Card sx={{ borderRadius: 3, boxShadow: 5, '&:hover': { transform: 'scale(1.03)' }, transition: '0.3s' }}>
                <CardMedia component="img" height="160" image={hotel.image} alt={hotel.name} />
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>{hotel.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography mt={2} fontStyle="italic" textAlign="center" color="gray">
          ...and many more! Use our smart search to explore.
        </Typography>
      </Box>

      {/* Features / What We Offer */}
      <Box sx={{ px: 5, py: 3 }}>
        <Paper sx={{ p: 4, bgcolor: '#e6f0ff', borderLeft: '10px solid #004c99' }}>
          <Typography variant="h5" fontWeight="bold" color="#004c99" mb={2}>
            What We Offer
          </Typography>
          <Typography>- Hassle-free hotel booking across cities</Typography>
          <Typography>- Real guest reviews you can trust</Typography>
          <Typography>- 24/7 customer support</Typography>
          <Typography>- Exclusive blue & yellow elite member benefits</Typography>
        </Paper>
      </Box>

      {/* Reviews */}
      <Box sx={{ px: 5, py: 3 }}>
        <Typography variant="h5" fontWeight="bold" mb={3} color="#004c99">What Guests Say</Typography>
        <Grid container spacing={3}>
          {reviews.map((review, idx) => (
            <Grid item xs={12} sm={4} key={idx}>
              <Paper sx={{ p: 3, borderRadius: 2, bgcolor: '#fff9c4' }}>
                <Typography>“{review.text}”</Typography>
                <Typography variant="subtitle2" color="text.secondary" mt={1}>- {review.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About */}
      <Box sx={{ px: 5, py: 3 }}>
        <Typography variant="h5" fontWeight="bold" mb={2} color="#004c99">About Our Company</Typography>
        <Typography color="text.secondary">
          EliteStay is a modern hotel management platform helping travelers book smart and stay smarter.
          We’re redefining hospitality with technology, comfort, and class. Trusted by thousands, we aim
          to offer a home-like stay wherever you go.
        </Typography>
      </Box>

      {/* Footer */}
      <Divider sx={{ my: 4 }} />
      <Box textAlign="center" py={3} bgcolor="#004c99" color="yellow">
        <Typography variant="body2">
          © 2025 EliteStay Hospitality. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
