import styled from "styled-components";
import { SendOutlined, Style } from "@material-ui/icons";


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background:#efd8d8;
    padding: 10px;
   
`;

const Title = styled.h1`
`;


const Content = styled.div`
padding: 14px;
font-weight: bold;
`;

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
`;
const Button = styled.button`
  flex:1;
  border: none;
  display: flex;
justify-content: center;
align-items: center;
height: 35px;
background: teal;
color: white;
`;
const Input = styled.input`
    flex: 8;
    height: 32px;
    display: flex;
    width: 409px;
    border: none;
    padding-left: 10px;
`;
const Newsletter = () =>{
    return <Container>
        <Title>NewsLetter</Title>
        <Content>Get Timely Update from your products</Content>
        <Form>
            <Input type="text" placeholder="Please Enter Email"/>
            <Button><SendOutlined /></Button>
        </Form> 

    </Container>
}

export default Newsletter;