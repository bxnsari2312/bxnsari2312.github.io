import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
`;

const Left = styled.div`
  height: 100vh;
  flex: 1;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.h1`
  scroll-snap-align: center;
  color: #44473b;
  font-size: 70px;
  font-family: "Courier New", monospace;
`;

const Form = styled.form`
  scroll-snap-align: center;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px
`;

const Input = styled.input`
  scroll-snap-align: center;
  padding: 20px;
  background-color: #7a806a;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  scroll-snap-align: center;
  padding 20px;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  scroll-snap-align: center;
  background-color: #44473b;
  color: white;
  border: none;
  font-weight: bold;  
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  font-size: 15px;
  font-family: Courier New, monospace;
`;

const Right = styled.div`
  flex: 1;
  height: 210vh;
  scroll-snap-align: center;
`;

const Contacts = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hth4ogd",
        "template_hirhh9c",
        ref.current,
        "eZNxnX8lcX-4omHGA"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>CONTACT ME</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message!"
              name="message"
              rows={11}
            />
            <Button type="SUBMIT">SUBMIT</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :P"}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};


export default Contacts;
