window.addEventListener("load", function () {

    //--> presets iniciais;
    __set().unidade('m');
    __showHide("btVerMedidas");
    document.getElementById("btIniciar").addEventListener("click", function (event) {
        //->Troca para a tela de seleção da unidade métrica;
        //__trocaDisplay("C.J.A.");
        __showHide("logo_others_container");
        __showHide("introInfoContainer");
        __trocaSubDisplay("Selecione o sistema de unidade.");
        __showHide("telaIntro");
        __showHide("telaSelectUnidade");

    });




    document.getElementById("btProsseguirUnidade").addEventListener("click", function (event) {
        
        if (calculo.unidade == 'm') {
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

    document.getElementById("btProsseguirDiametroParafuso").addEventListener("click", function (event) {
        __trocaSubDisplay("Selecione o diâmetro do parafuso.");
        __showHide("telaSelectQuantidadePlaca");
        __showHide("telaDiametroParafuso");
        //__set().qtdPlacas(1);
        //console.log("Quantidades de placas definida para " + calculo.qtdPlacas);
        if (calculo.unidade == 'm') {
            __showHide('dmParafusoM');
            selectDiametroM();
        } else {
            if (calculo.unidade == 'in') {
                __showHide('dmParafusoIN');
                selectDiametroIN();
            }
        }
    });

    document.getElementById("btProsseguirSelecaoPlacas").addEventListener("click", function (event) {


        __showHide("telaSelecaoPlacas");
        __showHide("telaDiametroParafuso");
        switch (calculo.qtdPlacas) {
            case 1:
                __trocaSubDisplay("Informe a espessura e selecione o material da placa.");
                if (calculo.unidade == 'm') {
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
                if (calculo.unidade == 'm') {
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
    document.getElementById("select-diametro-parafuso-m").addEventListener("change", function () {
        selectDiametroM();
    });
    document.getElementById("select-diametro-parafuso-in").addEventListener("change", function () {
        selectDiametroIN();
    });

    function selectDiametroM() {
        __set().diamParafuso($("#select-diametro-parafuso-m").val());
        //-->Seleciona a area rosqueada de acordo com a tabela.
        for (let i = 0; i < tdp_m.length; i++) {
            if (tdp_m[i].diametro == calculo.diametro) {
                __set().setAt(tdp_m[i].At);
                __set().setWParafuso(tdp_m[i].wParafuso);
                __set().setdFuro(tdp_m[i].furo);
            }
        }
    }

    function selectDiametroIN() {
        __set().diamParafuso($("#select-diametro-parafuso-in").val());
        for (let j = 0; j < tdp_in.length; j++) {
            if (tdp_in[j].diametro == calculo.diametro) {
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
    document.getElementById("select-placa-m-t1").addEventListener("change", function (event) {
        __set().setTipoPlaca(1, $("#select-placa-m-t1").val());
    });

    document.getElementById("select-placa-m-t2").addEventListener("change", function (event) {
        __set().setTipoPlaca(2, $("#select-placa-m-t2").val());
    });

    document.getElementById("select-placa-in-t1").addEventListener("change", function (event) {
        __set().setTipoPlaca(1, $("#select-placa-in-t1").val());
    });

    document.getElementById("select-placa-in-t2").addEventListener("change", function (event) {
        __set().setTipoPlaca(2, $("#select-placa-in-t2").val());
    });

    document.getElementById("input-espessura-placa-1").addEventListener("keyup", function (event) {
        __set().setEspessuraPlaca(1, $("#input-espessura-placa-1").val());
    });

    document.getElementById("input-espessura-placa-2").addEventListener("keyup", function (event) {
        __set().setEspessuraPlaca(2, $("#input-espessura-placa-2").val());
    });


    document.getElementById("btProsseguirQuantidadeArroela").addEventListener("click", function (event) {



        function alertaErrosCamposVazios() {
            makeAlert("Verifique o(s) valor(es) informado(s) para a(s) placa(s).");
        }

        let valEspessuraP1 = $("#input-espessura-placa-1").val();
        let valEspessuraP2 = $("#input-espessura-placa-2").val();
        if (calculo.qtdPlacas == 2) {
            if (((valEspessuraP1 == '' || valEspessuraP1 == undefined || valEspessuraP1 == null || valEspessuraP1 <= 0)) || ((valEspessuraP2 == '' || valEspessuraP2 == undefined || valEspessuraP2 == null || valEspessuraP2 <= 0))) {
                alertaErrosCamposVazios();
                return;
            }
        } else if (calculo.qtdPlacas == 1) {
            if ((valEspessuraP1 == '' || valEspessuraP1 == undefined || valEspessuraP1 == null || valEspessuraP1 <= 0)) {
                alertaErrosCamposVazios();
                return;
            }
        }

        if (calculo.unidade == 'm') {
            if (calculo.qtdPlacas == 1) {
                __set().setTipoPlaca(1, $("#select-placa-m-t1").val());
                __set().setEspessuraPlaca(1, valEspessuraP1);
            } else if (calculo.qtdPlacas == 2) {
                __set().setTipoPlaca(1, $("#select-placa-m-t1").val());
                __set().setTipoPlaca(2, $("#select-placa-m-t2").val());
                __set().setEspessuraPlaca(1, valEspessuraP1);
                __set().setEspessuraPlaca(2, valEspessuraP2);
            }
        } else if (calculo.unidade == 'in') {
            if (calculo.qtdPlacas == 1) {
                __set().setTipoPlaca(1, $("#select-placa-in-t1").val());
            } else if (calculo.qtdPlacas == 2) {
                __set().setTipoPlaca(1, $("#select-placa-in-t1").val());
                __set().setTipoPlaca(2, $("#select-placa-in-t2").val());
            }
        }

        __trocaSubDisplay("Selecione a quantidade de arruelas e sua posição.");
        __showHide("telaSelecaoPlacas");
        __showHide("telaSelecaoQtdArroelas");

    });



    document.getElementById("btProsseguirTipoArruela").addEventListener("click", function () {
        if ((calculo.diametro > 36) && (calculo.unidade == 'm') && (calculo.posArruela != 'nenhuma')) {
            makeAlert("Não é possível realizar o cálculo utilizando arruelas, se anteriormente foi escolhido o sistema métrico e um diâmetro maior que 36mm. Verifique e tente novamente!");
            return;
        } else {

            /**
             * Aqui não entendi o que devo fazer para continuar...!
             */
            __trocaSubDisplay("Selecione a espessura (tipo) da arruela");
            __showHide("telaSelecaoTipoArruela");
            __showHide("telaSelecaoQtdArroelas");

            $("#select-tipo-arruela").empty();

            if (calculo.posArruela == 'nenhuma') {
                calculo.tipoArruela = 0;
                $("#btProsseguirTipoPorca").click();
            }


            const ElementosTextuaisMetrico = ['N', 'R', 'W'];
            const ElementosTextuaisIngles = ['N', 'W'];
            switch (calculo.unidade) {
                case 'm':
                    __showHide("legendaTipoArruelaMetrico");
                    for (let i = 0; i < tdp_m.length; i++) {
                        if (calculo.diametro == tdp_m[i].diametro) {
                            for (let j = 0; j < tdp_m[i].arruela.length; j++) {
                                if (tdp_m[i].arruela[j] != null) {
                                    if (calculo.tipoArruela == undefined | '') {
                                        console.log('Auto selecionando o tipo da arruela para: ' + tdp_m[i].arruela[j]);
                                        __set().setTipoArruela(tdp_m[i].arruela[j]);
                                    }
                                    $("#select-tipo-arruela").append("<option value='" + tdp_m[i].arruela[j] + "'>" + tdp_m[i].arruela[j] + "mm " + ElementosTextuaisMetrico[j] + "</option>");
                                }
                            }
                        }
                    }
                    break;
                case 'in':
                    __showHide("legendaTipoArruelaIngles");
                    for (let i = 0; i < tdp_in.length; i++) {
                        if (calculo.diametro == tdp_in[i].diametro) {
                            for (let j = 0; j < tdp_in[i].arruela.length; j++) {
                                if (tdp_in[i].arruela[j] != null) {
                                    if (calculo.tipoArruela == undefined | '') {
                                        console.log('Auto selecionando o tipo da arruela para: ' + tdp_in[i].arruela[j]);
                                        __set().setTipoArruela(tdp_in[i].arruela[j]);
                                    }
                                    $("#select-tipo-arruela").append("<option value='" + tdp_in[i].arruela[j] + "'>" + tdp_in[i].arruela[j] + "in " + ElementosTextuaisIngles[j] + "</option>");
                                }
                            }
                        }
                    }
                    break;
            }

        }
    });

    document.getElementById("select-tipo-arruela").addEventListener("change", function (event) {
        __set().setTipoArruela(parseFloat($("#select-tipo-arruela").val()));
    });

    document.getElementById("btProsseguirTipoPorca").addEventListener("click", function (event) {
        __showHide("telaSelecaoTipoArruela");
        __showHide("telaSelecaoTipoPorca");

        /**
         * Verifica a tela anterior se o TIPO da arruela foi selecionado
         * senão seleciona o primeiro
         */

        if (calculo.tipoArruela == '0') {
            __set().setTipoArruela(parseFloat($("#select-tipo-arruela").val()));
        }




        switch (calculo.unidade) {
            case 'm':
                __trocaSubDisplay("Selecione o tipo de porca a ser utilizado.");
                __showHide("container-select-tipo-porca");

                for (let i = 0; i < tdp_m.length; i++) {
                    if (calculo.diametro == tdp_m[i].diametro) {
                        for (let j = 0; j < tdp_m[i].estilo.length; j++) {
                            if (tdp_m[i].estilo[j] != null) {
                                $("#select-tipo-porca").append("<option data-porca='" + JSON.stringify(tdp_m[i].estilo[j]) + "'>Estilo " + (j + 1) + " -> W:" + tdp_m[i].estilo[j].wPorca + "mm | H:" + tdp_m[i].estilo[j].hPorca + "mm</option>");
                            }
                        }
                    }
                }
                break;
            case 'in':
                __trocaSubDisplay("Confira os dados pré-selecionados na tabela padrão.");
                __showHide("container-info-tipo-porca");

                for (let i = 0; i < tdp_in.length; i++) {
                    if (calculo.diametro == tdp_in[i].diametro) {
                        console.log("Encontrou: " + "H: " + tdp_in[i].hPorca + " | W: " + tdp_in[i].wPorca);
                        $("#label-info-tipo-porca").text("H: " + tdp_in[i].hPorca + "in   \n\n   W: " + tdp_in[i].wPorca + "in");
                        calculo.porca.hPorca = tdp_in[i].hPorca;
                        calculo.porca.wPorca = tdp_in[i].wPorca;
                    }
                }
                break;



        }
    });

    document.getElementById("select-tipo-porca").addEventListener("change", function (event) {
        __set().setPorca($("#select-tipo-porca").find(':selected').data('porca'));
    });

    document.getElementById("btProsseguirInformacaoAvaliacao").addEventListener("click", function (event) {
        __trocaSubDisplay("Preencha os campos abaixo para calcular os fatores de segurança.");
        __showHide("telaSelecaoTipoPorca");
        __showHide("telaInformacaoAvaliacao");

        /**
         * Seleciona automaricamente o tipo da porca caso o usuario nao tenha selecionado
         * ainda;
         */
        if (calculo.porca.wPorca == '0') {
            __set().setPorca($("#select-tipo-porca").find(':selected').data('porca'));
        }

        __showHide('lblCargaExternaTotal');
        if (calculo.unidade == 'm') {
            document.getElementById("input-carga-externa-total").placeholder = "Informe o valor desejado em Newton (N)";
        } else {
            document.getElementById("input-carga-externa-total").placeholder = "Informe o valor desejado em quilolibra-força (Kips)";

        }

        //--->valor padrão para facilidar caso o usuario avance sem selecionar nada...;
        __set().setPlanoCalculoResistencia('tabelada');
    });


    document.getElementById("select-valor-tabela-sae").addEventListener("change", function () {
        __set().setValorResistencia($("#select-valor-tabela-sae").val());
    });

    document.getElementById("select-valor-tabela-astm").addEventListener("change", function () {
        __set().setValorResistencia($("#select-valor-tabela-astm").val());
    });

    document.getElementById("select-valor-tabela-metrico").addEventListener("change", function () {
        __set().setValorResistencia($("#select-valor-tabela-metrico").val());
    });

    document.getElementById("input-quantidade-parafuso").addEventListener("keyup", function () {
        __set().setQuantidadeParafuso($("#input-quantidade-parafuso").val());
    });

    document.getElementById("input-carga-externa-total").addEventListener("keyup", function () {
        __set().setCargaExterna($("#input-carga-externa-total").val());
    });



    document.getElementById("btProsseguirEscolhaEspecificacaoParafuso").addEventListener("click", function () {


        if (calculo.quantidadeParafusos == 0 || calculo.quantidadeParafusos == undefined) {
            makeAlert("Informe uma quantidade de parafusos antes de prosseguir.");
            return;
        }

        if (calculo.cargaExternaTotal == 0 || calculo.cargaExternaTotal == undefined) {
            makeAlert("Informe uma quantidade de carga externa antes de prosseguir.");
            return;
        }


        __showHide("telaEscolherEspecificacaoParafuso");
        __showHide("telaInformacaoAvaliacao");

        __trocaSubDisplay("Escolha a classe/resistência mínima de prova (Sp).");

        if (calculo.unidade == 'in') {
            __trocaSubDisplay("Escolha a norma/especificação. <br> Escolha a classe /resistência mínima de prova (Sp).")
        }

        if (calculo.unidade == 'in' && calculo.planoResistencia == 'tabelada') {
            __showHide("container-opt-tabelada-ingles");
            __set().setValorResistencia($("#select-valor-tabela-sae").val());
        } else if (calculo.unidade == 'm' && calculo.planoResistencia == 'tabelada') {
            __showHide("container-opt-tabelada-metrico");
            __set().setValorResistencia($("#select-valor-tabela-metrico").val());
        } else if (calculo.planoResistencia == 'calculada') {
            __trocaSubDisplay("Informe o valor da resistência mínima de escoamento (Sy)");
            __showHide("container-opt-calculada");
            if (calculo.unidade == 'in') {
                document.getElementById("input-resistencia-calculada").placeholder = "Informe o valor desejado em Kilo Psi (Kpsi)";
            } else {
                document.getElementById("input-resistencia-calculada").placeholder = "Informe o valor desejado em Mega Pascal (MPa)";
            }
        }


    });

    document.getElementById("input-resistencia-calculada").addEventListener("keyup", function () {
        __set().setValorResistencia($("#input-resistencia-calculada").val());
    });


    document.getElementById("btProsseguirTelaTipoConexao").addEventListener("click", function () {

        if (calculo.planoResistencia == 'calculada') {
            if (calculo.valorResistencia == 0 || calculo.valorResistencia == undefined) {
                makeAlert("Verifique o valor da resistência antes de prosseguir.");
                return;
            }
        }


        __trocaSubDisplay("Informe se a conexão utilizada é permanente ou não permanente.");

        __showHide("telaTipoConexao");
        __showHide("telaEscolherEspecificacaoParafuso");
        //---valor padrão para caso o usuário avance sem selecionar nada.;
        __set().setPlanoCalculoLigacao('permanente');

    });


    document.getElementById("btVerRCompleto").addEventListener("click", function () {
        __showHide("finalCompletoDataContainer");
        __showHide("finalResumidoContainer");
        __showHide("btVerRCompleto");
        __trocaSubDisplay("Resultados Finais Completos");
    });

    document.getElementById("btProsseguirCalculoFinal").addEventListener("click", function (event) {

        __trocaSubDisplay("Resultados Finais");
        __showHide("telaCalculoFinal");
        __showHide("telaTipoConexao");


        var resultL = calcTamanhoParafuso(calculo).toFixed(2);
        var resultRigidez = calcRigidez(calculo).toFixed(2);
        var resultNp = calcNp(calculo).toFixed(2);
        var resultNo = calcNo(calculo).toFixed(2);
        let objRigidez = calcRigidezMembros(calculo);
        //---------------------------------------------;
        let t1 = objRigidez.t1.toFixed(2)
        let t2 = objRigidez.t2.toFixed(2)
        let t3 = objRigidez.t3.toFixed(2)
        let t4 = objRigidez.t4.toFixed(2)
        let t5 = objRigidez.t5.toFixed(2)
        let tt = objRigidez.tt.toFixed(2)
        let x2 = objRigidez.x2.toFixed(2)
        let x3 = objRigidez.x3.toFixed(2)
        let x4 = objRigidez.x4.toFixed(2)
        let d1 = objRigidez.d1.toFixed(2)
        let d2 = objRigidez.d2.toFixed(2)
        let d3 = objRigidez.d3.toFixed(2)
        let d4 = objRigidez.d4.toFixed(2)
        let d5 = objRigidez.d5.toFixed(2)
        let k1 = objRigidez.k1.toFixed(2)
        let k2 = objRigidez.k2.toFixed(2)
        let k3 = objRigidez.k3.toFixed(2)
        let k4 = objRigidez.k4.toFixed(2)
        let k5 = objRigidez.k5.toFixed(2)
        let km = objRigidez.km.toFixed(2)
        var resultUnidade = calculo.unidade;
        var resultWparafuso = calculo.wParafuso;
        var resultHporca = calculo.porca.hPorca;
        var resultWporca = calculo.porca.wPorca;
        var resultposArruela = calculo.posArruela;
        var resultplanResist = calculo.planoResistencia;
        var resultplanLiga = calculo.planoLigacao;
        var resultCompRosque = calcComprimentoRosqueado(calculo).toFixed(2);
        var resultCompUtil_N_Rosqueado = calcCompPorUtil_N_Rosqueavel(calculo).toFixed(2);
        var resultParafusoMenosPorca = calcTamParafusoMenosPorca(calculo).toFixed(2);
        var resultCompUtilRosque = calcCompPorUtilRosqueavel(calculo).toFixed(2);
        var resultAreaDaPorção_N_Rosqueada = calcAreaPorUtilNaoRosqueada(calculo).toFixed(2);
        var resultFp = calcFp(calculo).toFixed(2);
        var resultFi = calcFi(calculo).toFixed(2);
        var resultFracaoCargaC = calcFracaoCargaC(calculo).toFixed(4);
        var resultPp = calcPp(calculo).toFixed(2);
        var resultSp = calcSp(calculo);



        if (t3 == '0.00') {
            t3 = ("-");
        } else {
            t3 = (t3 + "mm")
        }

        if (t4 == '0.00') {
            t4 = ("-");
        } else {
            t4 = (t4 + "mm")
        }

        if (t5 == '0.00') {
            t5 = ("-");
        } else {
            t5 = (t5 + "mm")
        }

        if (tt == '0.00') {
            tt = ("-");
        } else {
            tt = (tt + "mm")
        }

        if (x2 == '0.00') {
            x2 = ("-");
        } else {
            x2 = (x2 + "mm")
        }

        if (x3 == '0.00') {
            x3 = ("-");
        } else {
            x3 = (x3 + "mm")
        }

        if (x4 == '0.00') {
            x4 = ("-");
        } else {
            x4 = (x4 + "mm")
        }

        if (d3 == '0.00') {
            d3 = ("-");
        } else {
            d3 = (d3 + "mm")
        }

        if (d4 == '0.00') {
            d4 = ("-");
        } else {
            d4 = (d4 + "mm")
        }

        if (d5 == '0.00') {
            d5 = ("-");
        } else {
            d5 = (d5 + "mm")
        }

        if (k3 == '0.00') {
            k3 = ("-");
        } else {
            k3 = (k3 + "MN/m")
        }

        if (k4 == '0.00') {
            k4 = ("-");
        } else {
            k4 = (k4 + "MN/m")
        }

        if (k5 == '0.00') {
            k5 = ("-");
        } else {
            k5 = (k5 + "MN/m")
        }

        if (calculo.unidade == 'in') {
            var resultUnidade = ("Inglês");
            var resultEdeKb = ("30Mpsi (Aço)");
        } else {
            var resultUnidade = ("Métrico");
            var resultEdeKb = ("207GPa (Aço)");
        }

        if (calculo.posArruela == 'cabeca') {
            var resultposArruela = ("Abaixo da cabeça do parafuso");
            console.log("Posição abaixo da cabeça: " + resultposArruela);
        }
        if (calculo.posArruela == 'porca') {
            var resultposArruela = ("Acima da porca");
            console.log("Acima da poca: " + resultposArruela);
        }
        if (calculo.posArruela == 'ambos') {
            var resultposArruela = ("Abaixo da cabeça do parafuso/Acima da porca");
            console.log("Acima da porca: " + resultposArruela);
        }
        if (calculo.posArruela == 'nenhuma') {
            var resultposArruela = ("-");
            console.log("Nenhuma: " + resultposArruela);
        }

        if (calculo.planoResistencia == "tabelada") {
            var resultplanResist = ("Cálculo");
        } else {
            var resultplanResist = ("Tabela");
        }

        if (calculo.planoLigacao == "permanente") {
            var resultplanLiga = ("Permanente");
        } else {
            var resultplanLiga = ("Não permanente");
        }

        if (calculo.unidade == 'm') {
            

            $("#finalResumidoContainer").append("<strong>Comprimento mínimo do parafuso: </strong>" + resultL + "mm");
            $("#finalResumidoContainer").append("<br><strong>Rigidez do parafuso: </strong>" + resultRigidez + "MN/m");
            $("#finalResumidoContainer").append("<br><strong>Rigidez dos Membros: </strong>" + km + "MN/m");
            $("#finalResumidoContainer").append("<br><strong>Fator de segurança ao escoamento: </strong>" + resultNp);
            $("#finalResumidoContainer").append("<br><strong>Fator de segurança baseado na abertura da junta: </strong>" + resultNo);


            $("#finalCompletoDataContainer").append("<h4>Dados de entrada</h4>");
            $("#finalCompletoDataContainer").append("<strong>Sistema de unidades: </strong>" + resultUnidade);
            $("#finalCompletoDataContainer").append("<br><strong>Diâmetro do parafuso (d): </strong>" + calculo.diametro + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Diâmetro do furo (df): </strong>" + calculo.furo + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Área de tensão de tração do parafuso (At): </strong>" + calculo.AreaRosqueada + "mm²<br>");
            $("#finalCompletoDataContainer").append("<strong>W do parafuso: </strong>" + resultWparafuso + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>W da porca: </strong>" + resultWporca + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>H da porca: </strong>" + resultHporca + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Quantidade de placas: </strong>" + calculo.qtdPlacas + "<br>");
            for (let i = 0; i < parseInt(calculo.qtdPlacas); i++) {
                $("#finalCompletoDataContainer").append("<strong>PLACA </strong>" + (i + 1) + " <strong>TIPO:</strong> " + calculo.placa[i].tipo + " <strong>ESPESSURA: </strong>" + calculo.placa[i].espessura);
            }
            $("#finalCompletoDataContainer").append("<br><strong>Posição da(s) arruela(s): </strong>" + resultposArruela);
            $("#finalCompletoDataContainer").append("<br><strong>Quantida de arruela: </strong>" + calculo.qtdArruelas);
            $("#finalCompletoDataContainer").append("<br><strong>Espessura total da(s) arruela(s): </strong>" + calculo.tipoArruela + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Quantidade de parafuso: </strong>" + calculo.quantidadeParafusos);
            $("#finalCompletoDataContainer").append("<br><strong>Carga externa total de tração aplicada à junta (Ptotal): </strong>" + calculo.cargaExternaTotal + "N<br>");
            $("#finalCompletoDataContainer").append("<strong>Forma de obter o valor da resistência de prova: </strong>" + resultplanResist);
            $("#finalCompletoDataContainer").append("<br><strong>Resistência mínima de prova (Sp): </strong>" + resultSp + "MPa<br>");
            $("#finalCompletoDataContainer").append("<strong>Tipo de conexão utilizada: </strong>" + resultplanLiga);

            //dados de saída
            $("#finalCompletoDataContainer").append("<h4>Dados de saída</h4>");
            $("#finalCompletoDataContainer").append("<strong>Comprimento mínimo do parafuso (L): </strong>" + resultL + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Comprimento rosqueado total do parafuso (Lt): </strong>" + resultCompRosque + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Comprimento de porção útil não rosqueada (ld): </strong>" + resultCompUtil_N_Rosqueado + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Espessura do material entre a face do parafuso e a face da porca (l): </strong>" + resultParafusoMenosPorca + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Comprimento de porção rosqueada (lt): </strong>" + resultCompUtilRosque + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>Área da porção não rosqueada (Ad): </strong>" + resultAreaDaPorção_N_Rosqueada + "mm²<br>");
            $("#finalCompletoDataContainer").append("<strong>Modulo de elásticidade utilizado para o cálculo da rigidez parafuso (E): </strong>" + resultEdeKb);
            $("#finalCompletoDataContainer").append("<strong><br>Rigidez do parafuso (Kb): </strong>" + resultRigidez + "MN/m<br>");

            //Incluir os valores dos k(s), t(s), x(s) localizada na função de rigidez dos membros
            $("#finalCompletoDataContainer").append("<br><strong>t1: </strong>" + t1 + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>t2: </strong>" + t2 + "mm<br>");
            $("#finalCompletoDataContainer").append("<strong>t3: </strong>" + t3);
            $("#finalCompletoDataContainer").append("<br><strong>t4: </strong>" + t4);
            $("#finalCompletoDataContainer").append("<br><strong>t5: </strong>" + t5);
            $("#finalCompletoDataContainer").append("<br><strong>tt: </strong>" + tt);
            $("#finalCompletoDataContainer").append("<br><strong>x2: </strong>" + x2);
            $("#finalCompletoDataContainer").append("<br><strong>x3: </strong>" + x3);
            $("#finalCompletoDataContainer").append("<br><strong>x4: </strong>" + x4);
            $("#finalCompletoDataContainer").append("<br><strong>D1: </strong>" + d1 + "mm");
            $("#finalCompletoDataContainer").append("<br><strong>D2: </strong>" + d2 + "mm");
            $("#finalCompletoDataContainer").append("<br><strong>D3: </strong>" + d3);
            $("#finalCompletoDataContainer").append("<br><strong>D4: </strong>" + d4);
            $("#finalCompletoDataContainer").append("<br><strong>D5: </strong>" + d5);
            $("#finalCompletoDataContainer").append("<br><strong>k1: </strong>" + k1 + "MN/m");
            $("#finalCompletoDataContainer").append("<br><strong>k2: </strong>" + k2 + "MN/m");
            $("#finalCompletoDataContainer").append("<br><strong>k3: </strong>" + k3);
            $("#finalCompletoDataContainer").append("<br><strong>k4: </strong>" + k4);
            $("#finalCompletoDataContainer").append("<br><strong>k5: </strong>" + k5);
            $("#finalCompletoDataContainer").append("<br><strong>Rigidez dos Membros (Km): </strong>" + km + "MN/m");
            $("#finalCompletoDataContainer").append("<br><br><strong>Carga de prova (Fp): </strong>" + resultFp + "N");
            $("#finalCompletoDataContainer").append("<br><strong>Pré-carga (Fi): </strong>" + resultFi + "N");
            $("#finalCompletoDataContainer").append("<br><strong>Fração da carga externa P carregada pelo parafuso (C): </strong>" + resultFracaoCargaC);
            $("#finalCompletoDataContainer").append("<br><strong>Carga externa de tração por parafuso (Pparcial): </strong>" + resultPp + "N");
            $("#finalCompletoDataContainer").append("<br><strong>Fator de segurança ao escoamento (Np): </strong>" + resultNp);
            $("#finalCompletoDataContainer").append("<br><strong>Fator de segurança baseado na abertura da junta (No): </strong>" + resultNo);
        }


        if (calculo.unidade == 'in') {



            $("#finalResumidoContainer").append("<strong>Comprimento mínimo do parafuso: </strong>" + resultL + "in");
            $("#finalResumidoContainer").append("<br><strong>Rigidez do parafuso: </strong>" + resultRigidez + "Mlbf/in");
            $("#finalResumidoContainer").append("<br><strong>Rigidez dos Membros: " + km + "Mlbf/in");
            $("#finalResumidoContainer").append("<br><strong>Fator de segurança ao escoamento: </strong>" + resultNp);
            $("#finalResumidoContainer").append("<br><strong>Fator de segurança baseado na abertura da junta: " + resultNo);


            $("#finalCompletoDataContainer").append("<h4>Dados de entrada</h4>");
            $("#finalCompletoDataContainer").append("<br><strong>Sistema de unidades: " + resultUnidade + "</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Diâmetro do parafuso (d): " + calculo.diametro + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Diâmetro do furo (df): " + calculo.furo + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Área de tensão de tração do parafuso (At): " + calculo.AreaRosqueada + "in²</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>W do parafuso: " + resultWparafuso + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>W da porca: " + resultWporca + "in </strong>");
            $("#finalCompletoDataContainer").append("<br><strong>H da porca: " + resultHporca + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Quantidade de placas: " + calculo.qtdPlacas + "</strong>");
            for (let i = 0; i < parseInt(calculo.qtdPlacas); i++) {
                $("#finalCompletoDataContainer").append("<br><strong>PLACA </strong>" + (i + 1) + " <strong>TIPO:</strong> " + calculo.placa[i].tipo + " <strong>ESPESSURA: </strong>" + calculo.placa[i].espessura);
            }
            $("#finalCompletoDataContainer").append("<br><strong>Posição da(s) arruela(s): " + resultposArruela + "</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Quantida de arruela: " + calculo.qtdArruelas + "</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Espessura total da(s) arruela(s): " + calculo.tipoArruela + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Quantidade de parafuso: " + calculo.quantidadeParafusos + "</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Carga externa total de tração aplicada à junta (Ptotal): " + calculo.cargaExternaTotal + "Kips</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Forma de obter o valor da resistência de prova: " + resultplanResist + "</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Resistência mínima de prova (Sp): " + resultSp + "Kpsi</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Tipo de conexão utilizada: " + resultplanLiga + "</strong>");

            //dados de saída
            $("#finalCompletoDataContainer").append("<h4>Dados de saída</h4>");
            $("#finalCompletoDataContainer").append("<br><strong>Comprimento mínimo do parafuso (L): " + resultL + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Comprimento rosqueado total do parafuso (Lt): " + resultCompRosque + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Comprimento de porção útil não rosqueada (ld): " + resultCompUtil_N_Rosqueado + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Espessura do material entre a face do parafuso e a face da porca (l): " + resultParafusoMenosPorca + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Comprimento de porção rosqueada (lt): " + resultCompUtilRosque + "in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Área da porção não rosqueada (Ad): " + resultAreaDaPorção_N_Rosqueada + "in²</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Modulo de elásticidade utilizado para o cálculo da rigidez parafuso (E): " + resultEdeKb + "</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Rigidez do parafuso (Kb): " + resultRigidez + "Mlbf/in</strong>");

            //Incluir os valores dos k(s), t(s), x(s) localizada na função de rigidez dos membros
            $("#finalCompletoDataContainer").append("<br><strong>Rigidez dos Membros (Km): " + km + "Mlbf/in</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Carga de prova (Fp): " + resultFp + "Kip</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Pré-carga (Fi): " + resultFi + "Kip</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Fração da carga externa P carregada pelo parafuso (C): " + resultFracaoCargaC + "</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Carga externa de tração por parafuso (Pparcial): " + resultPp + "Kip</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Fator de segurança ao escoamento (Np): " + resultNp + "</strong>");
            $("#finalCompletoDataContainer").append("<br><strong>Fator de segurança baseado na abertura da junta (No): " + resultNo + "</strong>");
        }


    });





});



function __showHide(elemento) {
    var el = document.getElementById(elemento);
    if (el.classList.contains("uk-hidden")) {
        el.classList.remove("uk-hidden");
    } else {
        el.classList.add("uk-hidden");
    }
}

function __trocaDisplay(texto) {
    document.getElementById("displayInfoTitle").innerText = texto;
}

function __trocaSubDisplay(texto) {
    document.getElementById("displayInfoSubTitle").innerText = texto;
}

function makeAlert(texto) {

    UIkit.notification({
        message: texto,
        status: 'danger',
        timeout: 5000,
        pos: 'top-center'
    });

}

function __set() {
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
            p -= 1;
            calculo.placa[p].tipo = parseFloat(tipo);
            console.log("PLACA: " + p + " tipo: " + calculo.placa[p].tipo);
        },
        setEspessuraPlaca: (p, espessura) => {
            p -= 1;
            console.log("Recebendo a espessura: " + espessura);
            calculo.placa[p].espessura = parseFloat(espessura);
            console.log("PLACA: " + p + " espessura: " + calculo.placa[p].espessura);
        },
        setPorca: (estilo) => {
            calculo.porca = estilo;
            console.log("Estilo recebido: W:" + calculo.porca.wPorca + " H:" + calculo.porca.hPorca);
        },
        setQtdArroela: (qtdArruela, posArruela) => {
            calculo.qtdArruelas = qtdArruela;
            calculo.posArruela = posArruela;
            console.log("QUANTIDADE Arruela: " + calculo.qtdArruelas + " posição: " + calculo.posArruela);
        },
        setTipoArruela: (valor) => {
            calculo.tipoArruela = valor;

            //--->Verificar com o Luccas;

            if (calculo.posArruela == 'ambos') {
                console.log("Duas arruelas serão utilizadas, portanto o valor será multiplicado.");
                calculo.tipoArruela += calculo.tipoArruela;
            }

            if(calculo.posArruela == 'nenhuma'){
                calculo.tipoArruela = 0;
            }

            console.log("Tipo da arruela:" + calculo.tipoArruela);
        },
        setQuantidadeParafuso: (quantidade) => {
            calculo.quantidadeParafusos = quantidade;
            console.log("Quantidade de parafusos informada: " + calculo.quantidadeParafusos);
        },
        setCargaExterna: (carga) => {
            calculo.cargaExternaTotal = carga;
            console.log("Carga externa total informada: " + calculo.cargaExternaTotal);
        },
        setPlanoCalculoResistencia: (plano) => {
            calculo.planoResistencia = plano;
            console.log("O selecinou: " + calculo.planoResistencia + " como plano para calcular a resistencia");
        },
        setPlanoCalculoLigacao: (plano) => {
            calculo.planoLigacao = plano;
            console.log("O selecinou: " + calculo.planoLigacao);
        },
        setValorResistencia: (resistencia) => {
            calculo.valorResistencia = resistencia;
            console.log("valor da resistencia selecionada: " + calculo.valorResistencia);
        }
    }
}



