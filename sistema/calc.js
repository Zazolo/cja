 //---> cálculo do primeiro campo;
 let placa = {
    descricao:'',
    espessura:0.0,
}


let parafuso = { 
    m:[
        {
         At:'',
         wParafuso:'',
         wPorca:['','',''],
         arruela:['','',''],
         DF:''   
        }
    ],
    in: [
        {
            At: '',
            wParafuso:'',
            wPorca:'',
            arruela:'',
            DF:''
        }
    ]
}

let arruela;
let porca;


let tdp_in = [{
        diametro: '0.2500',
        At: '0.0318',
        wParafuso: '0.4375',
        wPorca: '0.4375',
        hPorca: '0.2188',
        arruela: [
            '0.065',
            '0.065'
        ],
        furo: '0.2813'
    },

    {
        diametro: '0.3125',
        At: '0.0524',
        wParafuso: '0.5',
        wPorca: '0.5',
        hPorca: '0.2656',
        arruela: [
            '0.065',
            '0.083'
        ],
        furo: '0.3438'
    },

    {
        diametro: '0.3750',
        At: '0.0775',
        wParafuso: '0.5625',
        wPorca: '0.5625',
        hPorca: '0.3281',
        arruela: [
            '0.065',
            '0.083'
        ],
        furo: '0.4063'
    },

    {
        diametro: '0.4375',
        At: '0.1063',
        wParafuso: '0.625',
        wPorca: '0.6875',
        hPorca: '0.375',
        arruela: [
            '0.065',
            '0.083'
        ],
        furo: '0.4688'
    },

    {
        diametro: '0.5000',
        At: '0.1419',
        wParafuso: '0.75',
        wPorca: '0.75',
        hPorca: '0.4375',
        arruela: [
            '0.095',
            '0.109'
        ],
        furo: '0.5625'
    },

    {
        diametro: '0.6250',
        At: '0.226',
        wParafuso: '0.9375',
        wPorca: '0.9375',
        hPorca: '0.5469',
        arruela: [
            '0.095',
            '0.134'
        ],
        furo: '0.6875'
    },

    {
        diametro: '0.7500',
        At: '0.384',
        wParafuso: '1.125',
        wPorca: '1.125',
        hPorca: '0.6406',
        arruela: [
            '0.134',
            '0.148'
        ],
        furo: '0.8125'
    },

    {
        diametro: '0.8750',
        At: '0.462',
        wParafuso: '1.3125',
        wPorca: '1.3125',
        hPorca: '0.75',
        arruela: [
            '0.134',
            '0.165'
        ],
        furo: '0.9375'
    },

    {
        diametro: '1.0000',
        At: '0.606',
        wParafuso: '1.5',
        wPorca: '1.5',
        hPorca: '0.8594',
        arruela: [
            '0.134',
            '0.165'
        ],
        furo: '1.09375'
    },

    {
        diametro: '1.1250',
        At: '0.763',
        wParafuso: '1.6875',
        wPorca: '1.6875',
        hPorca: '0.9688',
        arruela: [
            '0.134',
            '0.165'
        ],
        furo: '1.2188'
    },

    {
        diametro: '1.2500',
        At: '0.969',
        wParafuso: '0.875',
        wPorca: '0.875',
        hPorca: '1.0625',
        arruela: [
            '0.165',
            '0.165'
        ],
        furo: '0.3438'
    },

    {
        diametro: '1.3750',
        At: '1.155',
        wParafuso: '2.0625',
        wPorca: '2.0625',
        hPorca: '1.1719',
        arruela: [
            '0.165',
            '0.180'
        ],
        furo: '1.5'
    },

    {
        diametro: '1.5000',
        At: '1.405',
        wParafuso: '2.25',
        wPorca: '2.25',
        hPorca: '1.2813',
        arruela: [
            '0.165',
            '0.180'
        ],
        furo: '1.625'
    }
];

