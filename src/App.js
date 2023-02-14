// import logo from './logo.svg';
import './App.css';

import panda2 from './panda.JPG'
import owl2 from './owl.jpg'
import owlCat2 from './owlCat.jpg'    //herhangi bir static öğe eklerekn import et. 

function App() {
  // const countries = ['turkey', 'macaristan', 'rusya','amerika','mısır','azerbeycan','sivas'];
  // const newName = ['meryem', 'feyza','islam','beyza','zehra'];

  const sideLength = "200px";
  const owls = {
    panda: panda2,
    owl: owl2,
    owlCat: owlCat2,
  } 
  const panda = (
    <img
    src = {owls.panda}
    alt = "lazy panda"  
    height={sideLength}
    width = {sideLength}
    />
   );
   const owl = (
    <img
    src = {owls.owl}
    title= "nice owl" 
    height={sideLength}
    width ={sideLength}
    />
   )
   const owlCat= (
    <img
    src= {owls.owlCat}
    title= "owlsCat nice"
    height={sideLength}
    width = {sideLength} />
   )

  return (
    <>
    panda:  {panda} {'\n'}
    owl: {owl}  {'\n'}
    owlcat:  {owlCat}
    </>

  
    
    // <ul>
    //   {
    //    newName.map(x => (
    //       <li>{x}</li>
    //     ))
    //   }
    // </ul>
  
  );
}

export default App;
