function AbreFecha() {
  if (document.getElementById("aside").className.indexOf("aberto") == -1)
    document.getElementById("aside").className = document
      .getElementById("aside")
      .className.replace("fechado", "aberto");
  else
    document.getElementById("aside").className = document
      .getElementById("aside")
      .className.replace("aberto", "fechado");
}
function Fecha() {
  document.getElementById("aside").className = document
    .getElementById("aside")
    .className.replace("aberto", "fechado");
}

function Seguir() {
  var header = document.getElementById("Menu_Celullar");
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

var contador = 1;
var img1 = "img/jpg/bateria.jpg";
var img2 = "img/jpg/piano.jpg";
var img3 = "img/jpg/violao.jpg";
var img4 = "img/jpg/violino.jpg";
var tempo = 5000;
var exibir = setInterval("Exibindo()", tempo);
function Exibindo() {
  document.images["slide"].src = eval("img" + contador);
  if (contador < 4) contador++;
  else contador = 1;
}
