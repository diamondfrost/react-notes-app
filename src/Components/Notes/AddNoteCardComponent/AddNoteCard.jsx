import React, { useState, useEffect } from "react";
import * as uuid from 'uuid';
import styled from "styled-components";
import { LinearProgress } from "@mui/material";

import { addNote } from "../../../service/api";

const initialNoteValue = {
    id: uuid.v4(),
    text: "",
}

const AddNoteCardContainer = styled.div`
    background: rgba(255,255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: inset -6px -4px 2px rgba(255,255, 255, 0.3);
    border-radius: 15px;
    border: 1.5px solid rgba(255, 255, 255, 0.326);
    color: #FFFFFF;
    padding: 15px;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word-wrap: break-word;
`;

const AddNoteFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const AddNoteCardTextArea = styled.textarea`
    white-space: pre-wrap;
    background: transparent;
    border: none;
    color: #FFFFFF;
    resize: none;
    font-size: 18px;
    &:focus {
        outline: none;
    };
    ::placeholder {
        color: #FFFFFF;
    };
`;

const AddNoteSaveButton = styled.button`
    background: transparent;
    transition: 0.1s ease-in-out;
    border: 1.5px solid #FFFFFF;
    border-radius: 10px;
    color: #FFFFFF;
    padding: 4px 10px;
    font-size: 13px;
    cursor: pointer;
    &:hover {
        background: #FFFFFF;
        border: 1.5px solid #FFFFFF;
        color: #4B1589;
    };
`;

const AddNoteCharProgressBar = styled(LinearProgress)`
    background-color: #FFFFFF !important;
`;

const AddNoteCharProgressBarLabel = styled.span``;


function AddNoteCard({ notes, loadNotes }) {
    const [inputText, setInputText] = useState("");
    const [note, setNote] = useState(initialNoteValue);

    useEffect(() => {
        setNote(prevNote => ({...prevNote, text: inputText}));
    }, [inputText]);

    const saveNoteHandler = async () => {
        console.log("saving note...");
        setNote(prevNote => ({...prevNote, id: uuid.v4()}));
        console.log(note);
        await addNote(notes, note);
        loadNotes();
        // clear input text again
        setInputText("");
    };

    // character limit
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;

    return (
        <AddNoteCardContainer style={{ background: "rgba(255, 255, 255, 0)"}}>
            <AddNoteCardTextArea
                cols="10"
                rows="5"
                value={inputText}
                placeholder="Type...."
                onChange={(e) => setInputText(e.target.value)}
                maxLength="100"
            ></AddNoteCardTextArea>
            <AddNoteFooter>
                <AddNoteCharProgressBarLabel>{charLeft} left</AddNoteCharProgressBarLabel>
                <AddNoteSaveButton onClick={saveNoteHandler}>
                    Save
                </AddNoteSaveButton>
            </AddNoteFooter>
            <AddNoteCharProgressBar
                variant="determinate"
                value={charLeft}
            />
        </AddNoteCardContainer>
    );
}

export default AddNoteCard;