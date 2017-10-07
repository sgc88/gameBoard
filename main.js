var faces = [];
// var Tile=[];
$(document).ready(function(){

  console.log("sanity check");

//   // var card1=[]
//
//   $(".ln").on("click",function(){
//     alert("clicked");
// //     var boxNumber=this.getAttribute("img");
// //     console.log("clicked");
// // //visually flip the card
// //if now only face up remember it and leave
// //otherwise
//     //if its 2 cards compare them
//         //if they are equal remove them
//           //if no card left console.log 'win'
//         //else flip back both of them
// //
// // var  playedCrads=[]
// // var flipCard= function(){
// //       if (cardsInPlay[0] ==== cardsInPlay[1]){
// //         //
// //         //remove the cards
// //       }else{
// //         //put them back
// //       }
// //
// //

// $("#box1").attr("name", "1");
// $("#box2").attr("name", "2");
// $("#box3").attr("name", "3");
// $("#box4").attr("name", "4");
// $("#box5").attr("name", "5");
// $("#box6").attr("name", "6");
// $("#box7").attr("name", "7");
// $("#box8").attr("name", "8");
// $("#box9").attr("name", "9");
// $("#box10").attr("name", "10");
// $("#box11").attr("name", "11");
// $("#box12").attr("name", "12");
// $("#box13").attr("name", "13");
// $("#box14").attr("name", "14");
// $("#box15").attr("name", "15");
// $("#box16").attr("name", "16");
var shuffled=function(){

  for(var i=1; i<=8; i++){
    $(".ln[name=$(i+1)]").attr('card', shuffled(i))
  }
}
for(var i=1; i<=16; i++){
  $(`#box${i}`).attr("name", `${i}`);
  $
}
function Shuffle(o) {
for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
return o;
};


// for(var i=1; i<=8; i++){
//   $(`.ln[name="${i}"]`).css('background-image', `url('pic${i}.jpg')`);
//
// }
// $(`.ln[name="1"]`).css('background-image', "url('pic1.jpg')");
// set click event to make sure we have access to the boxes
var clicks= $(".ln").on("click", function(){
$(this).css('background-image', `url('pic1.jpg')`);
  // // var cards;
  // var box=this.setAttribute(images.cardImage);
  // $(this).css('background-image', ``);
});

















});
