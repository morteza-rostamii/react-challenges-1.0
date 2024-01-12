import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div
      className='
      flex items-center w-full bg-red-50
      '
      > 
        <nav
        className='
        flex items-center gap-4 flex-wrap p-4 bg-slate-50
        container mx-auto w-full
        '
        >
          <Link to='/'>Home</Link>
          <Link to='render'>react--render</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header