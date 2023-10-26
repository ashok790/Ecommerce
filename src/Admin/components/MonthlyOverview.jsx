import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    stats: "245K",
    title: "Sales",
    color: "#12B0E8",
    icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12.5K",
    title: "Customers",
    color: "#22CB5C",
    icon: <AccountBoxIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1.54K",
    title: "Products",
    color: "#DE4839",
    icon: <Inventory2Icon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "₹88K",
    title: "Revenue",
    color: "#F4BE2C",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderState = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index} >
      <Box sx={{ display: "flex", alignItems: "center", }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 2,
            width: 44,
            height: 52,
            boxShadow: 2,
            color: "white",
            backgroundColor: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption" sx={{fontSize:"14.5px"}} >{item.title}</Typography>
          <Typography variant="h7">{item.stats}</Typography>
          
        </Box>
      </Box>
    </Grid>
  ));
};
const MonthlyOverview = () => {
  return (
    <div>
      <Card sx={{ position: "relative", bgcolor: "#424242", color: "#eeeeee" }}>
        <CardHeader
          title="Monthly Overview"
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          subheader={
            <Typography variant="body2">
              <Box component="span" sx={{ fontWeight: 600, color: "#eeeeee" }}>
                Total 48.5% growth this Month
              </Box>
            </Typography>
          }
          titleTypographyProps={{
            sx: {
              mb: 2.8,
              lineHeight: "2rem !important",
              letterSpacing: "0.15px !important",
            },
          }}
        />
        <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
          <Grid container spacing={[5, 0]}>
            {renderState()}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyOverview;
