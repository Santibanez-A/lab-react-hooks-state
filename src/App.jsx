import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState('all')

  function handleToggleDarkMode() {
    setDarkMode(!darkMode)
  }

  function handleAddToCart(product) {
    setCart([...cart, product])
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />

      <label>Filter by Category: </label>
      <select onChange={handleCategoryChange} value={category}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Veggies">Veggies</option>
      </select>

      <ProductList selectedCategory={category} onAddToCart={handleAddToCart} />

      <Cart cart={cart} />
    </div>
  )
}

export default App
