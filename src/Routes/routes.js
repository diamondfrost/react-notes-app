import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { styled } from "@mui/material/styles";

import HomePage from '../Components/Pages/HomePage';
import About from '../Components/Pages/About';
import CalendarPage from '../Components/Pages/CalendarPage';
import AnnualReport from '../Components/Pages/AnnualReport';
import Teams from '../Components/Pages/Teams';
import Blogs from '../Components/Pages/Blogs';
import SignUp from '../Components/Pages/SignUp';
import NotesPage from "../Components/Pages/NotesPage";
import SignIn from "../Components/Pages/SignIn";

const HomeRoundedIconItem = styled(HomeRoundedIcon)({
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.1)',
    },
});

export const routes = [
    {
      id: 'Home',
      path: '/',
      element: <HomePage />,
      label: <HomeRoundedIconItem aria-hidden="true"/>,
      isActiveStyle: 'false',
      navType: 'navlink',
    },
    {
      id: 'Notes',
      path: '/notes',
      element: <NotesPage />,
      label: 'Notes',
      isActiveStyle: 'true',
      navType: 'navlink',
    },
    {
      id: 'About',
      path: '/about',
      element: <About />,
      label: 'About',
      isActiveStyle: 'true',
      navType: 'navlink',
    },
    {
      id: 'Calendar',
      path: '/calendar',
      element: <CalendarPage />,
      label: 'Calendar',
      isActiveStyle: 'true',
      navType: 'navlink',
    },
    {
      id: 'Annual',
      path: '/annual',
      element: <AnnualReport />,
      label: 'Annual Report',
      isActiveStyle: 'true',
      navType: 'navlink',
    },
    {
      id: 'Teams',
      path: '/team',
      element: <Teams />,
      label: 'Teams',
      isActiveStyle: 'true',
      navType: 'navlink',
    },
    {
      id: 'Blogs',
      path: '/blogs',
      element: <Blogs />,
      label: 'Blogs',
      isActiveStyle: 'true',
      navType: 'navlink',
    },
    {
      id: 'SignUp',
      path: '/sign-up',
      element: <SignUp/>,
      label: 'Sign Up',
      isActiveStyle: 'true',
      navType: 'navlink',
    },
    {
      id: 'SignIn',
      path: '/sign-in',
      element: <SignIn/>,
      label: 'Sign In',
      isActiveStyle: 'true',
      navType: 'navbutton',
    },
  ];
