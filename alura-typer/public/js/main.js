var tempoInicial = 3;

var frase = $(".frase").text();
var campo = $(".campo-digitacao");

var tamFrase = $("#tamFrase");
var tempoRestante = $("#tempo-digitacao").text();
var numPalavras = frase.split(" ").length();

tamFrase.text(numPalavras)

$(function name() {
    console.log("Scripts carregados");
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
});

function atualizaTamanhoFrase() {
    campo.on("input", function () {
        //console.log("clicked")
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);
        var qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaContadores() {
    campo.one("focus", function () {
        //console.log(tempoRestante);
        var cronometroId = setInterval(function () {
            tempoRestante--;
            //console.log(tempoRestante);
            $("#tempo-digitacao").text(tempoRestante);

            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroId);
            }
        }, 1000);
    });
}

function inicializaCronometro() {
    $("#botao-reiniciar").click(function () {
        campo.attr("disabled", false);
        campo.val("");
        $("#contador-palavras").text("0");
        $("#contador-caracteres").text("0");
        $("#tempo-digitacao").text(tempoInicial);
    });
}