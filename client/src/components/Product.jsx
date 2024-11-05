import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import {mobile} from "../responsive"
import { Link } from "react-router-dom";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0,0.2);
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 400px;
    height: 450px;
    display: flex;
    //flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
    position: relative;
    ${mobile({ minWidth: "380px"})}
    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Image = styled.img`
    height: 85%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const Product = ({item}) => {
  return ( 
    <Container>
        <Circle/>
        <Image src = {item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>    
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>                    
            </Icon> 
            <Icon>
                <FavoriteBorderOutlined/>    
            </Icon>            
        </Info>

    </Container>
  )
}

export default Product