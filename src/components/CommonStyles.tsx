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
  &:hover,
  :focus {
    color: #ffa542;
    transform: scale(1.5);
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
  border-top-left-radius: 80px 80px;
  border-top-right-radius: 80px 80px;
  color: #101010;
`;
export const HeaderLogoImg = styled.img``;
export const LyricsBlock = styled.div`
  margin: 10px auto;
  font-style: italic;
`;
export const ManifestLyricsBLock = styled.div`
  text-align: center;
  font-size: clamp(1rem, 1.5vw, 2rem);
`;
export const MainPageManifestPicture = styled.img`
  max-width: 30em;
  @media screen and (max-width: 500px) {
    max-width: 19em;
  }
`;
export const ManifestPictureContainer = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-self: center;
`;
export const MainPageManifestWrapper = styled.div`
  display: flex;
  padding: 2em;
  justify-content: space-around;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const SliderPicture = styled.img`
  max-width: 20em;
  padding-bottom: 30px;
`;
export const CarouselContainer = styled.div`
  margin: 1.5em auto;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

export const SliderHeading = styled.h2`
  margin: 1em;
`;
export const FooterDate = styled.div`
  padding: 0 15px;
`;

export const PageUpLink = styled.a`
position: sticky;
  bottom: 5px;
  background-color: #f3f9a5;
  opacity: 0.6;
  
  color: #511f31;
  cursor: pointer;
    text-decoration: none;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 2em;

    border-radius: 50%;
    margin: 0 2em;
     &:hover,
  :focus {
    background-color: #f7f9ff;
    color: #2c5777;
  }
    @media screen and (max-width: 700px) {
    width: 65px;
    font-size: 2em;
    left: 14em;
    margin: 0 5px;
  }
}
`;
export const ListLink = styled.a`
  color: black;
  text-decoration: none;
  transition: transform 0.2s;
  margin-bottom: 1em;
  &:hover,
  :focus {
    transform: scale(1.5);
    color: #ce871d;
  }
`;
export const FlyingBastards = styled.img`
  max-width: 90%;
`;
export const CenteredContent = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;
export const PanImg = styled.img`
  max-width: 90%;
`;
export const BalladesPageContainer = styled.div``;
export const MudakPicture = styled.img`
  position: relative;
  cursor: pointer;
  width: 177px;
  height: 160px;
  left: 0;
  transition: left 5s cubic-bezier(0, 0, 1, 1);
`;

export const AboutUsPageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const ProductImage = styled.img`
  max-width: 219px;
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
  margin: 10px;
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
export const AboutUsText = styled.div`
  margin: 2em 0;
  font-size: clamp(1rem, 1.5vw, 3rem);
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
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #511f31;

  align-items: center;
  width: fit-content;
  margin: 2em auto;
  padding: 1em;
  border-radius: 5px;
`;

export const FormInput = styled.input`
  min-height: 3em;
  min-width: 20em;
  color: #511f31;
  background-color: #f7f9ff;
  border: 1px solid #511f31;
  border-radius: 5px;
  padding: 5px;
  position: relative;
`;

export const FormSubmitBtn = styled.input`
  min-height: 3em;
  min-width: 15em;
  background-color: #f3f9a5;
  color: #511f31;
  border: 1px solid #511f31;
  border-radius: 5px;
`;

export const ErrorDiv = styled.div`
  color: red;
  display: flex;
  text-align: center;
`;

export const FormFieldLabel = styled.label`
  background-color: #511f31;
  color: #f3f9a5;
  text-align: center;
`;
export const FormErrorSpan = styled.span`
  background-color: #511f31;
  color: red;
`;

export const ToggleButton = styled.button`
  background-color: rgb(247, 249, 255);
  border: none;
  position: absolute;
  z-index: 2;
  right: 7px;
  top: 5px;
`;

export const ShowHideIconImg = styled.img`
  max-width: 2em;
  background-color: rgb(247, 249, 255);
`;
export const PasswordInputContainer = styled.div`
  position: relative;
  border-radius: 5px;
`;
export const RegistrationPageInfoDiv = styled.div`
  margin: 10px auto;
  max-width: 20em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;
export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1em;
`;
export const HeroContainer = styled.div`
  padding: 1em;
  text-align: center;
  width: 20%;
  border: 1px solid black;
  margin: 20px;
  @media screen and (max-width: 900px) {
    width: 40%;
  }

  @media screen and (max-width: 495px) {
    width: 100%;
  }
`;
export const GalleryHeroImg = styled.img`
  max-width: 5em;
`;
export const ModalHeroContainer = styled.div`
  text-align: center;
  padding: 1em;
  background-color: white;
  * {
    background-color: white;
  }
`;
export const ModalHeroImg = styled.img`
  max-width: 100%;
`;

export const ModalDescription = styled.div`
  font-style: italic;
  font-size: large;
`;
export const ChatPointerContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const ChatPointer = styled.a`
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 50px);
  color: black;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, purple);
  background-clip: text;
  -webkit-background-clip: text;
  padding-bottom: 65px;
  &:hover,
  :focus {
    color: transparent;
    transition: 500ms ease;
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
    transform: scale(1.5);
  }
`;

export const FooterIcon = styled.img`
  max-width: 30px;
  &:hover,
  :focus {
    color: #ffa542;
    transform: scale(1.5);
  }
`;

export const ProductTitle = styled.h2`
  font-size: 18px;
`;
export const ProductPrice = styled.span`
  color: #ffa542;
  font-weight: 500;
`;
