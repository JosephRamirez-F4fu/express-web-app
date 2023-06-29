import { useState } from "react";
import { UseUser } from "../context/UserContext";

export default function NotesPage() {
  const {notes, setNotes} = UseUser();
  const [note, setNote] = useState({});
  const [selectedNote, setSelectedNote] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleTitleChange = (event) => {
    setNote({ ...note, title: event.target.value });
  };

  const handleTextChange = (event) => {
    setNote({ ...note, text: event.target.value });
  };

  const handleNoteSubmit = () => {
    const updatedNotes = [...notes];

    if (selectedNote) {
      const index = notes.findIndex((note) => note.id === selectedNote.id);
      if (index !== -1) {
        updatedNotes[index].note.title = note.title;
        updatedNotes[index].note.text = note.text;
      }
    } else {
      const newNote = { id: Date.now(), note: { ...note } };
      updatedNotes.push(newNote);
    }

    setNotes(updatedNotes);
    setNote({});
    setSelectedNote(null);
    setIsOverlayOpen(false);
  };

  const handleNoteDelete = () => {
    const updatedNotes = notes.filter((note) => note.id !== selectedNote.id);
    setNotes(updatedNotes);
    setSelectedNote(null);
    setIsOverlayOpen(false);
  };

  const openOverlay = (note = null) => {
    setSelectedNote(note);
    setNote(note ? note.note : {});
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setSelectedNote(null);
    setIsOverlayOpen(false);
  };

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <main className="h-[88vh] p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-4 rounded shadow cursor-pointer"
            style={{ backgroundColor: getRandomColor() }}
            onClick={() => openOverlay(note)}
          >
            <h3 className="text-lg font-bold">{note.note.title}</h3>
            <p>{note.note.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() => openOverlay()}
        >
          New Note
        </button>
      </div>

      {isOverlayOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeOverlay}
            >
              X
            </button>
            <input
              type="text"
              value={note.title || ""}
              onChange={handleTitleChange}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
              placeholder="Title"
            />
            <textarea
              value={note.text || ""}
              onChange={handleTextChange}
              className="w-full mb-2 p-2 border border-gray-300 rounded"
              placeholder="Text"
            />
            <div className="flex justify-between">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={handleNoteSubmit}
              >
                {selectedNote ? "Edit Note" : "Add Note"}
              </button>
              {selectedNote && (
                <button
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                  onClick={handleNoteDelete}
                >
                  Delete Note
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
