import React, { useState, useEffect } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

import { editNote, deleteNote } from "../../../service/api";

const NoteArea = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    box-shadow: inset -6px -4px 2px rgba(255,255, 255, 0.3);
    border-radius: 15px;
    border: 1.5px solid rgba(255, 255, 255, 0.326);
    color: #fff;
    padding: 15px;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    word-wrap: break-word;
`;

const NoteEditBody = styled.div`
    width: 100%;
    height: 100%;
    textarea {
        white-space: pre-wrap;
        background: transparent;
        border: none;
        color: #fff;
        resize: none;
        font-size: 18px;
        width: 100%;   
    };
    &:focus {
        outline: none;
    };
    ::placeholder {
        color: #fff;
    };

`;

const NoteEditSaveIcon = styled(SaveOutlinedIcon)`
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    };
`;

const NoteFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const NoteDeleteIcon = styled(DeleteForeverOutlinedIcon)`
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    };
`;

function Note ({ id, text, notes, loadNotes }) {
    const [isEditingText, setIsEditingText] = useState(false);
    const [note, setNote] = useState({id: id, text: text});
    const [inputText, setInputText] = useState(text);

    useEffect(() => {
        if (isEditingText){
            setNote(prevNote => ({...prevNote, text: inputText}));
        }
    }, [isEditingText, inputText]);

    const textHandler = (e) => {
        setInputText(e.target.value);
    };

    const textEditSaveHandler = async (id) => {
        await editNote(notes, id, note);
        setInputText("");
        setIsEditingText(false);
        loadNotes();
    };

    // delete note function
    const deleteThisNote = async (id) => {
        await deleteNote(notes, id);
        loadNotes();
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setIsEditingText(false)}>
            <NoteArea>
                <NoteEditBody onDoubleClick={() => setIsEditingText(true)}>
                    {
                        isEditingText ?
                        <textarea
                            cols="10"
                            rows="5"
                            value={inputText}
                            placeholder="Type...."
                            onChange={textHandler}
                            maxLength="100"
                        ></textarea>
                        : <div>{text}</div>
                    }
                </NoteEditBody>
                <NoteFooter style={{ justifyContent: "flex-end" }}>
                    {
                        isEditingText ?
                        <NoteEditSaveIcon
                            onClick={() => textEditSaveHandler(id)}
                            aria-label="Save"
                        />
                        : <div />
                    }
                    <NoteDeleteIcon
                        onClick={() => deleteThisNote(id)}
                        aria-hidden="true"
                    />
                </NoteFooter>
            </NoteArea>
        </OutsideClickHandler>
    );
}

export default Note;