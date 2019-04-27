

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

    document.getElementById("btProsseguirSelecaoPlacas").addEventListener("click", function(event) {

        __trocaSubDisplay("Selecione o material para a quantidade de placas solicitadas.");
        __showHide("telaSelecaoPlacas");
        __showHide("telaDiametroParafuso");
        switch(calculo.qtdPlacas){
            case 1:
                if (calculo.unidade == 'm'){
                    __showHide("selectPlacasPlaca1m");
                } else {
                    __showHide("selectPlacasPlaca1in");
                }
            break;

            case 2:
                if (calculo.unidade == 'm'){
                    __showHide("selectPlacasPlaca1m");
                    __showHide("selectPlacasPlaca2m");
                } else {
                    __showHide("selectPlacasPlaca1in");
                    __showHide("selectPlacasPlaca2in");
                }
            break;

        }


    });



    /*
    Listeners da seleção do tipo de material usado nas placas;
    */
    document.getElementById("select-placa-m-t1").addEventListener("change", function(event) {
        __set().setTipoPlaca(1, $("#select-placa-m-t1").val());
    });

    document.getElementById("select-placa-m-t2").addEventListener("change", function(event) {
        __set().setTipoPlaca(2, $("#select-placa-m-t2").val());
    });

    document.getElementById("select-placa-in-t1").addEventListener("change", function(event) {
        __set().setTipoPlaca(1, $("#select-placa-in-t1").val());
    });

    document.getElementById("select-placa-in-t2").addEventListener("change", function(event) {
        __set().setTipoPlaca(2, $("#select-placa-in-t2").val());
    });

    document.getElementById("input-espessura-placa-1").addEventListener("keyup", function(event) {
        __set().setEspessuraPlaca(1, $("#input-espessura-placa-1").val());
    });

    document.getElementById("input-espessura-placa-2").addEventListener("keyup", function(event) {
        __set().setEspessuraPlaca(2, $("#input-espessura-placa-2").val());
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
        },
        qtdPlacas: (quantidade) => {
            calculo.qtdPlacas = quantidade; 
            console.log('Quantidade de placas alterada para ' + calculo.qtdPlacas);
        },
        setTipoPlaca: (p, tipo) => {
            p -=1;
            calculo.placa[p] = {
                tipo: tipo
            };
            console.log("PLACA: " + p + " tipo: " + tipo );
        },
        setEspessuraPlaca: (p, espessura) => {
            p -=1;
            console.log("Recebendo a espessura: " + espessura);
            calculo.placa[p] = {
                espessura: espessura
            };
            console.log("PLACA: " + p + " espessura: " + espessura );
        },
        setWPorca(estilo){
            calculo.porca.estilo = estilo;
            console.log("Estilo recebido: " + estilo);
            
        }
    }
}