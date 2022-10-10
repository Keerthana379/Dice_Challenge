random1 = Math.floor((Math.random() * 6) + 1);

var image = "dice" + random1 + ".png";

var source = "image/" + image;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", source);

//for image 2

random2 = Math.floor((Math.random() * 6) + 1);

var image2 = "dice" + random2 + ".png";

var source2 = "image/" + image2;

var image12 = document.querySelectorAll("img")[1];

image12.setAttribute("src", source2);


if(random1 > random2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}

else if(random2 > random1){
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}

else{
  document.querySelector("h1").innerHTML = "Draw";
}
