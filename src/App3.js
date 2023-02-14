
import './App.css';
// verlen 2 resmi matematikde oluşturulan rastgele sayı ile ekrana gösterilmesi sağlandı. 

function App3(){
    const pics = {
    kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
    doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
    };
    const random2= Math.random();
    console.log(random2);
    const result = random2 < 0.5  ? 'heads' : 'tails';   // random sayı 0.5'den küçük ise heads çalışır, değilse tails çalışır. 
    const sideLength ="300px";

    let img;
    if(result=== 'heads'){    // eeğer result heads a eşit ise aşağı kod satırı çalışacak 
        img= 
        <img src= {pics.kitty} alt = "kitty" height={sideLength} width={sideLength} />
    }
    else {
        img=     // eşit değilse de aşağıdaki kod satırı çalışacaktır. 
        <img src = {pics.doggy} alt = "doggy" height={sideLength} width= {sideLength}/>}
    // } App3 adındaki fonksiyon çalışacak
    return (
        <div className='App3'>   
            {img}

        </div>
    )
    
};







export default App3;

