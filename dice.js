var a = prompt("enter name of player 1");
var b = prompt("enter name of player 2");




 var randomNumber1 =Math.floor( (Math.random()*6) + 1);
 var randomImageSource = "images/" + "dice" + randomNumber1 + ".png ";
 document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);



 var randomNumber2 =Math.floor( (Math.random()*6) + 1);
 var randomImageSource = "images/" + "dice" + randomNumber2 + ".png ";
 document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);


 if(randomNumber1>randomNumber2){
   document.querySelector("h1").innerHTML= a +" is the winner😎🏆 ";
 }
 else if (randomNumber2>randomNumber1)
 {
   document.querySelector("h1").innerHTML= b + "is the winner😎🏆";
 }
else{
  document.querySelector("h1").innerHTML="Draw play once more!!!🤐";
}
