import { styled } from "styled-components"
import Contacts from "./components/Contacts"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Test from "./components/test"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: White;
  background: url("./img/bg.jpeg.png"); 
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {

  return (
      <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contacts/>
      <Test/>
      </Container>
  )
}

export default App
