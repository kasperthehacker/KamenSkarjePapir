var rezultat = document.getElementById("rezultat");
var parentDiv = document.getElementById("izbira");
var textValue;
var compChoise;
var zmaga = null;
var izenacenje = false;
var compScore = 0;
var yourScore = 0;
var evenCount = 0;
var images = [];
var score = createElem("h2");
var html = document.getElementsByTagName("html")[0];
var body = document.querySelector("body");
images.push(createImage("img/škarje.jpg"));
images.push(createImage("img/kamen.jpg"));
images.push(createImage("img/papir.jpg"));

  for( var i = 0; i < images.length; i++){
      parentDiv.appendChild(images[i]);
      images[i].width = 200;
      images[i].height = 200;
  }

images[0].className = "škarje";
images[1].className = "kamen";
images[2].className = "papir";
parentDiv.appendChild(score);
score.innerHTML = yourScore + " : " + compScore + "(" + evenCount + ")";
parentDiv.addEventListener("click", function(e){
    textValue = e.target.className;
    compChoise = compMakingChoise();
    main();
    printRezultat(textValue, compChoise);
});

function main(){
   if(textValue === compChoise){
    zmaga = null;
     izenacenje = true;
  }else if (textValue === "škarje"){
      if(compChoise === "kamen"){
        zmaga = false;
      }else if( compChoise === "papir"){
        zmaga = true;
      }
    } else if( textValue === "papir"){
      if(compChoise === "škarje"){
        zmaga = false;
      }else if(compChoise === "kamen"){
        zmaga = true;
      }
    } else if(textValue === "kamen"){
        if(compChoise === "papir"){
          zmaga = false;
        } else if(compChoise === "škarje"){
          zmaga = true;
        }
    }
}

function createImage(url){
  var image = document.createElement("img");
  image.src = url;
  return image;

}
function createElem(elem){
  var element = document.createElement(elem);
  return element;
}

function compMakingChoise(){
  var randomNum = Math.floor(Math.random() * 3) + 1;
    if(randomNum === 1){
        return "kamen";
    } else if(randomNum === 2){
      return "škarje";
    } else {
      return "papir";
    }

}

function printRezultat(yourChoise, computerChoise){
  if(zmaga === true && izenacenje === false){
    rezultat.innerHTML = "Tvoja izbira: " + yourChoise + ",<br>  izbira računalnika: " + computerChoise +",<br> TI SI ZMAGOVALEC!!!";
    zmaga = null;
    yourScore += 1;
  } else if( zmaga === false && izenacenje === false){
    rezultat.innerHTML = "Tvoja izbira: " + yourChoise + ",<br> izbira računalnika: " + computerChoise +",<br> Zmagal je računalnik, več sreče naslednič";
    zmaga = null;
    compScore += 1;

  }else if(zmaga === null && izenacenje){
    rezultat.innerHTML = "Tvoja izbira: " + yourChoise + ",<br> izbira računalnika: " + computerChoise +",<br> izenačenje <$";
    izenacenje = false;
    evenCount += 1;
  }
  console.log(yourChoise  + ", " + computerChoise);
  score.innerHTML = yourScore + " : " + compScore + "-(" + evenCount + ")";
  if(yourScore >= 10   || compScore >= 10){
    var photo = document.createElement("img");
    photo.src="smeško.jpg";
    photo.width = window.innerWidth ;
    photo.height = window.innerHeight ;
    photo.style.margin = 150;
    html.removeChild(body);
    html.appendChild(photo);
  }
}
