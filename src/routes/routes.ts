import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import HomePage from "../pages/homePage/HomePage";

import { Route as RouteType } from './../types/Raute'; 


export const routes : RouteType[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contact',
    component: Contact,
  },
];
