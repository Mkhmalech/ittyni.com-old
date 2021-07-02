import * as React from 'react';
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

      </div>
      <div><ittyni.ui.Links.tabnav to={`/laboratoire/maroc/fes`}>Laboratoire</ittyni.ui.Links.tabnav></div>
        <div><ittyni.ui.Links.tabnav to={`/cabinet/maroc/fes`}>Cabinet</ittyni.ui.Links.tabnav></div>
        <div><ittyni.ui.Links.tabnav to={`/rx/maroc/fes`}>Radiologie</ittyni.ui.Links.tabnav></div>
        <div><ittyni.ui.Links.tabnav to={`/clinic/maroc/fes`}>Clinic</ittyni.ui.Links.tabnav></div>
        <div><ittyni.ui.Links.tabnav to={`/pharmacie/maroc/fes`}>Pharmacie</ittyni.ui.Links.tabnav></div>

      {/* tabs navigation */}
      {/* <ittyni.ui.Tab.tabNavContainer style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start"
      }}>
        
      </ittyni.ui.Tab.tabNavContainer> */}

    </>
  );
};

export default Header;


// header container style



