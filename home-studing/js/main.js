var fraseComponent = $(".frase").text()
var numeroPalavras = fraseComponent.split(" ").length
var tamanhoFrase = $("#tamFrase")
tamanhoFrase.text(numeroPalavras)
