import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;
  const handleNoteTextChange = (e) => {
    // giới hạn 200 kí tự được nhập
    if(characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }
  const handleSaveClick = () => {
    // nếu note không rỗng
    if(noteText.trim().length > 0) {
      handleAddNote(noteText);
      // sau khi thêm note mới thì set giá trị "" để textarea mới không có chữ
      setNoteText('');
    }
  }

  return (
    <div className="note new">
      <textarea 
        rows={'8'} 
        cols={'10'} 
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleNoteTextChange}
      >
      </textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button 
          className="save"
          onClick={handleSaveClick}
        >Save</button>
      </div>
    </div>
  )
}

export default AddNote;