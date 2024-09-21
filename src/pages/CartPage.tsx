import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FAIcon } from '../components/AnimatedComponents';

import { AboutUsPageContainer } from '../components/CommonStyles';

const CartPage = () => {
  return (
    <PageWrapper>
      <Header />

      <AboutUsPageContainer>
        <div>
          {' '}
          Page Work in progress... <FAIcon icon={faCog} color="#a8324a" $animated />
        </div>
      </AboutUsPageContainer>
      <Footer />
    </PageWrapper>
  );
};

export default CartPage;
