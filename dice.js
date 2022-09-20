var n=Math.floor(Math.random()*6)+1;
var s1="images/dice"+n+".png";
document.querySelector(".img1").setAttribute("src", s1);
var m=Math.floor(Math.random()*6)+1;
var s2="images/dice"+m+".png";
document.querySelector(".img2").setAttribute("src", s2);
if(m>n){
  document.querySelector("h1").innerHTML=( "Player 2 wins");
}
else if(n>m){
  document.querySelector("h1").innerHTML=("Refresh Me", "Player 1 wins");
}
else{
  document.querySelector("h1").innerHTML=("Refresh Me", "Its a tie");
}
