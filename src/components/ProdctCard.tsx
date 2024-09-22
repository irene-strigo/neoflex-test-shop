import {
  ProductImage,
  ProductCardContainer,
  ProductTextContainer,
  ProductText,
  ProductTitle,
  ProductPrice,
} from './CommonStyles';
import AddToCartButton from './AddToCartButton';
import { Cart, setCart } from '../Storage';

type Props = {
  id: number;
  img: string;
  title: string;
  price: string;
  rate: string;
  isInCart?: boolean;
  isInFavorites?: boolean;
  setInCart: React.Dispatch<React.SetStateAction<Cart>>;
};
const ProductCard = ({ img, title, price, rate, id, setInCart }: Props) => {
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
              setInCart(setCart(id, 1));
            }}
            label={'Купить'}
          />
        </ProductText>
      </ProductTextContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
