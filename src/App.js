import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contents from './components/Contents';
import Dropdown from './components/Dropdown';
import { useEffect, useState } from 'react';


function App() {
const [open, setopen] = useState(false);

function _open(){
setopen(!open);
}

useEffect(() => {
 function _hidemenu() { 
   if(window.innerWidth>768 && open){
     setopen(!open);
   }
  }
  window.addEventListener('resize',_hidemenu);
})

  return (
    <>
      <Navbar dropf={_open} />
      <Dropdown drop={open} dropf={_open} />
      <Hero />
      <Contents />
    </>
  );
}

export default App;
