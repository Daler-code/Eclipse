import React from 'react';

import {
  NavbarStyled, 
  NavStyled, 
  NavLinkStyledDropdown,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavLinkHide,
  NavLinkCustom
} from './styles';

import './styles.scss';

import ButtonPrimary from '../../components/PrimaryButton';
import IconMenu from '../../assets/icons/menu-mobile.png';

export const NavbarMain = () => {
  return (
    <NavbarStyled bg='default' variant='default' expand="lg">
      <NavbarBrand href="/"> 
        The <span>Devs</span>
      </NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav">
        <img src={IconMenu} alt="menu"/>
      </NavbarToggle>
        <NavbarCollapse id="responsive-navbar-nav">
          <NavStyled className="ml-auto">
            <NavLinkCustom to="/">Home</NavLinkCustom>
            <NavLinkCustom to="/how-it-works">Process</NavLinkCustom>
            <NavLinkCustom to="/about">About</NavLinkCustom>
            <li>
              <NavLinkCustom className='nav-item' to="#1">Courses</NavLinkCustom>
              <ul className="sub-menu">
                <NavLinkStyledDropdown to="/course">Frontend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/">Backend development</NavLinkStyledDropdown>
                <NavLinkStyledDropdown to="/">Mobile development</NavLinkStyledDropdown>
              </ul>
            </li>
              <NavLinkHide to="/course">Frontend development</NavLinkHide>
              <NavLinkHide to="/">Backend development</NavLinkHide>
              <NavLinkHide to="/">Mobile development</NavLinkHide>
            <NavLinkCustom to="#3">Prices</NavLinkCustom>
            <ButtonPrimary btnEnrollNavbar>enroll to the course</ButtonPrimary>
          </NavStyled>
        </NavbarCollapse>
    </NavbarStyled>
  );
};

export default NavbarMain;