let tdp_m = [{
        diametro: '5',
        At: '14.2',
        wParafuso: '8',
        estilo: [{
                wPorca: '8',
                hPorca: '4.7'

            },
            {
                wPorca: '8',
                hPorca: '5.1'
            },
            null
        ],
        arruela: [
            '1.4',
            '1.75',
            '2.3'
        ],
        furo: '5.5'
    },

    {
        diametro: '6',
        At: '20.1',
        wParafuso: '10',
        estilo: [{
                wPorca: '10',
                hPorca: '5.2'

            },
            {
                wPorca: '10',
                hPorca: '5.7'
            },
            null
        ],
        arruela: [
            '1.75',
            '1.75',
            '2.3'
        ],
        furo: '6.6'
    },

    {
        diametro: '8',
        At: '36.6',
        wParafuso: '13',
        estilo: [{
                wPorca: '13',
                hPorca: '6.8'

            },
            {
                wPorca: '13',
                hPorca: '7.5'
            },
            null
        ],
        arruela: [
            '2.3',
            '2.3',
            '2.8'
        ],
        furo: '9'
    },

    {
        diametro: '10',
        At: '58',
        wParafuso: '16',
        estilo: [{
                wPorca: '16',
                hPorca: '8.4'

            },
            {
                wPorca: '16',
                hPorca: '9.3'
            },
            null
        ],
        arruela: [
            '2.3',
            '2.8',
            '3.5'
        ],
        furo: '11'
    },

    {
        diametro: '12',
        At: '84.3',
        wParafuso: '18',
        estilo: [{
                wPorca: '18',
                hPorca: '10.8'

            },
            {
                wPorca: '18',
                hPorca: '12'
            },
            {
                wPorca: '21',
                hPorca: '12.3'

            }

        ],
        arruela: [
            '2.8',
            '3.5',
            '3.5'
        ],
        furo: '13.5'
    },

    {
        diametro: '14',
        At: '115',
        wParafuso: '21',
        estilo: [{
                wPorca: '21',
                hPorca: '12.8'

            },
            {
                wPorca: '21',
                hPorca: '14.1'
            },
            {
                wPorca: '24',
                hPorca: '14.3'

            }

        ],
        arruela: [
            '2.8',
            '3.5',
            '4'
        ],
        furo: '15.5'
    },

    {
        diametro: '16',
        At: '157',
        wParafuso: '24',
        estilo: [{
                wPorca: '24',
                hPorca: '14.8'

            },
            {
                wPorca: '24',
                hPorca: '16.4'
            },
            {
                wPorca: '27',
                hPorca: '17.1'

            }

        ],
        arruela: [
            '3.5',
            '4',
            '4.6'
        ],
        furo: '17.5'
    },

    {
        diametro: '20',
        At: '245',
        wParafuso: '30',
        estilo: [{
                wPorca: '30',
                hPorca: '18'

            },
            {
                wPorca: '30',
                hPorca: '20.3'
            },
            {
                wPorca: '34',
                hPorca: '20.7'

            }

        ],
        arruela: [
            '4',
            '4.6',
            '5.1'
        ],
        furo: '22'
    },

    {
        diametro: '24',
        At: '353',
        wParafuso: '36',
        estilo: [{
                wPorca: '36',
                hPorca: '21.5'

            },
            {
                wPorca: '36',
                hPorca: '23.9'
            },
            {
                wPorca: '41',
                hPorca: '24.2'

            }

        ],
        arruela: [
            '4.6',
            '5.1',
            '5.6'
        ],
        furo: '26'
    },

    {
        diametro: '30',
        At: '561',
        wParafuso: '46',
        estilo: [{
                wPorca: '46',
                hPorca: '25.6'

            },
            {
                wPorca: '46',
                hPorca: '28.6'
            },
            {
                wPorca: '50',
                hPorca: '30.'

            }

        ],
        arruela: [
            '5.1',
            '5.6',
            '6.4'
        ],
        furo: '33'
    },

    {
        diametro: '36',
        At: '817',
        wParafuso: '55',
        estilo: [{
                wPorca: '55',
                hPorca: '31'

            },
            {
                wPorca: '55',
                hPorca: '34.7'
            },
            {
                wPorca: '60',
                hPorca: '36.6'

            }

        ],
        arruela: [
            '5.6',
            '6.4',
            '8.5'
        ],
        furo: '39'
    },

    {
        diametro: '42',
        At: '1120',
        wParafuso: '65',
        estilo: [
            null,
            null,
            {
                wPorca: '70',
                hPorca: '42'

            }

        ],
        arruela: [
            null
        ],
        furo: '45'
    },

    {
        diametro: '48',
        At: '1470',
        wParafuso: '75',
        estilo: [
            null,
            null,
            {
                wPorca: '80',
                hPorca: '48'

            }

        ],
        arruela: [
            null
        ],
        furo: '52'
    },

    {
        diametro: '56',
        At: '2030',
        wParafuso: '85',
        estilo: [
            null,
            null,
            {
                wPorca: '90',
                hPorca: '56'

            }

        ],
        arruela: [
            null
        ],
        furo: '62'
    },

    {
        diametro: '64',
        At: '2680',
        wParafuso: '95',
        estilo: [
            null,
            null,
            {
                wPorca: '100',
                hPorca: '64'

            }

        ],
        arruela: [
            null
        ],
        furo: '70'
    },

    {
        diametro: '72',
        At: '3460',
        wParafuso: '105',
        estilo: [
            null,
            null,
            {
                wPorca: '110',
                hPorca: '72'

            }

        ],
        arruela: [
            null
        ],
        furo: '78'
    },

    {
        diametro: '80',
        At: '4340',
        wParafuso: '115',
        estilo: [
            null,
            null,
            {
                wPorca: '120',
                hPorca: '80'

            }

        ],
        arruela: [
            null
        ],
        furo: '86'
    },

    {
        diametro: '90',
        At: '5590',
        wParafuso: '130',
        estilo: [
            null,
            null,
            {
                wPorca: '135',
                hPorca: '90'

            }

        ],
        arruela: [
            null
        ],
        furo: '96'
    },

    {
        diametro: '100',
        At: '6990',
        wParafuso: '145',
        estilo: [
            null,
            null,
            {
                wPorca: '150',
                hPorca: '100'

            }

        ],
        arruela: [
            null
        ],
        furo: '107'
    }
];

