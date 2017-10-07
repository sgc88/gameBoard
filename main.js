
$(document).ready(function(){

  console.log("sanity check");
//basic steps of how game works
//1-visually flip the card
//2 if now only 1 face up remember it and leave
// //otherwise
//     //if its 2 cards compare them
//         //if they are equal remove them
//           //if no card left console.log 'win'
//         //else flip back both of them

// $("#box1").attr(
var images = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
images = Shuffle(images);

// set up shuffle methot for images
var shuffled=function(){
  for(var i=1; i<=8; i++){
    $(".ln[name=$(i+1)]").attr('data-card', images[i])
  }
}
//loop through images into boxes
for(var i=1; i<=16; i++){
  $(`#box${i}`).attr("data-card", images[i]);
}
// we should be able to shuffle the images so 2 images don't display next to eachother
function Shuffle(o) {
for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
return o;
};

// set click event to make sure we have access to the boxes and disyplay the images
var clicks= $(".ln").on("click", function(e){
  var imageNumber = $(e.target).attr('data-card');
  $(this).css('background-image', `url('pic${imageNumber}.jpg')`);

  $("#resetBoard").on("onclick", function(){
      $(".ln").css(`background`, ``);
  });


});


// });




















});
