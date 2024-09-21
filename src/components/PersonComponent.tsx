import React, { ReactElement } from 'react';
import {
  ProductImage,
  ProductCardContainer,
  ProductTextContainer,
  ProductText,
} from './CommonStyles';
type Props = {
  name: string;
  text: ReactElement;
  image?: string;
};
const Person = ({ name, text, image }: Props) => {
  return (
    <ProductCardContainer>
      <ProductImage src={image} alt="portrait"></ProductImage>
      <ProductTextContainer>
        <h2>{name}</h2>
        <ProductText>{text}</ProductText>
      </ProductTextContainer>
    </ProductCardContainer>
  );
};

export default Person;
