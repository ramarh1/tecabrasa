import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #c50431;
  font-family: "Arial", sans-serif;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
`;

const RandomDeal = styled.div`
  padding: 10px;
  margin: 20px 0;
  background-color: ${({ bgColor }) => bgColor || "#000"};
  color: ${({ textColor }) => textColor || "#fff"};
  border-radius: 8px;
`;

const products = [
  { id: 1, name: "Wireless Earbuds", image: "/earbuds.jpg", price: 59.99 },
  { id: 2, name: "Smartwatch", image: "/smartwatch.jpg", price: 199.99 },
  { id: 3, name: "Smartwatch", image: "/smartwatch.jpg", price: 799.99 },
  { id: 4, name: "iPhone XR", image: "/iphonexr.jpg", price: 600.00 },
  { id: 5, name: "iPhone 11", image: "/iphone11.jpg", price: 800.00 },
];

const handleAddToCart = (product) => {
  alert(`Added ${product.name} to the cart!`);
};

const App = () => {
  return (
    <Container>
      <Header>Electronics Store</Header>
      <RandomDeal bgColor="#FFD700" textColor="#000">
        Today’s Random Deal: 20% Off Laptops!
      </RandomDeal>
      <ProductGrid>
        <div style={{ display: "flex", gap: "20px", justifyContent: "left" }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </ProductGrid>
    </Container>
  );
};

export default App;

