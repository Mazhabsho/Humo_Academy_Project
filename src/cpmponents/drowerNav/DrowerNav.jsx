import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import LanguageIcon from '@mui/icons-material/Language';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const DrowerNav = () => {
  const navList = useSelector((state) => state.nav.navList)
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer  open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{marginTop:'30px', padding:'10px'}}>
          {navList.map((elem, id) => {
            return (
              <ListItemButton onClick={() => setOpenDrawer(false)} key={id}>
                <ListItemIcon>
                  <ListItemText >{elem}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
        
        <Box sx={{ color: "white", marginLeft: "auto",display:'flex', alignItems:'center'}}>
        <LanguageIcon/>
        <IconButton
          sx={{color: "white",}}
        onClick={() => setOpenDrawer(!openDrawer)}
      >  
        <MenuIcon />
      </IconButton>
        </Box>
      
    </>
  );
};

export default DrowerNav;
