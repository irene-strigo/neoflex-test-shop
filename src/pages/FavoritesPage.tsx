import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FAIcon } from '../components/AnimatedComponents';
import { CartPageContainer } from '../components/CommonStyles';
import { getCart } from '../Storage';

const FavoritesPage = () => {
  const [inCart] = useState(getCart());
  return (
    <PageWrapper>
      <Header cart={inCart} />

      <CartPageContainer>
        {' '}
        Page Work in progress... <FAIcon icon={faCog} color="#a8324a" $animated />
      </CartPageContainer>

      <Footer />
    </PageWrapper>
  );
};

export default FavoritesPage;
