export const getAllNotes = () => {
    const notes = JSON.parse(localStorage.getItem("notes") || "[]");
    console.log(notes);
    return notes;
}

export const addNote = (notes, note) => {
    notes.push(note);
    console.log('added note: ' + note.id + ' - '+ note.text);
    return localStorage.setItem("notes", JSON.stringify(notes));
}

export const editNote = (notes, uid, note) => {
    console.log('editing: ' + uid);
    const index = notes.findIndex(({ id }) => id === uid);
    notes[index] = {id: uid, text: note.text};
    return localStorage.setItem("notes", JSON.stringify(notes));
}

export const deleteNote = (notes, uid) => {
    console.log('deleting: ' + uid);
    const index = notes.findIndex(({ id }) => id === uid);
    notes.splice(index, 1);
    return localStorage.setItem("notes", JSON.stringify(notes));
}