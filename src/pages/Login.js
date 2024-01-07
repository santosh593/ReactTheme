import styled from "styled-components";

const Container = styled.div`
align-items: center;
width: 40%;
margin: auto;
background: #ddd9d9;
padding: 14px;

width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
align-items: center;
width: 22%;
margin: auto;
background: white;
padding: 14px;`
const Title = styled.h2``;
const FormContainer =styled.form`

`;
const Input=styled.input`
margin: 10px;
padding: 10px;
font-size: 20px;
`
const Formbutton=styled.button`
font-size: 20px;
padding: 5px 10px 5px 10px;
margin: 10px;
background: #21b149;
width: 200px;
border: none;
font-weight: 400;
color: white;

`
const Login= () =>{
    return <Container>
         <Wrapper>
           <Title>SIGN UP</Title>
           <FormContainer>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
            <Formbutton>Login</Formbutton>
           </FormContainer>
           </Wrapper>
    </Container>
}

export default Login;