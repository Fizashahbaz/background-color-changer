function changeColor(){
    let letters="0123456789ABCDEF"
    let color ="#" 

 for(let i = 0; i < 6; i++){
    color+=letters[Math.floor( Math.random()*16)]
 
 }
    return color
}

document.getElementById("changecolor").addEventListener("click",()=>{
    const colorChanger=changeColor();
    document.body.style.backgroundColor=colorChanger
    document.getElementById("heading").style.color=colorChanger

})