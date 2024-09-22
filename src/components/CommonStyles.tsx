import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavButton = styled(Link)`
  cursor: pointer;
  padding: 10px 10px;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  font-size: clamp(1rem, 1vw, 1.5rem);
  white-space: nowrap;
  color: #101010;
  position: relative;
  &:hover,
  :focus {
    color: #ffa542;
    transform: scale(1.1);
  }
  @media screen and (max-width: 900px) {
    margin: 5px;
    font-size: clamp(0.7rem, 1vw, 1.5rem);
  }
`;
export const HeaderWrapper = styled.div`
  min-height: 1em;
  display: flex;
  flex-wrap: wrap;
  max-width: 1110px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
`;
export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1110px;
  height: 149px;
  padding: 30px;
  background-color: white;
  margin: 10px auto;
  border-top-left-radius: 20px 20px;
  border-top-right-radius: 20px 20px;
  color: #101010;
`;
export const HeaderLogoImg = styled.img``;

export const ListLink = styled.a`
  color: black;
  text-decoration: none;
  transition: transform 0.2s;
  margin-bottom: 1em;
  &:hover,
  :focus {
    transform: scale(1.1);
    color: #ce871d;
  }
`;

export const CartPageContainer = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const CartProductsDiv = styled.div`
  width: 633px;
  min-height: 900px;
`;
export const ProductImage = styled.img`
  width: 219px;
  margin: 20px;
  min-height: 237px;
`;

export const ProductCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 20px;
  max-width: 350px;
  height: 407px;
`;
export const ProductTextContainer = styled.div`
  padding: 20px;
  width: 100%;
`;
export const ProductText = styled.div`
  margin: 20px 0;
  font-size: clamp(1rem, 1vw, 3rem);
  display: flex;
  justify-content: space-between;
`;

export const HeaderButtonsContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin: 5px;
justify-content: center;
  @media screen and (max-width: 495px) {
    display: none;
    
    }
  }
 `;
export const BurgerButtonsContainer = styled.div`
 display: none;

 @media screen and (max-width: 495px) {
   display: flex;
   z-index:100;
   flex-direction:column;
   position: absolute;
       width: 100%;
       top: 5em;
       left: 0px;
   }
 }
`;

export const BurgerSignContainer = styled.div`
  display: none;
  font-size: 3em;
  color: #511f31;
  @media screen and (max-width: 495px) {
    display: block;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  color: #101010;
`;

export const FooterContacts = styled.a`
  text-decoration: none;
  font-size: clamp(0.7rem, 1vw, 1.5rem);
  padding: 10px;
  margin: 5px;
  color: #101010;
  font-size: 17px;
  &:hover,
  :focus {
    color: #ffa542;
    transform: scale(1.1);
  }
`;

export const FooterIcon = styled.img`
  max-width: 30px;
  &:hover,
  :focus {
    color: #ffa542;
    transform: scale(1.1);
  }
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
`;
export const ProductPrice = styled.span`
  color: #ffa542;
  font-weight: 500;
`;
export const ProductPriceInCart = styled.span`
  color: #aaaaaa;
`;
export const AddButton = styled.div`
  cursor: pointer;
  &:hover,
  :focus {
    color: #ffa542;
    transform: scale(1.1);
  }
`;

export const CartProductCard = styled.div`
  max-width: 633px;
  height: 218px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin: 15px;
  position: relative;
`;
export const CartProductImg = styled.img`
  max-width: 147px;
`;
export const CartText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const CounterContainer = styled.div`
  display: flex;
  max-width: 119px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const CartProductContainer = styled.div`
  margin: 10px;
`;

export const CounterBtn = styled.div`
  color: white;
  background-color: #ffce7f;
  border-radius: 50%;
  font-size: 2rem;
  width: 46px;
  padding: 3px 15px;
`;
export const NavButtonCounter = styled.div`
color: white;
    background-color: #FFCE7F;
    padding: 2px 3px;
    width: 20px;
    border-radius: 50%;
    font-size: smaller;
    position: absolute;
    right: -3px;
    top: 2px;
}
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const TotalProductPrice = styled.div`
  color: 1C1C27;
  font-weight: 600;
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

export const FinalPriceContainer = styled.div`
  width: 350px;
  height: 120px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
  margin: 15px;
`;

export const FinalPriceBtn = styled.div`
  height: 65px;
  color: white;
  background-color: black;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
`;
export const FinalPriceTotal = styled.div`
  color: black;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
export const EmptyCartText = styled.span`
  font-weight: 600;
  margin: 30px;
  width: 375px;
`;
