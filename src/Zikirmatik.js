// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Zikirmatik() {
  const [zikir, setZikir] = useState(0);

  function zikirArtir() {
    setZikir(zikir+1);
  }
  
  return (
    <div>
      <h2>zikir çekme makinesi </h2>
      <button onClick={zikirArtir}>{zikir}</button>
    </div>
  );
}

export default Zikirmatik;
