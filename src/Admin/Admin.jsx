import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";
import Shop2Icon from "@mui/icons-material/Shop2";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "./components/Dashboard";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
import CustumersTable from "./components/CustumersTable";
import AdminDashboard from "./components/Dashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <PeopleIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <Shop2Icon /> },
  { name: "Add Product", path: "/admin/product/create", icon: <AddTaskIcon /> },
  { name: "", path: " " },
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
            sx={{ fontFamily: "cursive", fontSize: "30px", fontWeight: "bold" }}
            style={{}}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{
                  fontSize: "20px", // Adjust the value for the desired font size
                  marginLeft: "1px", // Adjust the value for the desired margin
                }}
                style={{ fontWeight: "1000", fontStyle: "italic" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ mb: 5 }}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText
              sx={{ mb: 5 }}
              style={{ fontWeight: "1000", fontStyle: "italic" }}
            >
              Account
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <div className="flex h-[100vh]">
        {/* <CssBaseline /> */}
        <div
          className="w-[15%] border border-r-gray-300 h-full"
          style={{ backgroundColor: "#bdbdbd", color: "#212121" }}
        >
          {drawer}
        </div>
        <div className="w-[85%]">
          <Routes>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustumersTable />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
