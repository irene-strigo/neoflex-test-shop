import React from 'react';
import { BurgerButtonsContainer } from './CommonStyles';
import NavigationButton from './NavigationButton';
import { navButtons } from './Header';
type Props = {
  isOpen: boolean;
};
const BurgerComponent = ({ isOpen }: Props) => {
  return (
    <BurgerButtonsContainer>
      {isOpen}
      {navButtons.map((button) => (
        <NavigationButton key={button.id} link={button.link} image={button.image} />
      ))}
    </BurgerButtonsContainer>
  );
};

export default BurgerComponent;
