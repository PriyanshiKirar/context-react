
import { useContext } from 'react';
import { Datacontext } from '../App';

const Nav = () => {
    // const {data}=props;
    const [data,setdata]=useContext(Datacontext);
  return (
    <>
    <h1>{data}</h1>
    </>
  )
}

export default Nav