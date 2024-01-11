import { Container } from "@mui/material"
import MainSlider from "../../cpmponents/mainSlider/MainSlider"
import MainMenu from "../../cpmponents/mainMenu/MainMenu"


const Home = () => {
  return (
    <>
     <MainSlider/>
     <Container>
      <MainMenu/>
     </Container>
    </>
  )
}

export default Home