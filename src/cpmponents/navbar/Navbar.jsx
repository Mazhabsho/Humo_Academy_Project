import { useState } from "react";
import logo from "../../assets/logo.svg";
import DrowerNav from "../drowerNav/DrowerNav";
import LanguageIcon from '@mui/icons-material/Language';
import { useSelector } from "react-redux";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Navbar = () => {
  const navList = useSelector((state) => state.nav.navList)
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
const [openLang, setOpenLang] = useState(false) 
  return (
    <AppBar sx={{ background: "#063970" }}>
      <Toolbar>
        <img src={logo} alt="Logo" />
        {isMatch ? (
          <DrowerNav />
        ) : (
          <>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
              sx={{width:'auto'}}
            >
              {navList.map((elem, id) => {
                return <Tab key={id} label={elem}  />;
              })}
            </Tabs>
            <Box sx={{ marginLeft: "auto", position:'relative' }}>
            <Button><LanguageIcon onClick={()=> setOpenLang(!false)} /></Button>
             {openLang && <Box sx={{width:'70px', height:'50px', bgcolor:'red', position:'absolute'}}>
               <Typography>Eng</Typography>
               <Typography>Russ</Typography>
              </Box>}
            <Button variant="contained">
              Login
            </Button>
            <Button sx={{ marginLeft: "10px" }} variant="contained">
              SignUp
            </Button>
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
