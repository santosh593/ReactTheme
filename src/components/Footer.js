import { Email, FaceOutlined, Facebook, Instagram, LocalPhone, Place, Title, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
 display:flex;
`;
const Left = styled.div`
  flex:1;
  padding: 10px;
`;
const Logo = styled.h1`
`;
const Content = styled.p`

`;
const SocialContainer = styled.div`
display: flex;
`;

const SocialItem = styled.div`
    padding:10px;
    background: white;
    color: ${prop=>prop.color};
    border-radius: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Center = styled.div`
flex:1;
`;
const Tilte =styled.h2`
`
const LinkContainer = styled.div`
 display:flex;
 flex-wrap: wrap;
`
const LinkItem = styled.div`
   padding:10px;

   width:40%;
`
const Right = styled.div`
flex:1;
`;
const Textdata = styled.p`
display: flex;
    line-height: 1.5;
}
`;
const Footer = () =>{
    return <Container>
        <Left>
          <Logo>LAMP.</Logo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          <Content></Content>
          <SocialContainer>
            <SocialItem color="#316FF6"><Facebook/></SocialItem>
            <SocialItem color="#CD201F"><YouTube /></SocialItem>
            <SocialItem color="#1DA1F2"><Twitter/></SocialItem>
            <SocialItem color="#cd486b"><Instagram/></SocialItem>
          </SocialContainer>
        </Left>
        <Center>
            <Tilte>UseFull Links</Tilte>
            <LinkContainer>
             <LinkItem>Home</LinkItem>
             <LinkItem>ProductList</LinkItem>
             <LinkItem>Conatct Us</LinkItem>
             <LinkItem>Login</LinkItem>
             <LinkItem>Register</LinkItem>
             <LinkItem>Privacy Policy</LinkItem>
             <LinkItem>About Us</LinkItem>
            </LinkContainer>
        </Center>
        <Right>
            <h2>Address</h2>
            <Textdata><Place />A76 Gali no 5 New ashok nagar Delhi 110096</Textdata>
            <Textdata><LocalPhone />7309415808</Textdata>
            <Textdata><Email />santosh@gmail.com</Textdata>
        </Right>
    </Container>
}

export default Footer;