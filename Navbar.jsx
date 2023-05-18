import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  background-color: #12343b;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1400px;
  align-items: center;
  padding: 10px 31px;
  box-sizing: border-box;
  background-color: #12343b;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 11px;
  background-color: #eee5d3;
  color: #2d545e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
`;

const scrollToContacts = () => {
  const contactsSection = document.getElementById("Contacts");
  contactsSection.scrollIntoView({ behavior: "smooth" });
};

const openGitHub = () => {
  window.open("https://github.com/bxnsari2312", "_blank");
};

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/bansari-shah-035a2725b", "_blank");
};

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo.jpeg" />
          <List>
            <ListItem onClick={openGitHub}>GitHub</ListItem>
            <ListItem>Resume</ListItem>
            <ListItem onClick={openLinkedIn}>LinkedIn</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.jpeg" />
          <Button onClick={scrollToContacts}>Contact Me!</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
