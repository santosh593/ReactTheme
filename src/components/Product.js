import styled from "styled-components";
import { popularProducts } from "../Data";
import { Icon } from "@material-ui/core";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import "./style.css";

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin:5px;
    
`
const Items = styled.div`
   flex:1;
   display:flex;
   justify-content: center;
   align-items: center;
   position: relative;
   margin: 5px;
   background: #efefef;
   
`
const Image = styled.img`

`
const Info = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    display: flex;
    bottom: 0px;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0, 0.5);
    opacity: -1;
    &:hover{
        opacity: 1;
       }
`
const Product = () =>{
    
    return <Container>
        {
            popularProducts.map((data,index)=>{
                return <Items>
                      <Image src={data.img} height="200px" width="200px"/>
                        <Info>
                            <Icon>
                                <ShoppingCartOutlined />
                            </Icon>
                            <Icon>
                                <SearchOutlined />
                            </Icon>
                            <Icon>
                                <FavoriteBorderOutlined />
                            </Icon>
                        </Info>
                </Items>
            })
        }
    </Container>
 }
 
 export default Product;