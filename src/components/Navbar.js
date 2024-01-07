import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
const Container = styled.div`
    height:60px;
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
`;
const Language = styled.span`
    font-size:14;
    curser:pointer;
`;
const Searchcontainer = styled.div`
    display: flex;
    border: 1px solid darkgray;
    margin-left: 11px;
`;
const Input = styled.input`
  border: none;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Logo = styled.div`
    text-algin:center;
    font-weight:bold;
    font-size:18px;
`
const Right = styled.div`
    flex:1; 
    display: flex;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
   margin-right: 18px;
`;
const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
`;
const NavMenuItems = styled.div`
    padding:10px;
`;
const Navbar = () => {
    return <Container>
        <Wrapper>
            <Left>
                <Language>LN</Language>
                <Searchcontainer>
                    <Input></Input>
                    <Search />
                </Searchcontainer>
            </Left>
            <Center>
                <Logo>LAMA.</Logo>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        {/* <NavMenu>
             <NavMenuItems>Men</NavMenuItems>
             <NavMenuItems>Women</NavMenuItems>
             <NavMenuItems>Electronic</NavMenuItems>
             <NavMenuItems>Mobile</NavMenuItems>
             <NavMenuItems>phone</NavMenuItems>
        </NavMenu> */}
    </Container>
}

export default Navbar;