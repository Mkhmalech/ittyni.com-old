import * as React from 'react';
import { store } from '../../..';
import styled from '../../styled-components';
import { device } from '../..';
import { routes } from '../../../routes';
import { Route } from 'react-router-dom';
import ittyni from '../../../ittyni';



interface HeaderProps {
  isAuthPage?: Boolean
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ isAuthPage, children }) => {
  return (
    <>
      <div style={{ display: "flex", background:"white" }}>
        {/* Logo */}
        <ittyni.ui.Logo.Logo className="ittyniLogo">i<span style={{ color: 'red' }}>TT</span>yni</ittyni.ui.Logo.Logo>

        {/* search component */}

        
        {/* user navigation */}
        <ittyni.ui.Nav.UserNav>
          {/* <LoginIcon/> */}
          <ittyni.ui.Links.HomeLink to="/annuaire"> Annuaire </ittyni.ui.Links.HomeLink>

          <ittyni.ui.Links.LoginLink to={`/actes-et-tarifs/`}>
            <ittyni.ui.Links.LoginLinkIcon>
              {/* <LoginIcon /> */}
            </ittyni.ui.Links.LoginLinkIcon>
            <ittyni.ui.Links.LoginLinkText>Actes et tarifs</ittyni.ui.Links.LoginLinkText>
          </ittyni.ui.Links.LoginLink>

          <a href={`https://admin.ittyni.com`}>
            <ittyni.ui.Links.LoginLinkIcon>
              {/* <LoginIcon /> */}
            </ittyni.ui.Links.LoginLinkIcon>
            <ittyni.ui.Links.LoginLinkText>Connecter</ittyni.ui.Links.LoginLinkText>
          </a>
        </ittyni.ui.Nav.UserNav>
      </div>

      {/* tabs navigation */}
      <ittyni.ui.Tab.tabNavContainer style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start"
      }}>
        <div><ittyni.ui.Links.tabnav to={`/laboratoire/maroc/fes`}>Laboratoire</ittyni.ui.Links.tabnav></div>
        <div><ittyni.ui.Links.tabnav to={`/cabinet/maroc/fes`}>Cabinet</ittyni.ui.Links.tabnav></div>
        <div><ittyni.ui.Links.tabnav to={`/rx/maroc/fes`}>Radiologie</ittyni.ui.Links.tabnav></div>
        <div><ittyni.ui.Links.tabnav to={`/clinic/maroc/fes`}>Clinic</ittyni.ui.Links.tabnav></div>
        <div><ittyni.ui.Links.tabnav to={`/pharmacie/maroc/fes`}>Pharmacie</ittyni.ui.Links.tabnav></div>
      </ittyni.ui.Tab.tabNavContainer>

    </>
  );
};

export default Header;


// header container style



