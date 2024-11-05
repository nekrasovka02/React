import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, ImageOutlined, Remove } from '@material-ui/icons'
import {useLocation} from "react-router-dom";
import { publicRequest } from '../requestMethods'
import { useEffect, useState } from "react";
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;

`
const Image = styled.img`
    width: 90%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`


const FilterContainer = styled.div`
    width: 40%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-content: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    font-weight: 500;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover{
        background-color: #f8f4f4;
    }
`
const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    // для выбора количества продукта
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
  
    //получение стр любого продукта по id (не админ)
    useEffect(() => {
      const getProduct = async () => {
        try {
          const res = await publicRequest.get("/products/find/" + id);
          setProduct(res.data);
        } catch {}
      };
      getProduct();
    }, [id]);

    // изменение кол-ва товара на странице товара (для добавления в корзину)
    const handleQuantity = (type) =>{
        if (type === "dec") {
            quantity> 1 && setQuantity(quantity-1);
        }else{
            setQuantity(quantity+1);
        }
    };

    const handleClick = ()=>{     
        dispatch (
        addProduct({...product, quantity, color, size}));
    };
    
// % before Price
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src = {product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title> {product.title}</Title >
                <Desc>
                {product.title}
                </Desc>
                <Price>
                 
                {product.price}
                </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>
                            Цвет
                        </FilterTitle>
                        {product.color?.map(c=>(
                            <FilterColor color = {c} key={c} onClick ={()=>setColor(c)}/>
                        ))}                        
                    </Filter>
                    <Filter>
                        <FilterTitle>
                            Размер
                        </FilterTitle>
                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                        {product.size?.map(s=>(
                            <FilterSizeOption key={s}>{s}</FilterSizeOption>
                        ))}  
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick = {()=>handleQuantity("dec")}/>
                        <Amount>
                            {quantity}
                        </Amount>
                        <Add onClick = {()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>
                        Добавить в корзину
                    </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product;