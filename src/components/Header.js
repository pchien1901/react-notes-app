import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
  const handleChangeMode = () => {
    handleToggleDarkMode(
      (prevMode) => !prevMode
    );
  }
  return (
    <div className='header'>
      <h1>Notes</h1>
      <button 
        className='save'
        onClick={handleChangeMode}
      >
        Toggle Mode
      </button>
    </div>
  )
}

export default Header;