import React from "react";
import styled from "styled-components";

import Header from "../CommonComponents/HeaderComponent/Header";
import NotesContainer from "../Notes/NotesContainerComponent/NotesContainer";

const NotesPageContainer = styled.div`
    max-width: 960px;
    margin: 0px auto;
    padding: 0px 15px;
    min-height: 100vh;
`;

function NotesPage () {
    return (
        <NotesPageContainer>
            <Header title='Notes'/>
            <NotesContainer/>
        </NotesPageContainer>
    );
}

export default NotesPage;