document.querySelector(".myButton").addEventListener("click", changeImage); //if Button clicked call function chanegeimage

function changeImage(){
    var diceNumberRandom= Math.floor((Math.random()*6)+1);              //1-6
    console.log(diceNumberRandom);
    
    diceSource="assets/"+diceNumberRandom+".png";    
    console.log(diceSource);                  //assets/1.png-assets/6.png
    document.querySelector(".dice").setAttribute("src", diceSource);
}




