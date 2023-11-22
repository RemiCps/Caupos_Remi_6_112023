import React from 'react'
import "../Main/Main.scss"

function Main({children}) {
  return (
    <main className='main'>{children}</main>
  )
}

export default Main