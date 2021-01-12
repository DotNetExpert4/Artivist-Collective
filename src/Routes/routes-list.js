import LandingPage from "../Components/LandingPage";
import About from "../Components/Pages/AboutPage";
//website urls
import { URL_ABOUT_PAGE, URL_LANDING_PAGE } from "../Helpers/urls";

export const PublicRoutes = [
  {
    path: URL_LANDING_PAGE,
    exact: true,
    component: LandingPage,
  },
  {
    path: URL_ABOUT_PAGE,
    exact: true,
    component: About,
  },
];
