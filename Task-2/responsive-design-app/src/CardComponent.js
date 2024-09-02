// src/CardComponent.js

import React from 'react';
import styled from 'styled-components';


const Card = styled.div`
  width: 100%;
  max-width: 300px;
  display:flex;
  justify-content:center
  align-items:center;
  flex:row;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: gray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    max-width: 600px;
    padding: 30px;
  }

  @media (min-width: 1024px) {
    max-width: 800px;
    padding: 40px;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
   display:flex;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const CardContent = styled.p`
  font-size: 1rem;
  color:blue;
  
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const CardComponent = () => {
  return (
    <Card>
      <CardTitle>Responsive Card</CardTitle>
      <CardContent>
        This card adjusts its layout and typography based on the screen size.<br></br>Gopisetti Gopi
      </CardContent>
    </Card>
  );
};

export default CardComponent;




