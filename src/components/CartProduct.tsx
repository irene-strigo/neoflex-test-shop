import {
  CartProductCard,
  CartProductContainer,
  CartProductImg,
  CartText,
  ProductPriceInCart,
  ProductTitle,
  TotalProductPrice,
} from './CommonStyles';
import Counter from './Counter';
import DeleteFromCartBtn from './DeleteFromCartBtn';
import { Cart, setCart } from '../Storage';

type Props = {
  id: number;
  img: string;
  title: string;
  price: string;
  rate?: string;
  count: number;
  setInCart: React.Dispatch<React.SetStateAction<Cart>>;
};

const CartProduct = ({ img, title, price, id, count, setInCart }: Props) => {
  const totalCardPrice = +price * count;
  return (
    <CartProductCard>
      <CartProductContainer>
        <CartProductImg src={img} alt="product image"></CartProductImg>
        <Counter
          count={count}
          onClickInc={(e) => {
            e.preventDefault();
            setInCart(setCart(id, +1));
          }}
          onClickDec={(e) => {
            e.preventDefault();
            setInCart(setCart(id, -1));
          }}
        />
      </CartProductContainer>
      <CartText>
        <ProductTitle>{title}</ProductTitle>
        <ProductPriceInCart>{`${price}₽`}</ProductPriceInCart>
      </CartText>
      <DeleteFromCartBtn
        image={'./assets/Icons/delete.svg'}
        onClick={(e) => {
          e.preventDefault();
          setInCart(setCart(id, -1 * count));
        }}
      />

      <TotalProductPrice>{`${totalCardPrice}₽`}</TotalProductPrice>
    </CartProductCard>
  );
};

export default CartProduct;
