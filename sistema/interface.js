window.addEventListener("load", function () {

    //--> presets iniciais;
    __set().unidade('m');



    document.getElementById("btIniciar").addEventListener("click", function (event) {
      //->Troca para a tela de seleção da unidade métrica;
      //__trocaDisplay("C.J.A.");
      __showHide("logo_others_container");
      __showHide("introInfoContainer");
      __trocaSubDisplay("Selecione o sistema de unidade.");
      __showHide("telaIntro");
      __showHide("telaSelectUnidade");
        
    });




    document.getElementById("btProsseguirUnidade").addEventListener("click", function(event) {
        __showHide("btVerMedidas");
        if(calculo.unidade == 'm'){
            __showHide("btnsBottomContainerMetrico");
            $("#offcanvas-slide").remove("btnsBottomContainerIngles");
            selectDiametroM();
        } else {
            $("#offcanvas-slide").remove("btnsBottomContainerMetrico");
            __showHide("btnsBottomContainerIngles");
            selectDiametroIN();
        }

        __trocaSubDisplay("Informe a quantidade de placas.");
        __showHide("telaSelectUnidade");
        __showHide("telaSelectQuantidadePlaca");


    });

    document.getElementById("btProsseguirDiametroParafuso").addEventListener("click", function(event) {
        __trocaSubDisplay("Selecione o diâmetro do parafuso.");
        __showHide("telaSelectQuantidadePlaca");
        __showHide("telaDiametroParafuso");
        //__set().qtdPlacas(1);
        //console.log("Quantidades de placas definida para " + calculo.qtdPlacas);
        if(calculo.unidade == 'm'){
            __showHide('dmParafusoM');
            selectDiametroM();
        } else {
            if(calculo.unidade == 'in'){
                __showHide('dmParafusoIN');
                selectDiametroIN();
            }
        }
    });

    document.getElementById("btProsseguirSelecaoPlacas").addEventListener("click", function(event) {

        
        __showHide("telaSelecaoPlacas");
        __showHide("telaDiametroParafuso");
        switch(calculo.qtdPlacas){
            case 1:
                    __trocaSubDisplay("Informe a espessura e selecione o material da placa.");    
                if (calculo.unidade == 'm'){
                    document.getElementById("input-espessura-placa-1").placeholder = "Informe o valor desejado em milímetro";
                    __showHide("selectPlacasPlaca1m");
                    __set().setTipoPlaca(1, $("#select-placa-m-t1").val());
                } else {
                    __set().setTipoPlaca(1, $("#select-placa-in-t1").val());
                    document.getElementById("input-espessura-placa-1").placeholder = "Informe o valor desejado em polegada decimal";
                    __showHide("selectPlacasPlaca1in");
                }
            break;

            case 2:
                __trocaSubDisplay("Informe a espessura e selecione o material das placas."); 
                __showHide("selectPlacasInputLabel2");
                if (calculo.unidade == 'm'){
                    document.getElementById("input-espessura-placa-1").placeholder = "Informe o valor desejado em milímetro";
                    document.getElementById("input-espessura-placa-2").placeholder = "Informe o valor desejado em milímetro";
                    __showHide("selectPlacasPlaca1m");
                    __showHide("selectPlacasPlaca2m");
                    __set().setTipoPlaca(1, $("#select-placa-m-t1").val());
                    __set().setTipoPlaca(2, $("#select-placa-m-t2").val());
                } else {
                    document.getElementById("input-espessura-placa-1").placeholder = "Informe o valor desejado em polegada decimal";
                    document.getElementById("input-espessura-placa-2").placeholder = "Informe o valor desejado em polegada decimal";
                    __showHide("selectPlacasPlaca1in");
                    __showHide("selectPlacasPlaca2in");
                    __set().setTipoPlaca(1, $("#select-placa-in-t1").val());
                    __set().setTipoPlaca(2, $("#select-placa-in-t2").val());
                }
            break;

        }


    });

    /*
    Listeners da seleção do diâmetro do para parafuso;
    */
    document.getElementById("select-diametro-parafuso-m").addEventListener("change", function() {
        selectDiametroM();
    });
    document.getElementById("select-diametro-parafuso-in").addEventListener("change", function() {
        selectDiametroIN();
    });

    function selectDiametroM(){
        __set().diamParafuso($("#select-diametro-parafuso-m").val());
        //-->Seleciona a area rosqueada de acordo com a tabela.
        for(let i = 0; i < tdp_m.length; i++){
            if(tdp_m[i].diametro == calculo.diametro) {
                __set().setAt(tdp_m[i].At);
                __set().setWParafuso(tdp_m[i].wParafuso);
                __set().setdFuro(tdp_m[i].furo);
            }
        }
    }

    function selectDiametroIN(){
        __set().diamParafuso($("#select-diametro-parafuso-in").val());
        for(let j = 0; j < tdp_in.length; j++){
            if(tdp_in[j].diametro == calculo.diametro) {
                console.log("Achou a área rosqueada");
                __set().setAt(tdp_in[j].At);
                __set().setWParafuso(tdp_in[j].wParafuso);
                __set().setdFuro(tdp_in[j].furo);
            }
        }
    }

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

        

        function alertaErrosCamposVazios(){
            alert("Verifique o(s) valor(es) informado(s) para a(s) placa(s).");
        }

        let valEspessuraP1 = $("#input-espessura-placa-1").val();
        let valEspessuraP2 = $("#input-espessura-placa-2").val();
        if(calculo.qtdPlacas == 2){
            if(((valEspessuraP1 == '' || valEspessuraP1 == undefined || valEspessuraP1 == null || valEspessuraP1 <= 0))||((valEspessuraP2 == '' || valEspessuraP2 == undefined || valEspessuraP2 == null || valEspessuraP2 <= 0))){
                alertaErrosCamposVazios();
                return;
            }
        } else if (calculo.qtdPlacas == 1){
            if((valEspessuraP1 == '' || valEspessuraP1 == undefined || valEspessuraP1 == null || valEspessuraP1 <= 0)){
                alertaErrosCamposVazios();
                return;
            }
        }
        
        if(calculo.unidade == 'm'){
            if(calculo.qtdPlacas == 1){
                __set().setTipoPlaca(1, $("#select-placa-m-t1").val());
                __set().setEspessuraPlaca(1, valEspessuraP1);
            } else if (calculo.qtdPlacas == 2){
                __set().setTipoPlaca(1, $("#select-placa-m-t1").val());
                __set().setTipoPlaca(2, $("#select-placa-m-t2").val());
                __set().setEspessuraPlaca(1, valEspessuraP1);
                __set().setEspessuraPlaca(2, valEspessuraP2);
            }
        } else if (calculo.unidade == 'in'){
            if(calculo.qtdPlacas == 1){
                __set().setTipoPlaca(1, $("#select-placa-in-t1").val());
            } else if (calculo.qtdPlacas == 2){
                __set().setTipoPlaca(1, $("#select-placa-in-t1").val());
                __set().setTipoPlaca(2, $("#select-placa-in-t2").val());
            }
        }

        __trocaSubDisplay("Selecione a quantidade de arruelas e sua posição.");
        __showHide("telaSelecaoPlacas");
        __showHide("telaSelecaoQtdArroelas");
        
    });



    document.getElementById("btProsseguirTipoArruela").addEventListener("click", function() {
        if((calculo.diametro > 36) && (calculo.unidade == 'm') && (calculo.posArruela != 'nenhuma')){
            alert("Não é possível realizar o cálculo utilizando arruelas, se anteriormente foi escolhido o sistema métrico e um diâmetro maior que 36mm. Verifique e tente novamente!");
            return;
        } else {

            /**
             * Aqui não entendi o que devo fazer para continuar...!
             */
            __trocaSubDisplay("Selecione a espessura (tipo) da arruela");
            __showHide("telaSelecaoTipoArruela");
            __showHide("telaSelecaoQtdArroelas");

            $("#select-tipo-arruela").empty();

            if(calculo.posArruela == 'nenhuma'){
                calculo.tipoArruela = 0;
                $("#btProsseguirTipoPorca").click();
            }

            
            const ElementosTextuaisMetrico = ['N', 'R', 'W'];
            const ElementosTextuaisIngles = ['N', 'W'];
            switch (calculo.unidade){
                case 'm':
                    __showHide("legendaTipoArruelaMetrico");
                    for(let i = 0; i<tdp_m.length; i++){
                        if(calculo.diametro == tdp_m[i].diametro){
                            for(let j = 0; j < tdp_m[i].arruela.length; j++){
                                if(tdp_m[i].arruela[j] != null){
                                    if(calculo.tipoArruela == undefined | ''){
                                        console.log('Auto selecionando o tipo da arruela para: ' + tdp_m[i].arruela[j]);
                                        __set().setTipoArruela(tdp_m[i].arruela[j]);
                                    }
                                    $("#select-tipo-arruela").append("<option value='" + tdp_m[i].arruela[j] + "'>"+tdp_m[i].arruela[j]+"mm "+ ElementosTextuaisMetrico[j] +"</option>");
                                }
                            }
                        }
                    }
                break;
                case 'in':
                    __showHide("legendaTipoArruelaIngles");
                    for(let i = 0; i<tdp_in.length; i++){
                        if(calculo.diametro == tdp_in[i].diametro){
                            for(let j = 0; j < tdp_in[i].arruela.length; j++){
                                if(tdp_in[i].arruela[j] != null){
                                    if(calculo.tipoArruela == undefined | ''){
                                        console.log('Auto selecionando o tipo da arruela para: ' + tdp_in[i].arruela[j]);
                                        __set().setTipoArruela(tdp_in[i].arruela[j]);
                                    }
                                    $("#select-tipo-arruela").append("<option value='" + tdp_in[i].arruela[j] + "'>"+tdp_in[i].arruela[j]+"in "+ ElementosTextuaisIngles[j] +"</option>");
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

        /**
         * Verifica a tela anterior se o TIPO da arruela foi selecionado
         * senão seleciona o primeiro
         */

        if(calculo.tipoArruela == '0'){
            __set().setTipoArruela(parseFloat($("#select-tipo-arruela").val()));
        }
        



        switch(calculo.unidade){
            case 'm':
                __trocaSubDisplay("Selecione o tipo de porca a ser utilizado.");  
                __showHide("container-select-tipo-porca");

                for(let i = 0; i<tdp_m.length; i++){
                    if(calculo.diametro == tdp_m[i].diametro){
                        for(let j = 0; j < tdp_m[i].estilo.length; j++){
                            if(tdp_m[i].estilo[j] != null){
                                $("#select-tipo-porca").append("<option data-porca='" + JSON.stringify(tdp_m[i].estilo[j]) + "'>Estilo "+(j+1)+" -> W:"+tdp_m[i].estilo[j].wPorca+"mm | H:"+tdp_m[i].estilo[j].hPorca+"mm</option>");
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
                        $("#label-info-tipo-porca").text("H: " + tdp_in[i].hPorca + "in   \n\n   W: " + tdp_in[i].wPorca + "in");
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

    document.getElementById("btProsseguirInformacaoAvaliacao").addEventListener("click", function(event){
        __trocaSubDisplay("Preencha os campos abaixo para calcular os fatores de segurança.");
        __showHide("telaSelecaoTipoPorca");
        __showHide("telaInformacaoAvaliacao");

        /**
         * Seleciona automaricamente o tipo da porca caso o usuario nao tenha selecionado
         * ainda;
         */
        if(calculo.porca.wPorca == '0'){
            __set().setPorca($("#select-tipo-porca").find(':selected').data('porca'));
        }

        __showHide('lblCargaExternaTotal');
        if(calculo.unidade == 'm'){
            document.getElementById("input-carga-externa-total").placeholder = "Informe o valor desejado em quilolibra-força (Kips)";
        } else {
            document.getElementById("input-carga-externa-total").placeholder = "Informe o valor desejado em Newton (N)";
        }

        //--->valor padrão para facilidar caso o usuario avance sem selecionar nada...;
        __set().setPlanoCalculoResistencia('tabelada');
    });


    document.getElementById("select-valor-tabela-sae").addEventListener("change", function() {
        __set().setValorResistencia($("#select-valor-tabela-sae").val());
    });

    document.getElementById("select-valor-tabela-astm").addEventListener("change", function() {
        __set().setValorResistencia($("#select-valor-tabela-astm").val());
    });

    document.getElementById("select-valor-tabela-metrico").addEventListener("change", function() {
        __set().setValorResistencia($("#select-valor-tabela-metrico").val());
    });

    document.getElementById("input-quantidade-parafuso").addEventListener("keyup", function() {
        __set().setQuantidadeParafuso($("#input-quantidade-parafuso").val());
    });

    document.getElementById("input-carga-externa-total").addEventListener("keyup", function() {
        __set().setCargaExterna($("#input-carga-externa-total").val());
    });

    document.getElementById("btProsseguirEscolhaEspecificacaoParafuso").addEventListener("click", function() {
        
        
        if(calculo.quantidadeParafusos == 0 || calculo.quantidadeParafusos == undefined){
            alert("Informe uma quantidade de parafusos antes de prosseguir.");
            return;
        }
        
        if(calculo.cargaExternaTotal == 0 || calculo.cargaExternaTotal == undefined){
            alert("Informe uma quantidade de carga externa antes de prosseguir.");
            return;
        }
        
        
        __showHide("telaEscolherEspecificacaoParafuso");
        __showHide("telaInformacaoAvaliacao");
        
        __trocaSubDisplay("Escolha a classe/resistência mínima de prova (Sp).");

        if(calculo.unidade == 'in'){
            __trocaSubDisplay("Escolha a norma/especificação. <br> Escolha a classe /resistência mínima de prova (Sp).")
        }
        
        if(calculo.unidade == 'in' && calculo.planoResistencia == 'tabelada'){
            __showHide("container-opt-tabelada-ingles");
            __set().setValorResistencia($("#select-valor-tabela-sae").val());
        } else if(calculo.unidade == 'm' && calculo.planoResistencia == 'tabelada'){
            __showHide("container-opt-tabelada-metrico");
            __set().setValorResistencia($("#select-valor-tabela-metrico").val());
        } else if(calculo.planoResistencia == 'calculada'){
            __trocaSubDisplay("Informe o valor da resistência mínima de escoamento (Sy)");    
            __showHide("container-opt-calculada");
            if(calculo.unidade == 'in'){
                document.getElementById("input-resistencia-calculada").placeholder = "Informe o valor desejado em Kilo Psi (Kpsi)";
            } else {
                document.getElementById("input-resistencia-calculada").placeholder = "Informe o valor desejado em Mega Pascal (MPa)";
            }
        }
        

    });

    document.getElementById("input-resistencia-calculada").addEventListener("keyup", function(){
        __set().setValorResistencia($("#input-resistencia-calculada").val());
    });
    

    document.getElementById("btProsseguirTelaTipoConexao").addEventListener("click", function(){

        if(calculo.planoResistencia == 'calculada'){
            if(calculo.valorResistencia == 0 || calculo.valorResistencia == undefined){
                alert("Verifique o valor da resistência antes de prosseguir.");
                return;
            }
        }


        __trocaSubDisplay("Informe se a conexão utilizada é permanente ou não permanente.");

        __showHide("telaTipoConexao");
        __showHide("telaEscolherEspecificacaoParafuso");
        //---valor padrão para caso o usuário avance sem selecionar nada.;
        __set().setPlanoCalculoLigacao('permanente');

    });

    document.getElementById("btProsseguirCalculoFinal").addEventListener("click", function(event) {

        __trocaSubDisplay("Selecione a quantidade de arruelas.");
        __showHide("telaCalculoFinal");
        __showHide("telaTipoConexao");

        var resultRigidez = calcRigidez(calculo);
        var resultRigidezMembros = calcRigidezMembros(calculo);

        var resultFp = calcFp(calculo);
        var resultFi = calcFi(calculo);
        var resultFracaoCargaC = calcFracaoCargaC(calculo);
        var resultPp = calcPp(calculo);
        var resultNp = calcNp(calculo);
        var resultNl = calcNl(calculo);
        var resultNo = calcNo(calculo);

        $("#telaCalculoFinal").append("<p>Calculo de Rigidez: " + resultRigidez + "</p>");
        $("#telaCalculoFinal").append("<p>Calculo de Rigidez dos Membros: " + resultRigidezMembros.km + "</p>");
        $("#telaCalculoFinal").append("<p>Calculo de Rigidez: " + resultRigidez + "</p>");
        $("#telaCalculoFinal").append("<p>-----Informações Gerais--------------------------------------------</p>");
        $("#telaCalculoFinal").append("<p>Unidade de medidada: " + calculo.unidade + "</p>");
        $("#telaCalculoFinal").append("<p>Diâmetro do Parafuso: " + calculo.diametro + "</p>");
        $("#telaCalculoFinal").append("<p>Área Rosqueada: " + calculo.AreaRosqueada + "</p>");
        $("#telaCalculoFinal").append("<p>Quantidade de Placas: " + calculo.qtdPlacas + "</p>");
        $("#telaCalculoFinal").append("<p>Posicao Arruela: " + calculo.posArruela + "</p>");
        $("#telaCalculoFinal").append("<p>Total Arruela: " + calculo.tipoArruela + "</p>");
        for(var i; i<calculo.qtdPlacas; i++){
            $("#telaCalculoFinal").append("<p>PLACA ["+ i +"] TIPO: " + calculo.placa[i].tipo + "</p>");
            $("#telaCalculoFinal").append("<p>PLACA ["+ i +"] ESPESSURA: " + calculo.placa[i].espessura + "</p>");
        }
        $("#telaCalculoFinal").append("<p>wParafuso : " + calculo.wParafuso + "</p>");
        $("#telaCalculoFinal").append("<p>Tamanho do Furo: " + calculo.furo + "</p>");


        $("#telaCalculoFinal").append("<p>Calculo Fp: " + resultFp + "</p>");
        $("#telaCalculoFinal").append("<p>Calculo Fi: " + resultFi + "</p>");
        $("#telaCalculoFinal").append("<p>Calculo Fração da Carca (C): " + resultFracaoCargaC + "</p>");
        $("#telaCalculoFinal").append("<p>Calculo Pp: " + resultPp + "</p>");
        $("#telaCalculoFinal").append("<p>Calculo Np: " + resultNp + "</p>");
        $("#telaCalculoFinal").append("<p>Calculo Nl: " + resultNl + "</p>");
        $("#telaCalculoFinal").append("<p>Calculo No: " + resultNo + "</p>");
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
        setWParafuso: (wParafuso) => {
            calculo.wParafuso = wParafuso;
            console.log('wParafuso: ' + calculo.wParafuso);
        },
        setdFuro: (dFuro) => {
            calculo.furo = dFuro;
            console.log('dFuro: ' + calculo.furo);
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

            if(calculo.posArruela == 'ambos'){
                console.log("Duas arruelas serão utilizadas, portanto o valor será multiplicado.");
                calculo.tipoArruela += calculo.tipoArruela;
            }

            console.log("Tipo da arruela:" + calculo.tipoArruela );
        },
        setQuantidadeParafuso : (quantidade) => {
            calculo.quantidadeParafusos = quantidade;
            console.log("Quantidade de parafusos informada: " + calculo.quantidadeParafusos);
        },
        setCargaExterna : (carga) => {
            calculo.cargaExternaTotal = carga;
            console.log("Carga externa total informada: " + calculo.cargaExternaTotal);
        },
        setPlanoCalculoResistencia : (plano) => {
            calculo.planoResistencia = plano;
            console.log("O selecinou: " + calculo.planoResistencia + " como plano para calcular a resistencia");
        },
        setPlanoCalculoLigacao : (plano) => {
            calculo.planoLigacao = plano;
            console.log("O selecinou: " + calculo.planoLigacao);
        },
        setValorResistencia : (resistencia) => {
            calculo.valorResistencia = resistencia;
            console.log("valor da resistencia selecionada: " + calculo.valorResistencia);
        }
    }
}



