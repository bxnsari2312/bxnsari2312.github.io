import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import { BoxGeometry, MeshStandardMaterial } from "three";

const Container = styled.div`
  height: 150vh;
  width: 150%;
`;

const Test = () => {
  return (
    <Container>
      <Canvas>
      </Canvas>
    </Container>
  );
};

export default Test;