let calculo = {
    unidade: '',
    diametro:'',
    AreaRosqueada: '',
    qtdPlacas:1,
    qtdArruelas:1,
    posArruela:'cabeca',
    tipoArruela:'0', //--->Valor total de Arruela;
    placa:[{tipo:'0', espessura:'0'}, {tipo:'0', espessura:'0'}],
    porca: {wPorca: '0', hPorca: '0'}
}

function calcTamanhoParafuso(calculo){ ///-----------------------------------------------------Retorna L;
    let totalPlaca = 0;
    let totalArruela = 0;
    let L;
    for(let i=0; i < calculo.placa.length; i++){
        totalPlaca += parseInt(calculo.placa[i].espessura);
    }

    totalArruela = parseFloat(calculo.tipoArruela);
    console.log("TOTAL_ARRUELA: " + totalArruela);
    console.log("TOTAL_PLACA: " + totalPlaca);
    console.log("TOTAL_hPorca: " + calculo.porca.hPorca);
    L = totalPlaca + totalArruela + parseFloat(calculo.porca.hPorca);

    return L;
}

function calcComprimentoRosqueado(calculo){
    let Lt = 0;
    let L = parseFloat(calcTamanhoParafuso(calculo));
    console.log("O sistema está calculando o Comprimento Rosqueado...");
    switch(calculo.unidade){
        case 'm':
            console.log("Unidade métrica para calculo do comprimento Rosqueado...\nVALOR DE L: " + L);
            if(L <= 125){
                console.log("L menor que 125");
                Lt = (2*parseFloat(calculo.diametro)) + 6;
            } else {
                if((L > 125)&&(L <= 200)){
                    Lt = (2*parseFloat(calculo.diametro)) + 12;
                } else {
                    if(L > 200){
                        Lt = (2*parseFloat(calculo.diametro)) + 25;
                    }
                }
            }
        break;
        case 'in':
            console.log("Polegada para calculo do comprimento Rosqueado...\n VALOR DE L: " + L);
            if(L<=6){
                Lt = 2*parseFloat(calculo.diametro) + 0.25;
            } else {
                if(L>6){
                    Lt = 2*parseFloat(calculo.diametro) + 0.50;
                }
            }
        break;

    }
    console.log("Comprimento rosqueado: " + Lt);
    return Lt;
}

