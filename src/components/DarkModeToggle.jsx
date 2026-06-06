import React from 'react'

const DarkModeToggle = ({ darkMode, onToggleDarkMode }) => {
  return (
    <button onClick={onToggleDarkMode}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle