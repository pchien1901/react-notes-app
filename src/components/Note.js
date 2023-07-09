import { MdDeleteForever } from 'react-icons/md';

const Note = ({ note, handleDeleteNote }) => {
  const handleDelete = () => {
    handleDeleteNote(note.id);
  }
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdDeleteForever 
          className='delete-icon' 
          size={'1.3em'} 
          onClick={handleDelete}
        />
      </div>
    </div>
  )
};

export default Note;