import { useContext } from 'react'

import React, { createContext } from 'react'

const TodoContext = (props) => {
  return (
   <h1>{props.children}</h1>
  )
}

export default TodoContext