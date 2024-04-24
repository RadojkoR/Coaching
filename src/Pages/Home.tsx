import Header from "../Components/Layout/header/Header"
import AboutMe from "../Components/homeBody/AboutMe"
import ParallaxHome from "../Components/homeBody/ParallaxHome"
import ServicesHome from "../Components/homeBody/ServicesHome"



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