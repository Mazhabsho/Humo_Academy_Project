
import { Box, Button, Grid, Typography } from "@mui/material";


const MainMenu = () => {
  return (
   <Grid lg={12} item container spacing={0} sx={{bgcolor:'yellow'}} >
    <Grid item sm={6} xs={12}> 
       <Box sx={{bgcolor: '#111', color:'#ddd', padding:'10px'}}>
          <Typography variant="h3">Our</Typography>
          <Typography variant="h3" sx={{paddingLeft:'65px', paddingBottom:'15px'}}>Menu</Typography>
          <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda impedit, id aut
             voluptate ut consequatur vero quam dolorum doloribus! Mollitia, distinctio ullam ut eius rem 
             accusantium veniam vel facilis velit?</Typography>
       </Box>
    </Grid>
    <Grid item sm={6} xs={12}>
       <Box sx={{border:'1px solid #111'}}>
        <Typography variant="h4">Запеченные блюда</Typography>
         <Grid lg={12} item container bgcolor={'red'}>
          <Grid xs={6} sx={{bgcolor:'orange'}}>
            <Typography variant="h5">Белен тава (220/300 гр.)</Typography>
            <Typography>баранина / болгарский перец / помидор / соус</Typography>
          </Grid>
          <Grid xs={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <span>650som</span>
            <Button>Order</Button> asdfghjkl852369417
          </Grid>
         </Grid>
        </Box>
    </Grid>
   </Grid>
  );
};

export default MainMenu;
