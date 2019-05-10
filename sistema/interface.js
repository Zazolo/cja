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
                __showHide("selectPlacasInputLabel2");
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
    Listeners da seleção do diâmetro do para parafuso;
    */
    document.getElementById("select-diametro-parafuso-m").addEventListener("change", function() {
        __set().diamParafuso($("#select-diametro-parafuso-m").val());


        //-->Seleciona a area rosqueada de acordo com a tabela.

        switch(calculo.unidade){
            case 'm':
                for(let i = 0; i < tdp_m.length; i++){
                    if(tdp_m[i].diametro == calculo.diametro) {
                        __set().setAt(tdp_m[i].At);
                    }
                }
            break;
            case 'in':
                for(let i = 0; i < tdp_in.length; i++){
                    if(tdp_in[i].diametro == calculo.diametro) {
                        __set().setAt(tdp_in[i].At);
                    }
                }
            break;
        }
    });
    document.getElementById("select-diametro-parafuso-in").addEventListener("change", function() {
        __set().diamParafuso($("#select-diametro-parafuso-in").val());
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


    document.getElementById("btProsseguirQuantidadeArroela").addEventListener("click", function(event) {

        __trocaSubDisplay("Selecione a quantidade de arruelas.");
        __showHide("telaSelecaoPlacas");
        __showHide("telaSelecaoQtdArroelas");
        
    });



    document.getElementById("btProsseguirTipoArruela").addEventListener("click", function() {
        if((calculo.diametro > 36) && (calculo.unidade == 'm') && (calculo.posArruela != 'nenhuma')){
            alert("Não é possível realizar o cálculo para arruela com o tamanho e unidade selecionados. Verifique e tente novamente!");
        } else {

            
            __trocaSubDisplay("Selecione o tipo da arruela");
            __showHide("telaSelecaoTipoArruela");
            __showHide("telaSelecaoQtdArroelas");

            $("#select-tipo-arruela").empty();

            if(calculo.posArruela == 'nenhuma'){
                $("#btProsseguirTipoPorca").click();
            }
            
            switch (calculo.unidade){
                case 'm':
                    for(let i = 0; i<tdp_m.length; i++){
                        if(calculo.diametro == tdp_m[i].diametro){
                            for(let j = 0; j < tdp_m[i].arruela.length; j++){
                                if(tdp_m[i].arruela[j] != null){
                                    $("#select-tipo-arruela").append("<option value='" + tdp_m[i].arruela[j] + "'>"+tdp_m[i].arruela[j]+"mm</option>");
                                }
                            }
                        }
                    }
                break;
                case 'in':
                    for(let i = 0; i<tdp_in.length; i++){
                        if(calculo.diametro == tdp_in[i].diametro){
                            for(let j = 0; j < tdp_in[i].arruela.length; j++){
                                if(tdp_in[i].arruela[j] != null){
                                    console.log("APPENDING to SELECT (tipo_arruela): " + tdp_in[i].arruela[j]);
                                    $("#select-tipo-arruela").append("<option value='" + tdp_in[i].arruela[j] + "'>"+tdp_in[i].arruela[j]+"in</option>");
                                }
                            }
                        }
                    }
                break;
            }

        }
    });

    document.getElementById("select-tipo-arruela").addEventListener("change", function(event) {
        __set().setTipoArruela(parseFloat($("#select-tipo-arruela").val()));
    });

    document.getElementById("btProsseguirTipoPorca").addEventListener("click", function(event) {
        __showHide("telaSelecaoTipoArruela");
        __showHide("telaSelecaoTipoPorca");
        switch(calculo.unidade){
            case 'm':
                __trocaSubDisplay("Selecione o tipo de porca a ser utilizado.");  
                __showHide("container-select-tipo-porca");

                for(let i = 0; i<tdp_m.length; i++){
                    if(calculo.diametro == tdp_m[i].diametro){
                        for(let j = 0; j < tdp_m[i].estilo.length; j++){
                            if(tdp_m[i].estilo[j] != null){
                                $("#select-tipo-porca").append("<option data-porca='" + JSON.stringify(tdp_m[i].estilo[j]) + "'>Estilo "+(j+1)+" -> W:"+tdp_m[i].estilo[j].wPorca+"/H:"+tdp_m[i].estilo[j].hPorca+"</option>");
                            }
                        }
                    }
                }
            break;
            case 'in':
                __trocaSubDisplay("Confira os dados pré-selecionados na tabela padrão.");
                __showHide("container-info-tipo-porca");

                for(let i = 0; i<tdp_in.length; i++){
                    if(calculo.diametro == tdp_in[i].diametro){
                        console.log("Encontrou: " + "H: " + tdp_in[i].hPorca + " | W: " + tdp_in[i].wPorca);
                        $("#label-info-tipo-porca").text("H: " + tdp_in[i].hPorca + "\nW: " + tdp_in[i].wPorca);
                        calculo.porca.hPorca = tdp_in[i].hPorca;
                        calculo.porca.wPorca = tdp_in[i].wPorca;
                    }
                }
            break;
           


        }
    });

    document.getElementById("select-tipo-porca").addEventListener("change", function(event) {
        __set().setPorca($("#select-tipo-porca").find(':selected').data('porca'));
    });

    document.getElementById("btProsseguirCalculoFinal").addEventListener("click", function(event) {

        __trocaSubDisplay("Selecione a quantidade de arruelas.");
        __showHide("telaCalculoFinal");
        __showHide("telaSelecaoTipoPorca");

        alert("RIGIDEZ: " + calcRigidez(calculo));
        
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
        diamParafuso: (tam) => {
            calculo.diametro = tam;
            console.log('Diâmetro selecionado ' + calculo.diametro);
        },
        setAt: (at) => {
            calculo.AreaRosqueada = at;
            console.log('Area Rosqueada: ' + calculo.AreaRosqueada);
        },
        qtdPlacas: (quantidade) => {
            calculo.qtdPlacas = quantidade; 
            console.log('Quantidade de placas alterada para ' + calculo.qtdPlacas);
        },
        setTipoPlaca: (p, tipo) => {
            p -=1;
            calculo.placa[p].tipo = parseFloat(tipo);
            console.log("PLACA: " + p + " tipo: " + calculo.placa[p].tipo );
        },
        setEspessuraPlaca: (p, espessura) => {
            p -=1;
            console.log("Recebendo a espessura: " + espessura);
            calculo.placa[p].espessura = parseFloat(espessura);
            console.log("PLACA: " + p + " espessura: " + calculo.placa[p].espessura );
        },
        setPorca : (estilo) => {
            calculo.porca = estilo;
            console.log("Estilo recebido: W:" + calculo.porca.wPorca + " H:" + calculo.porca.hPorca);
        },
        setQtdArroela : (qtdArruela, posArruela) => {
            calculo.qtdArruelas = qtdArruela;
            calculo.posArruela = posArruela;
            console.log("QUANTIDADE Arruela: " + calculo.qtdArruelas + " posição: " + calculo.posArruela );
        },
        setTipoArruela : (valor) => {
            calculo.tipoArruela = valor;
            
            //--->Verificar com o Luccas;

            if(calculo.posArruela = 'ambos'){
                console.log("Duas arruelas serão utilizadas, portanto o valor será multiplicado.");
                calculo.tipoArruela += calculo.tipoArruela;
            }

            console.log("Tipo da arruela:" + calculo.tipoArruela );
        }
    }
}



