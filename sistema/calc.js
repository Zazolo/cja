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
         arroela:['','',''],
         DF:''   
        }
    ],
    in: [
        {
            At: '',
            wParafuso:'',
            wPorca:'',
            arroela:'',
            DF:''
        }
    ]
}

let arroela;
let porca;


let tdp_in = [
    "0.0600" = {
        At = "0.0318",
        wParafuso = "0.4375",
        hPorca = "0.21875",
        arroela = [
            "0.065",
            "0.065"
        ],
        furo = "0.28125"         
    }
];

let tdp_m = [
    "5" = {
        estilo = [
            1 = {
                hPorca = "",
                wPorca = ""
            },
            1 = {
                hPorca = "",
                wPorca = ""
            },
            null
        ]
    },

    "42" = {
        estilo = [
            null,
            null,
            3 = {
                hPorca = "",
                wPorca = ""
            }
        ]
    }
];



let calculo = {
    unidade: '',
    diametro:'',
    AreaRosqueada: '',
    qtdPlacas:1,
    placa:[0, 1],
    arroela:[arroela],
    porca: porca
}

function calcTamanhoParafuso(calculo){
    let totalPlaca = 0;
    let totalArroela = 0;
    let L;
    for(let i; i < calculo.placa.length; i++){
        totalPlaca += calculo.placa[i].espessura;
    }

    for(let j; j < calculo.placa.length; j++){
        totalArroela += calculo.arroela[j].espessura;
    }

    switch(calculo.unidade){
        case 'm':
            L = totalPlaca + totalArroela + calculo.porca.m;
        break;
        case 'in':
            L = totalPlaca + totalArroela + calculo.porca.in;
        break;
    }
    
    return L;
}

function calcComprimentoRosqueado(calculo){
    let Lt = 0;
    let L = calcTamanhoParafuso(calculo);
    console.log("O sistema está calculando o Comprimento Rosqueado...");
    switch(calculo.unidade){
        case 'm':
            switch(L){
                case L<=125:
                    Lt = 2*calculo.diametro + 6;
                break;
                case 125>L<=200:
                    Lt = 2*calculo.diametro + 12;
                break;
                case L>200:
                    Lt = 2*calculo.diametro + 25;
                break;
            }
        break;
        case 'in':
            switch(L){
                case L<=6:
                    Lt = 2+calculo.diametro + (1/4);
                break;
                case L>6:
                    Lt = 2+calculo.diametro + (1/2);
                break;
            }
        break;

    }
    return Lt;
}

function calcCompPorUtil_N_Rosqueavel(calculo){
    return calcTamanhoParafuso(calculo) - calcComprimentoRosqueado(calculo);
}

function calcCompPorUtilRosqueavel(calculo){
    return calcTamParafusoMenosPorca(calculo) - calcCompPorUtil_N_Rosqueavel(calculo);
}

function calcTamParafusoMenosPorca(calculo){
    let l = 0;
    switch(calculo.unidade){
        case 'm':
            l= calcTamanhoParafuso(calculo) - calculo.porca.m;
        break;
        case 'in':
            l = calcTamanhoParafuso(calculo) - calculo.porca.in;
        break;
    }
    return l;    
}

function calcAreaPorUtilNaoRosqueada(calculo){
    const PI = Math.PI;
    return Ad = (PI* Math.pow(calculo.diametro, 2)) / 4;
}


function calcRigidez(calculo){
    let At = calculo.AreaRosqueada;
    let E;
    switch(calculo.unidade){
        case 'm':
            E = 207;
        break;
        case 'in':
            E = 30;
        break;
    }
    let Kb = (calcAreaPorUtilNaoRosqueada(calculo) * At * E) / ((calcAreaPorUtilNaoRosqueada(calculo) * calcCompPorUtilRosqueavel(calculo)) + (At + calcCompPorUtil_N_Rosqueavel(calculo)));
    return Kb;
}