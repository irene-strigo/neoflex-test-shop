import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { MainContentWrapper, MainWrapper, PageWrapper } from './PagesStyles';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Headphones, WirelessHeadphones } from '../components/ProductsData';
import ProductCard from '../components/ProdctCard';

const MainPage = () => {
  return (
    <PageWrapper>
      <Header />
      <MainWrapper>
        <h3>Наушники</h3>
        <MainContentWrapper>
          {Headphones.map((el) => (
            <ProductCard
              key={el.id}
              img={el.img}
              title={el.title}
              price={el.price}
              rate={el.rate}
              isInCart={false}
              isInFavorites={false}
            ></ProductCard>
          ))}
        </MainContentWrapper>
        <h3>Беспроводные наушники</h3>
        <MainContentWrapper>
          {WirelessHeadphones.map((el) => (
            <ProductCard
              key={el.id}
              img={el.img}
              title={el.title}
              price={el.price}
              rate={el.rate}
              isInCart={false}
              isInFavorites={false}
            ></ProductCard>
          ))}
        </MainContentWrapper>
      </MainWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
