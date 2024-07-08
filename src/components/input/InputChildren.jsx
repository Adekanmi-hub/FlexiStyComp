import styled from "styled-components";
import { SubmitButton } from "../button/button.styles";
import Input from "./Input";

const MyHeader = styled.h1`
    color: #6c63ff;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`
const MyDiv = styled.div`
border: 1px solid black;
padding: 1rem;
margin: 1rem;
border-radius: 5px;
width: 20%;
`
export const InputChildren = () => {
  return (
    <MyDiv>
      <MyHeader>FlexiSaf Login</MyHeader>
      <Input placeholder="Enter your name" />
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
      <SubmitButton>Login</SubmitButton>
    </MyDiv>
  );
};

export default InputChildren;