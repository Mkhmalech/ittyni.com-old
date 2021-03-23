/* eslint-disable spaced-comment, @typescript-eslint/no-explicit-any */
/// <reference types="react-scripts" />
/// <reference types="redux" />
/// <reference types="./Lab-ittyni" />
/// <reference types="./authentification-redux-lib" />
/// <reference types="./ui-ittyni" />
/// <reference types="./admin" />

interface Ittyni {
  ui : {
    Globals : {
      GlobalStyle : React.JSXElementConstructor
    }
    Article : any
    List : any
    Badge : any
    Links : {
      HomeLink : React.JSXElementConstructor
      LoginLink : React.JSXElementConstructor
      LoginLinkText : React.JSXElementConstructor
      LoginLinkIcon : React.JSXElementConstructor
      TestLink : React.JSXElementConstructor
      tabnav : React.JSXElementConstructor
    }
    Wrapper : {
      Page : React.JSXElementConstructor
      Header : React.JSXElementConstructor
      Header : React.JSXElementConstructor
      Main : React.JSXElementConstructor
      MainContent : React.JSXElementConstructor
      MainSide : React.JSXElementConstructor
      Footer : React.JSXElementConstructor
    }
    Tab : {
      tabNavContainer : React.JSXElementConstructor
    }
    Box : {
      SearchBox : React.JSXElementConstructor
    }
    Nav : {
      UserNav : React.JSXElementConstructor
    }
    Logo : {
      Logo : React.JSXElementConstructor
    }
  }
}

type Test = string

interface Window {
    INITIAL_REDUX_STATE: any
  }
