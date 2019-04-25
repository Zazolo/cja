window.addEventListener("load", function () {

    //--> presets iniciais;
    __set().unidade('m');


    document.getElementById("btIniciar").addEventListener("click", function (event) {
      //->Troca para a tela de seleção da unidade métrica;
      __trocaDisplay("C.J.A.");
      __trocaSubDisplay("Selecine a unidade métrica na qual será utilizada no cálculo.");
      __showHide("telaIntro");
      __showHide("telaSelectUnidade");

    });

    document.getElementById("btProsseguirUnidade").addEventListener("click", function(event) {
        __trocaSubDisplay("Informe a quantidade de placas que serão utilizadas.");
        __showHide("telaSelectUnidade");
        __showHide("telaSelectQuantidadePlaca");
    });

    document.getElementById("btProsseguirDiametroParafuso").addEventListener("click", function(event) {
        __trocaSubDisplay("Selecione o diâmetro do parafuso que será utilizado.");
        __showHide("telaSelectQuantidadePlaca");
        __showHide("telaDiametroParafuso");

        if(calculo.unidade == 'm'){
            __showHide('dmParafusoM');
        } else {
            if(calculo.unidade == 'in'){
                __showHide('dmParafusoIN');
            }
        }
    });
});

function __showHide(elemento){
    var el = document.getElementById(elemento);
    if(el.classList.contains("uk-hidden")){
        el.classList.remove("uk-hidden");
    } else {
        el.classList.add("uk-hidden");
    }
}

function __trocaDisplay(texto){
    document.getElementById("displayInfoTitle").innerText = texto;
}

function __trocaSubDisplay(texto){
    document.getElementById("displayInfoSubTitle").innerText = texto;
}

function __set(){
    return {
        unidade: (un) => {
            calculo.unidade = un;
            console.log('Unidade de cálculos alterada para ' + un);
        }
    }
}