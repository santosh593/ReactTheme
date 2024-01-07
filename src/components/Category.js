import styled from "styled-components";
import { categories } from "../Data";

const Container = styled.div`
  display:flex;
  flex:1;
`
const Wrapper = styled.div`
   margin:10px;
   position:relative; 
`
const Image = styled.img`
   width:100%;
   height:100%;
   object-fit:cover;
`
const Info = styled.div`
   position:absolute;
   top:0px;
   bottom:0px;
   height:100%;
   width:100%;
   display:flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
`
const Title = styled.h1`
   color:white;
`
const Button = styled.button`
   color:gray;
   padding:10px;
   font-weight:bold;
   cursor: pointer;
`

const Category = () =>{
    
    return <Container>
            {
                categories.map((data,index)=>{
                  return <Wrapper>
                        <Image src={data.img} />
                        <Info>
                            <Title>{data.title}</Title>
                            <Button>Shop Now.</Button>
                        </Info>
                    </Wrapper>
                })
            }
          
    </Container>
}

export default Category;