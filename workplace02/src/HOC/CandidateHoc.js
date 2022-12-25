 


import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Logo from "../../src/assets/workPlaceLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
 

const pages = [
  {
    name: "jobs",
    path: "/candidate/jobs",
  },
  {
    name: "Applications",
    path: "/candidate/applications",
  },
  {
    name:'Conversations',
    path:'/candidate/conversations'
  },
  {
    name:'Profile',
    path:'/candidate/profile'
  },

];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function CandidateHoc(  {children} ) {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path) => {
    navigate(`${path}`);
  };

  return (
    <>
    
    <AppBar position="sticky" sx={{ background: "#ffff " }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: "auto",
              display: { xs: "none", md: "flex" },
              //    border: "1px solid red"
              paddingTop: "20px",
            }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{ maxWidth: "100px", width: "100%" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>

            <Box
              sx={{
                width: "auto",

                //    border: "1px solid red"
                paddingTop: "20px",
              }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{ maxWidth: "100px", width: "100%" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  padding: "0 2rem",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Typography sx={{ color: "black" }}>Dark Mode</Typography>
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {children}
    </>
  );
}

export default CandidateHoc;