import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';

import { CartPageContainer, CartProductsDiv, EmptyCartText } from '../components/CommonStyles';
import CartProduct from '../components/CartProduct';
import { getCart } from '../Storage';
import { Headphones } from '../components/ProductsData';
import FinalPrice from '../components/FinalPrice';

const CartPage = () => {
  const [inCart, setInCart] = useState(getCart());
  getCart();
  const inCartIds = Object.keys(inCart);
  const finalPrice = Headphones.filter((obj) => inCartIds.includes(String(obj.id))).reduce(
    (acc, el) => {
      return acc + Number(el.price) * inCart[el.id];
    },
    0,
  );

  return (
    <PageWrapper>
      <Header cart={inCart} />
      <CartPageContainer>
        {Object.keys(inCart).length === 0 && (
          <EmptyCartText>В корзине пока ничего нет...</EmptyCartText>
        )}
        <CartProductsDiv>
          {Headphones.filter((obj) => inCartIds.includes(String(obj.id))).map((el) => (
            <CartProduct
              key={el.id}
              id={el.id}
              img={el.img}
              title={el.title}
              price={el.price}
              count={inCart[el.id]}
              setInCart={setInCart}
            />
          ))}
        </CartProductsDiv>

        <FinalPrice finalPrice={finalPrice} onClick={() => alert(`итоговая цена ${finalPrice}`)} />
      </CartPageContainer>
      <Footer />
    </PageWrapper>
  );
};

export default CartPage;
