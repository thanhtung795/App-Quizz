import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Deatail from "../pages/detail/Detail";
import HomePage from "../pages/homePage/HomePage";
import Intro from "../pages/intro/Intro";

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
  {
    path: '/detail/:id',
    component: Deatail,
  },
  {
    path: '/intro',
    component: Intro,
  },
];
