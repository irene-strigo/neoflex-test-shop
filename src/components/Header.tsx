import React, { useState } from 'react';

import NavigationButton from './NavigationButton';
import { HeaderButtonsContainer, HeaderLogoImg, HeaderWrapper } from './CommonStyles';
import BurgerButton from './BurgerButton';
import BurgerComponent from './BurgerComponent';
import { Cart } from '../Storage';

export type Button = {
  id: number;
  link: string;
  image: string;
  label: string;
};

type Props = {
  cart: Cart;
};
export const navButtons: Button[] = [
  { id: 1, link: '/favorites', image: '/assets/Icons/hart.svg', label: 'Избранное' },
  { id: 2, link: '/cart', image: '/assets/Icons/cart.svg', label: 'Корзина' },
];
const Header = ({ cart }: Props) => {
  const cartItemsCount = Object.values(cart).reduce((acc, curr) => acc + curr, 0);
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  function processBurger() {
    return isBurgerOpen ? setBurgerOpen(false) : setBurgerOpen(true);
  }

  return (
    <HeaderWrapper>
      <a href="/main">
        <HeaderLogoImg src="/assets/logo.png"></HeaderLogoImg>
      </a>
      <HeaderButtonsContainer>
        {navButtons.map((button) =>
          button.link === '/cart' ? (
            <NavigationButton
              key={button.id}
              link={button.link}
              image={button.image}
              count={cartItemsCount}
            />
          ) : (
            <NavigationButton key={button.id} link={button.link} image={button.image} count={2} />
          ),
        )}
      </HeaderButtonsContainer>
      {isBurgerOpen && (
        <>
          <BurgerComponent isOpen={isBurgerOpen}></BurgerComponent>
        </>
      )}
      <BurgerButton
        sign={isBurgerOpen ? <>&times;</> : <>&equiv;</>}
        isOpen={false}
        onClick={() => {
          processBurger();
        }}
      ></BurgerButton>
    </HeaderWrapper>
  );
};

export default Header;
