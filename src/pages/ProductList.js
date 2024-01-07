
import styled from "styled-components";
import Product from "../components/Product";
import { useState } from "react";



const Container = styled.div`
   display:flex;
`;
const Filter = styled.div`
  flex:2;
  margin: 10px;
`;
const MainContent = styled.div`
  flex:9;
`;
const Title = styled.h2``
const CategoryContainer = styled.div`
`
const CatItems = styled.div`
 display:flex;
 flex-direaction:coloum;
`
const PriceContainer = styled.div`
 
`
const ColorContainer = styled.div``;
const SizeContainer = styled.div``;
const ProductColordiv = styled.div`
 background:${props=>props.color};
 height:25px;
 width:25px;
 border-radius:50%;
 margin-left:5px;
`
const Sizediv = styled.div`
padding: 10px;
background: lightgray;
`
const FilterColorContainer = styled.div`
display: flex;
flex-wrap: wrap;
`;
const FilterSizeContainer = styled.div`
display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`
const ResetFilter=styled.button`
padding: 5px 10px 5px 10px;
font-size: 20px;
font-weight: 500;
margin: 10px;
`;
const Filterbutton=styled.button`
padding: 5px 10px 5px 10px;
font-size: 20px;
font-weight: 500;
margin: 10px;
`;
const FilterbuttonContainer=styled.div``;
const ProductList= () =>{
  const category = ['Men','Women','Kids','Electronic'];
  const colorArray = ['red','green','blue','yellow'];
  const sizeArray = ['X','L','M','XL','XXL'];
  const [ price, setPrice ] = useState(0);
  const priceChange = (e) =>{
    setPrice(e.target.value);
  }

    return <Container>
      <Filter>
      <Title>FILTER</Title>
      <CategoryContainer>
        <h3>Category</h3>
        {
          category.map((cat)=>{
           return <CatItems>
             <input type="checkbox" />{cat}
           </CatItems>
          })
        }
      </CategoryContainer>
      <PriceContainer>
        <h3>Price:</h3>
        <input type="range" />
      </PriceContainer>
      <ColorContainer>
        <h3>Color</h3>
        <FilterColorContainer>
        {
                  colorArray.map((data,index)=>{
                    return <ProductColordiv color={data}></ProductColordiv>
                  })
                }
        </FilterColorContainer>
      </ColorContainer>
      <SizeContainer>
        <h3>Size</h3>
        <FilterSizeContainer>
        {
                  sizeArray.map((data,index)=>{
                    return <Sizediv>{data}</Sizediv>
                  })
                }
        </FilterSizeContainer>
      </SizeContainer>
      <FilterbuttonContainer>
        <ResetFilter>Reset</ResetFilter>
        <Filterbutton>Filter</Filterbutton>
      </FilterbuttonContainer>
      </Filter>
      <MainContent>
      <Product />
      </MainContent>
    </Container>
}

export default ProductList;