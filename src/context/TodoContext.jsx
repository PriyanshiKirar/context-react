import { useContext } from 'react'
import React, { createContext } from 'react'
 export const DataContext=createContext(null);

const TodoContext = (props) => {
  console.log(props);
  return (
   <DataContext.Provider value="heloow">
{props.children}
   </DataContext.Provider>
  )
}

export default TodoContext
