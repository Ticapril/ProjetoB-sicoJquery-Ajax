function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" +  cep   + "/json/";
    console.log(url);
    
    $.ajax({
        url: url,
        type: "GET", //requisição pelo navegador
        success: function(response){
           console.log(response);
           document.getElementById("logradouro").innerHTML = response.logradouro;
           document.getElementById("complemento").innerHTML = response.complemento;
           document.getElementById("bairro").innerHTML = response.bairro;
           document.getElementById("localidade").innerHTML = response.localidade;
           document.getElementById("uf").innerHTML = response.uf;
           document.getElementById("ibge").innerHTML = response.ibge;
           document.getElementById("gia").innerHTML = response.gia;
           document.getElementById("ddd").innerHTML = response.ddd;
           document.getElementById("siafi").innerHTML = response.siafi;
        }
    })
}