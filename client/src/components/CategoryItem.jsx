import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Button = styled.button`
    border:none;
    border-radius:20px;
    padding: 10px;
    background-color: white;
    color:dimgray;
    cursor: pointer;
    font-weight: 700;
    opacity: 0;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  transition:0.5s ease;
  &:hover{
    background-color:black;
    transition:0.5s ease;
  }
  &:hover ${Button}{
    opacity:1;
    transition:0.5s ease;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0% 0%;
  opacity: 0.8;
  ${mobile({ height: "60vh" })};
  
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    text-shadow: 0 0 3px #FFFFFF, 0 0 5px #000000;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
