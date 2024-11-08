//{make the context in the App.jxs }

// import React, { createContext, useState } from 'react'
// export const Datacontext=createContext(null);
// import Nav from './componets/Nav'
// import Footer from './componets/Footer'
// const App = () => {
//   const [data,setdata]=useState("bhots sra data");
//   return (
 
// <Datacontext.Provider value={[data,setdata]}>
//    <Nav/>
//    <Footer data={data}/>
// </Datacontext.Provider>
//   )
// }
// export default App


// outside context bana rhe h
import { useContext } from 'react';
import { DataContext } from './context/TodoContext'; // Correct capitalization of 'TodoContext'

const App = () => {
    const Data = useContext(DataContext);  // Use correct 'TodoContext'
    console.log(Data);

    return (
        <div>
            <h1>context</h1>  {/* Fixed 'hellow' to 'Hello' */}
            <h2>priyaaa</h2>
            <button>cckic</button>
            <h2>jhjhyiyiyiy</h2>
            <h3>gjgjhhjhjj</h3>
        </div>
    );
}

export default App;