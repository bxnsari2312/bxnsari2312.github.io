import React, { useState } from "react";
import styled from 'styled-components';
import Navbar from "./Navbar";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial } from "three";
import { Sphere } from "react-simple-maps";

const data = [
  "MATHEMATICS BEHIND AI",
  "FLAPPY BIRD",
  "IMAGE CLASSIFICATION NEURAL NETWORKS",
  "SUDOKO GAME",
  "ONL SHOPPING PLATFORM",
  "DISCORD BOT"
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ListItem = styled.li`
  font-size: 50px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px #57467B;
  position: relative;
  text-decoration-style: solid; /* Change "discrete" to "solid" */
  text-decoration-color: #57467B; /* Add text-decoration-color property */
`;

const Right = styled.div`
  flex: 1;
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
animation: animate 10s infinite ease alternate;
opacity: 0; /* Add opacity property */
@media only screen and (max-width: 768px) {
  width: 300px;
  height: 300px;
}

@keyframes animate {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`;


const Works = () => {
  const [selectedWork, setSelectedWork] = useState(null);

  const handleWorkClick = (work) => {
    if (work === "FLAPPY BIRD") {
      window.open("https://github.com/bxnsari2312/FlappyBird_Unity", "_blank");
    }
    if (work === "MATHEMATICS BEHIND AI") {
      window.open("https://github.com/bxnsari2312/MATHEMATICS-BEHIND-AI", "_blank");
    }
    if (work === "SUDOKO GAME") {
      window.open("https://github.com/bxnsari2312/SUDOKO-GAME", "_blank");
    }
    if (work === "IMAGE CLASSIFICATION NEURAL NETWORKS") {
      window.open("https://github.com/bxnsari2312/IMAGE-CLASSIFICATION-NEURAL-NETWORKS", "_blank");
    }
    if (work === "ONL SHOPPING PLATFORM") {
      window.open("https://github.com/bxnsari2312/ONL-SHOPPING-PLATFORM", "_blank");
    }
    if (work === "DISCORD BOT") {
      window.open("https://github.com/bxnsari2312/Discord-Bot", "_blank");
    }
    setSelectedWork(work);
  };

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item}
                text={item}
                onClick={() => handleWorkClick(item)}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
        <Canvas>
  <OrbitControls enableZoom={true} autoRotate={true} rotateSpeed={10000} />
  <ambientLight intensity={1} />
  <directionalLight position={[2, 12, 1]} intensity={1} />
  <mesh position={[0.5, 0.5, 1]} scale={[2, 2, 2]}>
    <sphereBufferGeometry args={[1, 33, 33]} />
    <meshStandardMaterial color="#452c63" roughness={0.5} metalness={0.5} />
  </mesh>
</Canvas>
          <Img src= "./img/person.png"/>
        </Right>
      </Container>
    </Section>
  );
};

export default Works;