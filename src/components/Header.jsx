import React from 'react';

function Header({onDarkModeClick, isDarkMode}) {
  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "dark" : "light"} Mode
      </button>
    </header>
  );
}

export default Header;