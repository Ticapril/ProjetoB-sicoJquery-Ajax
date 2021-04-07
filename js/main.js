function consultaCep(){
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" +  cep   + "/json/";
    console.log(url);
    
    $.ajax({
        url: url,
        type: "GET", //requisição pelo navegador
        success: function(response){
           console.log(response);
           $("#cepDigitado").html(response.cep);
           $("#logradouro").html(response.logradouro);
           $("#bairro").html(response.bairro);
           $("#localidade").html(response.localidade);
           $("#cep").html(response.cep);
           $("#ddd").html(response.ddd);
           $("#siafi").html(response.siafi);
           $("#uf").html(response.uf);
           $("#ibge").html(response.ibge);
           $("#tituloCep").html("Cep: " + response.cep);
           $(".cep").show();
           $(".barra-progresso").hide();
        }
    })
}
$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();

});
