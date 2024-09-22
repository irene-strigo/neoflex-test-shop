import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { MainContentWrapper, MainWrapper, PageWrapper } from './PagesStyles';

import { Headphones } from '../components/ProductsData';
import ProductCard from '../components/ProdctCard';
import { getCart } from '../Storage';

const MainPage = () => {
  const [inCart, setInCart] = useState(getCart());

  return (
    <PageWrapper>
      <Header cart={inCart} />
      <MainWrapper>
        <h3>Наушники</h3>
        <MainContentWrapper>
          {Headphones.filter((obj) => obj.group === 1).map((el) => (
            <ProductCard
              key={el.id}
              img={el.img}
              title={el.title}
              price={el.price}
              rate={el.rate}
              isInCart={false}
              isInFavorites={false}
              setInCart={setInCart}
              id={el.id}
            />
          ))}
        </MainContentWrapper>
        <h3>Беспроводные наушники</h3>
        <MainContentWrapper>
          {Headphones.filter((obj) => obj.group === 2).map((el) => (
            <ProductCard
              key={el.id}
              img={el.img}
              title={el.title}
              price={el.price}
              rate={el.rate}
              isInCart={false}
              isInFavorites={false}
              setInCart={setInCart}
              id={el.id}
            />
          ))}
        </MainContentWrapper>
      </MainWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
