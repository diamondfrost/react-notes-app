import { React, useState, useEffect } from "react";
import styled from "styled-components";

import Note from "../NoteCardComponent/NoteCard";
import AddNoteCard from "../AddNoteCardComponent/AddNoteCard";
import { getAllNotes } from "../../../service/api";

const NotesContainerBox = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    };
    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
`;

function NotesContainer() {
    // states
    const [notes, setNotes] = useState([]);

    // get all notes
    const loadNotes = () => {
        const response = getAllNotes();
        console.log(response);
        setNotes(response);
    }

    // refresh data
    useEffect(() => {
        loadNotes();
    }, []);

    return (
        <NotesContainerBox>
            {notes.map((note, idx) => (
                <Note
                    id={note.id}
                    key={note.id}
                    text={note.text}
                    notes={notes}
                    loadNotes={loadNotes}
                />
            ))}
            <AddNoteCard
                notes={notes}
                loadNotes={loadNotes}
            />
        </NotesContainerBox>
    );
}

export default NotesContainer;