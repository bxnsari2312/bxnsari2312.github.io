import React from "react"
import styled from 'styled-components'
import Navbar from "./Navbar";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial } from "three";
import { Sphere } from "react-simple-maps";

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px; /* Adjust the padding as needed */
  box-sizing: border-box;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1340px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  color: #003151;
  font-family: "Courier New", monospace;
  
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Subtitle = styled.h2`
  color: #596e79;
  font-size: 20px;
  overflow: hidden;
  border-right: 0.15em solid #596e79;
  white-space: nowrap;
`;

const Desc = styled.p`
  font-size: 15px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #003151;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(85px);
    }
  }
`;


const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>BANSARI SHAH</Title>
                    <WhatWeDo>
                        <Subtitle>~An innovative developer with a passion for learning!</Subtitle>
                    </WhatWeDo>
                    <Desc>Hey! How's it going? I'm Bansari, a student who is pursuing a career in software engineering.
                      I am very passsionate about software development, 
                        game development, and data analylistics, and web development. My aim is to use my skills to make a positive impact 
                        on the world while constantly expanding my knowledge. Nice to meet you!</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                <Canvas>
  <OrbitControls enableZoom={true} autoRotate={false} rotateSpeed={100} />
  <ambientLight intensity={1} />
  <directionalLight position={[2, 12, 3]} intensity={1} />
  <mesh position={[0.5, 0.5, 1]} scale={[2, 2, 2]}>
    <circleGeometry args={[1, 33, 33]} />
    <meshStandardMaterial color="#004d4d" roughness={0.5} metalness={0.5} />
  </mesh>
</Canvas>
          <Img src= "./img/bird.png"/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero