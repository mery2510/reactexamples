


const newImage = "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg";

function App2 (){
    const [src, setSrc] = ("https://content.codecademy.com/courses/React/react_photo-puppy.jpeg");
    const[sideLength, setSideLength] =  (300);

}
function handleClick (e) {
    setSrc ("https://content.codecademy.com/courses/React/react_photo-kitty.jpg" );
    setAlt ("doggy");
    if (e.shiftKey === true)
        {
            setSideLength (sideLength +10);
        }
}
function handleRightClick (){
    setSideLength(sideLength -10);
}
function  handleMouse (e){
        if(e.ctrlKey === true){
            setSideLength(sideLength -50);
        }
    }











