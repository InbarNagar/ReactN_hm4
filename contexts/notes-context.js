import { createContext, useState } from "react";

export const NotesContext = createContext();

const NOTES_INITIAL_STATE = [
  {
    id: 0,
    topicId: 0,
    text: "This is fwefwefwf",
  },
  {
    id: 1,
    topicId: 0,
    text: "This is fw  22222",
  },
];

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(NOTES_INITIAL_STATE);

  const getNotes = (topicId) => {
    return notes.filter((note) => note.topicId === topicId);
  };

  const getNotesCount = (topicId) => {
    return getNotes(topicId).length;
  };

  const addNote = ({ text, topicId }) => {
    const note = {
      id: Math.random() * 1000,
      text,
      topicId,
    };
    setNotes([...notes, note]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, getNotes, getNotesCount }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
