import styled from "styled-components";

const Container = styled.div``;
const TopWrapper = styled.div`
display: flex;
    justify-content: space-between;
`;
const ContinueButton=styled.button`
padding: 15px;
    margin: 10px;
    border: none;
    font-size: 17px;
    color: white;
    background: #2e2e2e;
    font-weight: 500;
`;
const Checkoutbutton=styled.button`
padding: 15px;
margin: 10px;
border: none;
font-size: 17px;
color: white;
background: #2e2e2e;
font-weight: 500;
`;
const ContentWrapper = styled.div`
display: flex;
flex:10;
`;
const Iteminfo = styled.div`
display: flex;
`;
const Productwrapper = styled.div`
display: flex;
`;
const Summaryinfo = styled.div`
flex:2;
`;
const ProConfig = styled.div``;
const ProQtyWrapper = styled.div``;
const ProQty = styled.div``
const ProdPrice =styled.div``;
const Cart= () =>{
    return <Container>
        <TopWrapper>
            <ContinueButton>Continue Shopping</ContinueButton>
            <Checkoutbutton>Checkout</Checkoutbutton>
        </TopWrapper>
        <ContentWrapper>
           <Iteminfo>
             <Productwrapper>
               <img src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png" height="200px" width="200px"/>
               <ProConfig>
                <p><b>Product:</b>TEST Product</p>
                <p><b>Id:</b>123456789</p>
                <p><b>Color:</b>Red</p>
                <p><b>Size:</b>XL</p>
               </ProConfig>
               <ProQtyWrapper>
               <ProQty>
                <p>-</p><input type="text"/><p>+</p>
               </ProQty>
               <ProdPrice>
                <p>$23</p>
               </ProdPrice>
               </ProQtyWrapper>
             </Productwrapper>
           </Iteminfo>
           <Summaryinfo>
           <h3>Cart Summary</h3>
           <p>Total: $28</p>
           <p>Shipping Charge: $28</p>
           <p>Tax: $28</p>
           <p>Discount: $28</p>
           <p>GrandTotal: $28</p>
           </Summaryinfo>
        </ContentWrapper>
    </Container>
}

export default Cart;