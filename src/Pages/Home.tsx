import { Header } from "../Components/Layout"
import { AboutMe, ParallaxHome, ServicesHome } from "../Components/homeBody"


function Home() {
  return (
    <>
        <Header />
        <AboutMe />
        <ServicesHome />
        <ParallaxHome />
    </>
  )
}

export default Home