import React from 'react';
import {
  FooterContacts,
  FooterIcon,
  FooterLinks,
  FooterWrapper,
  HeaderLogoImg,
} from './CommonStyles';
import { navButtons } from './Header';
import NavigationButton from './NavigationButton';

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <HeaderLogoImg src="/assets/logo.png" />
      </div>
      <FooterLinks>
        {navButtons.map((button) => (
          <NavigationButton key={button.id} link={button.link} label={button.label} />
        ))}
        <FooterContacts href="/favorites">Контакты</FooterContacts>
      </FooterLinks>
      <FooterLinks>
        <FooterContacts href="/favorites">Условия сервиса</FooterContacts>
        <div>
          <img src="/assets/Icons/lang.svg" />
          <FooterContacts href="#">Рус</FooterContacts>
          <FooterContacts href="#">Eng</FooterContacts>
        </div>
      </FooterLinks>
      <FooterLinks>
        <div>
          <FooterContacts href="https://vk.com">
            <FooterIcon src="/assets/Icons/VK.svg" />
          </FooterContacts>
          <FooterContacts href="https://telegram.org">
            <FooterIcon src="/assets/Icons/Telegram.svg" />
          </FooterContacts>
          <FooterContacts href="https://whatsapp.com">
            <FooterIcon src="/assets/Icons/Whatsapp.svg" />
          </FooterContacts>
        </div>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
