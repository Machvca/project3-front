import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/auth.context";
import { getProductService } from "../services/product.services";

//STYLING

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 40vh;
  height: 40vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h2`
  font-weight: 200;
`;

const Desc = styled.p`
margin:20px; 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const ColorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ColorTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FavButton = styled.button`
  background-color: transparent;
  color: black;
  font-size: 1.2rem;
  border: 2px solid black;
  margin-top: 1rem;
`;

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const response = await getProductService(id);
      setProduct(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title> {product.name}</Title>
          <Desc>{product.description}</Desc>
          <Price>{product.price} €</Price>
          <ColorWrapper>
            <ColorTitle>Color</ColorTitle>
            {product.color?.map((c) => (
              <Color key={c} color={c}></Color>
            ))}
          </ColorWrapper>
          <FavButton> Add to Favorites</FavButton>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default ProductPage;
