var frase = $(".frase").text();
var numPalavras = frase.split(" ").length
//console.log("Metallica\n" + frase);
//console.log(tamFrase);

var tamFrase = $("#tamFrase");
//console.log(tamFrase);

tamFrase.text(numPalavras)