function calcCompPorUtil_N_Rosqueavel(calculo){
    console.log("Calculando o comprimento da porção útil NÃO rosqueável...");
    let L = calcTamanhoParafuso(calculo);
    let Lt = calcComprimentoRosqueado(calculo);
    Ld = L - Lt;
    console.log("Comprimento útil não rosqueável: " + Ld);
    return Ld;
}

function calcTamParafusoMenosPorca(calculo){
    console.log("Calculando a Diferença entre Parafuso-Porca...");
    let L = calcTamanhoParafuso(calculo);
    //console.log("L: " + L);
    let hP = parseFloat(calculo.porca.hPorca);
    //console.log("hP: " + hP);

    let r = L - hP;

    console.log("Parafuso menos porca: " + r);
    return r;
}

function calcCompPorUtilRosqueavel(calculo){//-------;;;;
    console.log("Calculando o comprimento da porção útil rosqueável...");
    let PmP = calcTamParafusoMenosPorca(calculo);
    //console.log("PmP: " + PmP);
    let PUNR = calcCompPorUtil_N_Rosqueavel(calculo); 
    //console.log("PUNR: " + PUNR);
    let r = PmP - PUNR; 
    return r;
}

function calcAreaPorUtilNaoRosqueada(calculo){
    const PI = Math.PI;
    console.log("Calculando a Area Util Não Rosqueada...");
    let Ad = (PI* Math.pow(calculo.diametro, 2)) / 4;
    return Ad;
}


function calcRigidez(calculo){
    console.log("Calculando a rigidez...");
    let At = parseFloat(calculo.AreaRosqueada);
    let E = 0;
    console.log("Area Rosqueada: " + At);
    switch(calculo.unidade){
        case 'm':
            E = 207;
        break;
        case 'in':
            E = 30;
        break;
    }
    
    let AreaRosqueavel = calcCompPorUtilRosqueavel(calculo);
    let AreaNaoRosqueada = calcAreaPorUtilNaoRosqueada(calculo);
    let AreaNaoRosqueavel = calcCompPorUtil_N_Rosqueavel(calculo);
    console.log("Area não rosqueada: " + AreaNaoRosqueada);
    console.log("Area rosqueável: " + AreaRosqueavel);
    console.log("Area não rosqueável: " + AreaNaoRosqueavel);
    console.log("E: " + E);
    let Kb = (calcAreaPorUtilNaoRosqueada(calculo) * At * E) / ((calcAreaPorUtilNaoRosqueada(calculo) * calcCompPorUtilRosqueavel(calculo)) + (At * calcCompPorUtil_N_Rosqueavel(calculo)));
    return Kb;
}

function calcRigidezMembros(calculo){
    let quantidade_arruelas = 0;
    let quantidade_placas = 0;
    let posicao_arruelas = 'nenhuma';

    //pegar os valores iniciais necessário para a conta;
    

}