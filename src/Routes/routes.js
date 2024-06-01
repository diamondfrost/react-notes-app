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
      element: <NotesPage />,
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
  ];
