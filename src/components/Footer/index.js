import React from 'react';
import {
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterLogo,
  SocialIcon,
  FooterRights,
  FooterSocialIcon,
  FooterWrapper,
  FooterAddress,
  FooterColumn,
  FooterGrid,
} from './index.style';
import { footerData, footerSocials } from '../../data/footer';
import { Row, Section } from '../../globalStyles';

function Footer() {
  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo to="/">
              <SocialIcon src="https://logodix.com/logo/1931246.png" />
              Reign Tech
            </FooterLogo>
            <FooterAddress>66 Albert Rd, 3rd Floor, Woodstock, Cape Town, 7915</FooterAddress>

            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {footerSocials.map((social, index) => (
                <FooterSocialIcon key={index} href="/" target="_blank" aria-label={social.name}>
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>
          {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to="/">
                  {link}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
        <FooterRights>©2023 Reign Tech | All rights reserved. </FooterRights>
      </FooterWrapper>
    </Section>
  );
}

export default Footer;
