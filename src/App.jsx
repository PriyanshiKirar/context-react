import React, { useState } from 'react'
import Nav from './componets/Nav'
import Footer from './componets/Footer'

const App = () => {
  const [data,setdata]=useState("bhots dasra data");
  return (
   <>
   <Nav data={data}/>
   <Footer/>
   </>
  )
}

export default App