var frase = $(".frase").text();
var numPalavras = frase.split(" ").length
//console.log("Metallica\n" + frase);
//console.log(tamFrase);

var tamFrase = $("#tamFrase");
//console.log(tamFrase);

tamFrase.text(numPalavras)

var campo = $(".campo-digitacao");
campo.on("input",function(){
    //console.log("clicked")
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);
    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
});

var tempoRestante = $("#tempo-digitacao").text();

campo.one("focus",function(){
//console.log(tempoRestante);
    var cronometroId = setInterval(function(){
        tempoRestante--;
        //console.log(tempoRestante);
        $("#tempo-digitacao").text(tempoRestante);
        
        if(tempoRestante < 1)
        {
            campo.attr("disabled",true);
            clearInterval(cronometroId);
        }


    },1000);
    
});