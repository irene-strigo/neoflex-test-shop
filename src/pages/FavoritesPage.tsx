import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PageWrapper } from './PagesStyles';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FAIcon } from '../components/AnimatedComponents';

const FavoritesPage = () => {
  return (
    <PageWrapper>
      <Header />

      <div>
        {' '}
        Page Work in progress... <FAIcon icon={faCog} color="#a8324a" $animated />
      </div>

      <Footer />
    </PageWrapper>
  );
};

export default FavoritesPage;
