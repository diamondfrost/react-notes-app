import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { styled } from "@mui/material/styles";

import NotesPage from "../Components/Pages/NotesPage";

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
