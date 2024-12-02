import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
 
const App = () => {
  // setState ban đầu nếu trong localStorage có dữ liệu thì lấy dữ liệu trong đó còn nếu không thì thôi

  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app'));
    return savedNotes || [
      {
        id: nanoid(),
        text: "This is my first note!",
        date: "04/07/2023"
      },
      {
        id: nanoid(),
        text: "This is my second note!",
        date: "04/07/2023"
      },
      {
        id: nanoid(),
        text: "This is my third note!",
        date: "04/07/2023"
      }
    ];
  })

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app')
    );
    
    console.log(savedNotes);

    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app',
      JSON.stringify(notes)
    )
  }, [notes])

  const addNote = (text) => {
    let currentDate = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: currentDate.toLocaleDateString()
    }
    setNotes([...notes, newNote]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) => note.text.includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
};

export default App;