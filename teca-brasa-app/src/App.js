import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  font-family: "Arial", sans-serif;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
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

const App = () => {
  return (
    <Container>
      <Header>Electronics Store</Header>
      <RandomDeal bgColor="#FFD700" textColor="#000">
        Today’s Random Deal: 20% Off Laptops!
      </RandomDeal>
      <ProductGrid>
        {/* Add Product Cards */}
      </ProductGrid>
    </Container>
  );
};

export default App;

