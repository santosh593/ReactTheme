import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
 display:flex;
`
const ImageGallery = styled.div`
    flex: 1;
    width: 100%;
    margin: 17px;
    align-items: center;
    display: flex;
    justify-content: center;
`

const Productinfo = styled.div`
margin: 17px;
flex:1;
`;
const ProductName = styled.h1`
`;
const Productdesc = styled.p`
`;
const Productprice = styled.div`
`
const ProductConfig = styled.div`
`
const ProductColor = styled.div`
 display:flex;
 margin:10px 10px 10px 0px;
`
const Productsize = styled.div`
margin:10px 10px 10px 0px;
`
const ProductColordiv = styled.div`
 background:${props=>props.color};
 height:25px;
 width:25px;
 border-radius:50%;
 margin-left:5px;
`
const Productaddtocart = styled.div`
display:flex;
margin:10px 10px 10px 0px;
font-size: 17px;
font-weight: 700;
height: 36px;
align-items: center;
`;
const Qtytext = styled.input`
width: 32px;
height: 30px;
font-size: 18px;
align-items: center;
text-align: center;
`
const Productbutton = styled.button`
padding: 10px;
margin: 10px;
border: none;
font-weight: 500;
cursor: pointer;
`
const ProductqtyIncdec = styled.div`
font-size: 22px;
padding: 5px;
margin: 4px;
background: #f1efef;
cursor: pointer;
`
const ProductDeatil = () =>{
  const colorArray = ['red','green','blue','yellow'];
  const [qty,setQty] = useState(1);
  const [active,setActive] = useState('');
  const changeColor = (color) =>{
    alert(color);
    
  }
  const increment = (qtydata) =>{
    setQty(qtydata+1);
  }
  const decrement = (qtydata) =>{
    if(qtydata>1){
      setQty(qtydata-1);
    }
  }
    return <Container>
          <ImageGallery>
            <img src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="600" width="500"/>
            
          </ImageGallery>
          <Productinfo>
            <ProductName>Test Product</ProductName>
            <Productdesc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Productdesc>
            <Productprice>$20</Productprice>
            <ProductConfig>
               <ProductColor>
                Color {
                  colorArray.map((data,index)=>{
                    return <ProductColordiv color={data} className={active} onClick={()=>changeColor(data)}></ProductColordiv>
                  })
                }
               </ProductColor>
               <Productsize>
               Size: <select>
                  <option>X</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>L</option>
                  <option>M</option>
                </select>
               </Productsize>
               <Productaddtocart>
                  <ProductqtyIncdec onClick={()=>decrement(qty)}>-</ProductqtyIncdec><Qtytext type="text" value={qty} /><ProductqtyIncdec onClick={()=>increment(qty)}>+</ProductqtyIncdec>
                 <Productbutton>ADD TO CART</Productbutton>
               </Productaddtocart>
            </ProductConfig>
          </Productinfo>
          
    </Container>
}

export default ProductDeatil;