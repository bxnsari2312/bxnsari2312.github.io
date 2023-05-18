import React from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { BoxGeometry, MeshStandardMaterial } from "three";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 74px;
  color: #402a23;
  font-family: "Courier New", monospace;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Subtitle = styled.h2`
  color: #876464;
`;

const Desc = styled.p`
  font-size: 20px;
  color: white;
`;

const Button = styled.button`
  background-color: #402a23;
  color: white;
  font-weight: 500;
  font-size: 12px;
  width: 120px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <mesh position={[1, 1, 1]} scale={[0.75, 0.75, 0.75]}>
              <torusKnotGeometry args={[1, 0.3, 100, 16]} />
              <meshStandardMaterial color="#5c4d4d" roughness={0.5} metalness={0.5} />
            </mesh>
          </Canvas>
        </Left>
        <Right>
          <Title>MY VISION</Title>
          <WhatWeDo>
            <Subtitle>~My Vision</Subtitle>
          </WhatWeDo>
          <Desc>
            "To explore emerging technologies, cultivate a growth mindset, and apply my skills to create
            impactful projects that enrich the learning experience."
          </Desc>
          <Button>My Projects XD</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
