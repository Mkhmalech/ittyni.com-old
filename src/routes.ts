import { Home } from "./theme/layout/home";

export const routes = {
    home : {
        path : '/*',
        component : Home       
    },
    book : {
        path : '/annuaire',
        component : ""       
    },
    procedure : {
        path : '/actes',
        component : ""       
    }
}