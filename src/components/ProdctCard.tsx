import {
  ProductImage,
  ProductCardContainer,
  ProductTextContainer,
  ProductText,
  ProductTitle,
  ProductPrice,
} from './CommonStyles';
import AddToCartButton from './AddToCartButton';
type Props = {
  img: string;
  title: string;
  price: string;
  rate: string;
  isInCart?: boolean;
  isInFavorites?: boolean;
};
const ProductCard = ({ img, title, price, rate }: Props) => {
  return (
    <ProductCardContainer>
      <ProductImage src={img} alt="product image"></ProductImage>
      <ProductTextContainer>
        <ProductText>
          {' '}
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{`${price}₽`}</ProductPrice>
        </ProductText>
        <ProductText>
          <div>
            <img src="./assets/Icons/star.svg"></img>
            {rate}
          </div>{' '}
          <AddToCartButton
            onClick={(e) => {
              e.preventDefault();
              console.log('action');
            }}
            label={'Купить'}
          />
        </ProductText>
      </ProductTextContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
