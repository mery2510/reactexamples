import { useState } from 'react';
import './App.css';

// bir resmin üsütne tıklandığında yeni bir resim açan kod 
function App2(){
    const [src, setSrc] = useState ("https://content.codecademy.com/courses/React/react_photo-puppy.jpeg");
    const [alt, setAlt] = useState ("kitty");
    const[sideLength, setSideLength] = useState (300);
    // let sideLength = 300;     


    const handleClick = (e) => {
        setSrc ("https://content.codecademy.com/courses/React/react_photo-kitty.jpg" );
        setAlt ("doggy");
        if (e.shiftKey === true)
        {
            setSideLength (sideLength +10);
        }
    }
    const handleClick2 = () => {
        setSideLength(sideLength -10);
    }
    const handleMouse = (e) => {
        if(e.ctrlKey === true){
            setSideLength(sideLength -50);
        }
    }
    console.log(sideLength);

return (
    <img
        onClick={handleClick} 
        onContextMenu = {handleClick2} 
        onMouseOver={handleMouse}    
        src = {src} 
        alt = {alt} 
        height={sideLength + 'px' } 
        width = {sideLength + 'px'} 
    />
)

}
export default App2;




