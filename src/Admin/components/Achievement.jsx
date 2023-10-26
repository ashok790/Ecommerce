import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'
// import trophy2 from "./trophy.png";
import trophy2 from "./trophy2.png"

const TriangleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute",
})

const TrophyImg = styled("img")({
  right: 42,
  bottom: 30,
  height: 135,
  position: "absolute",
});
const Achievement = () => {
  return (
    <Card
      className=""
      sx={{ position: "relative", bgcolor: "#424242", color: "#eeeeee" }}
    >
      <CardContent sx={{ paddingX: 3, paddingY: 1.5 }}>
        <Typography variant="h6" sx={{ letterSpacing: "0.25px" }}>
          Shopluxe
        </Typography>
        <Typography variant="body2">Congratulations 🥳</Typography>
        <Typography variant="h5" sx={{ my: 3.1 }}>
          420.8K
        </Typography>
        <Button
          size="medium"
          variant="contained"
          sx={{
            bgcolor: "#455a64",
            color: "#eeeeee",
            borderRadius: "12px",
            ":hover": {
              color: "white",
              bgcolor: "#263238",
              transform: "translateY(-3px)",
            },
            transition: "transform 0.2s",
          }}
        >
          View Sales
        </Button>
        <TriangleImg src=""></TriangleImg>
        <TrophyImg src={trophy2} />
      </CardContent>
    </Card>
  );
}

export default Achievement
