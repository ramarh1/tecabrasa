import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 250px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 8px 0;
  color: #007b00;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 0.9rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard = ({ product, onAddToCart }) => {
    const { name, image, price } = product;

    return (
        <Card>
            <ProductImage src={image} alt={name} />
            <ProductName>{name}</ProductName>
            <Price>${price}</Price>
            <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
        </Card>
    );
};

export default ProductCard;
