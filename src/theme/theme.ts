import { IThemeInterface } from ".";
import ittyni from "../ittyni";

export const theme : IThemeInterface= {
    color :{
      defaultColor: "#ffffff",
      primaryColor: "#e9e9eb",
      secondaryColor : "#2a2c39",
      thirdColor : "#3a3f48",
      fourthColor : "#423030"
    },
    font : {
      fontSize : 12,
      fontFamily : 'roboto'
    },
    windowHeight : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
};