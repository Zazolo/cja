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


let tdp_in = [
        {
            diametro : '0.25',
            At : '0.0318',
            wParafuso : '0.4375',
          wPorca : '0.4375',
            hPorca : '0.2188',
            arroela : [
                '0.065',
                '0.065'
            ],
            furo : '0.2813'         
        },
    
        {
            diametro : '0.3125',
            At : '0.0524',
            wParafuso : '0.5',
          wPorca : '0.5',
            hPorca : '0.2656',
            arroela : [
                '0.065',
                '0.083'
            ],
            furo : '0.3438'         
        },
    
        {
            diametro : '0.375',
            At : '0.0775',
            wParafuso : '0.5625',
          wPorca : '0.5625',
            hPorca : '0.3281',
            arroela : [
                '0.065',
                '0.083'
            ],
            furo : '0.4063'         
        },
    
        {
            diametro : '0.4375',
            At : '0.1063',
            wParafuso : '0.625',
          wPorca : '0.6875',
            hPorca : '0.375',
            arroela : [
                '0.065',
                '0.083'
            ],
            furo : '0.4688'         
        },
    
        {
            diametro : '0.5',
            At : '0.1419',
            wParafuso : '0.75',
          wPorca : '0.75',
            hPorca : '0.4375',
            arroela : [
                '0.095',
                '0.109'
            ],
            furo : '0.5625'         
        },
    
        {
            diametro : '0.625',
            At : '0.226',
            wParafuso : '0.9375',
          wPorca : '0.9375',
            hPorca : '0.5469',
            arroela : [
                '0.095',
                '0.134'
            ],
            furo : '0.6875'         
        },
    
        {
            diametro : '0.75',
            At : '0.384',
            wParafuso : '1.125',
            wPorca : '1.125',
            hPorca : '0.6406',
            arroela : [
                '0.134',
                '0.148'
            ],
            furo : '0.8125'         
        },
    
        {
            diametro : '0.875',
            At : '0.462',
            wParafuso : '1.3125',
          wPorca : '1.3125',
            hPorca : '0.75',
            arroela : [
                '0.134',
                '0.165'
            ],
            furo : '0.9375'         
        },
    
        {
            diametro : '1',
            At : '0.606',
            wParafuso : '1.5',
          wPorca : '1.5',
            hPorca : '0.8594',
            arroela : [
                '0.134',
                '0.165'
            ],
            furo : '1.09375'         
        },
    
        {
            diametro : '1.125',
            At : '0.763',
            wParafuso : '1.6875',
          wPorca : '1.6875',
            hPorca : '0.9688',
            arroela : [
                '0.134',
                '0.165'
            ],
            furo : '1.2188'         
        },
    
        {
            diametro : '1.25',
            At : '0.969',
            wParafuso : '0.875',
            wPorca : '0.875',
            hPorca : '1.0625',
            arroela : [
                '0.165',
                '0.165'
            ],
            furo : '0.3438'         
        },
    
        {
            diametro : '1.375',
            At : '1.155',
            wParafuso : '2.0625',
            wPorca : '2.0625',
            hPorca : '1.1719',
            arroela : [
                '0.165',
                '0.180'
            ],
            furo : '1.5'         
        },
    
        {
            diametro : '1.5',
            At : '1.405',
            wParafuso : '2.25',
            wPorca : '2.25',
            hPorca : '1.2813',
            arroela : [
                '0.165',
                '0.180'
            ],
            furo : '1.625'         
        }
    ];

    let tdp_m = [
            {
                diametro : '5',
              At : '14.2',
          wParafuso : '8',
                estilo : [
                    {
                    wPorca : '8',
                    hPorca : '4.7'
                        
                    },
                    {
                        wPorca : '8',
                        hPorca : '5.1'
                    },
                    null
                ],
                    arruela : [
                    '1.4',
                    '1.75',
                  '2.3'
                ],
                    furo : '5.5'         
            },
        
            {
                diametro : '6',
              At : '20.1',
          wParafuso : '10',
                estilo : [
                    {
                    wPorca : '10',
                        hPorca : '5.2'
                        
                    },
                    {
                        wPorca : '10',
                        hPorca : '5.7'
                    },
                    null
                ],
                    arruela : [
                    '1.75',
                    '1.75',
                  '2.3'
                ],
                    furo : '6.6'         
            },
        
            {
                diametro : '8',
              At : '36.6',
          wParafuso : '13',
                estilo : [
                    {
                    wPorca : '13',
                        hPorca : '6.8'
                        
                    },
                    {
                        wPorca : '13',
                        hPorca : '7.5'
                    },
                    null
                ],
                    arruela : [
                    '2.3',
                    '2.3',
                  '2.8'
                ],
                    furo : '9'         
            },
        
            {
                diametro : '10',
              At : '58',
          wParafuso : '16',
                estilo : [
                    {
                    wPorca : '16',
                        hPorca : '8.4'
                        
                    },
                    {
                        wPorca : '16',
                        hPorca : '9.3'
                    },
                    null
                ],
                    arruela : [
                    '2.3',
                    '2.8',
                  '3.5'
                ],
                    furo : '11'         
            },
        
            {
                diametro : '12',
              At : '84.3',
          wParafuso : '18',
                estilo : [
                    {
                    wPorca : '18',
                        hPorca : '10.8'
                        
                    },
                    {
                        wPorca : '18',
                        hPorca : '12'
                    },
                    {
                    wPorca : '21',
                        hPorca : '12.3'
                        
                    }
        
                ],
                    arruela : [
                    '2.8',
                    '3.5',
                  '3.5'
                ],
                    furo : '13.5'         
            },
        
            {
                diametro : '14',
              At : '115',
          wParafuso : '21',
                estilo : [
                    {
                    wPorca : '21',
                        hPorca : '12.8'
                        
                    },
                    {
                        wPorca : '21',
                        hPorca : '14.1'
                    },
                    {
                    wPorca : '24',
                        hPorca : '14.3'
                        
                    }
        
                ],
                    arruela : [
                    '2.8',
                    '3.5',
                  '4'
                ],
                    furo : '15.5'         
            },
             
            {
                diametro : '16',
              At : '157',
          wParafuso : '24',
                estilo : [
                    {
                    wPorca : '24',
                        hPorca : '14.8'
                        
                    },
                    {
                        wPorca : '24',
                        hPorca : '16.4'
                    },
                    {
                    wPorca : '27',
                        hPorca : '17.1'
                        
                    }
        
                ],
                    arruela : [
                    '3.5',
                    '4',
                  '4.6'
                ],
                    furo : '17.5'         
            },
        
            {
                diametro : '20',
              At : '245',
          wParafuso : '30',
                estilo : [
                    {
                    wPorca : '30',
                        hPorca : '18'
                        
                    },
                    {
                        wPorca : '30',
                        hPorca : '20.3'
                    },
                    {
                    wPorca : '34',
                        hPorca : '20.7'
                        
                    }
        
                ],
                    arruela : [
                    '4',
                    '4.6',
                  '5.1'
                ],
                    furo : '22'         
            },
        
            {
                diametro : '24',
              At : '353',
          wParafuso : '36',
                estilo : [
                    {
                    wPorca : '36',
                        hPorca : '21.5'
                        
                    },
                    {
                        wPorca : '36',
                        hPorca : '23.9'
                    },
                    {
                    wPorca : '41',
                        hPorca : '24.2'
                        
                    }
        
                ],
                    arruela : [
                    '4.6',
                    '5.1',
                  '5.6'
                ],
                    furo : '26'         
            },
        
            {
                diametro : '30',
              At : '561',
          wParafuso : '46',
                estilo : [
                    {
                    wPorca : '46',
                        hPorca : '25.6'
                        
                    },
                    {
                        wPorca : '46',
                        hPorca : '28.6'
                    },
                    {
                    wPorca : '50',
                        hPorca : '30.'
                        
                    }
        
                ],
                    arruela : [
                    '5.1',
                    '5.6',
                  '6.4'
                ],
                    furo : '33'         
            },
        
            {
                diametro : '36',
              At : '817',
          wParafuso : '55',
                estilo : [
                    {
                    wPorca : '55',
                        hPorca : '31'
                        
                    },
                    {
                        wPorca : '55',
                        hPorca : '34.7'
                    },
                    {
                    wPorca : '60',
                        hPorca : '36.6'
                        
                    }
        
                ],
                    arruela : [
                    '5.6',
                    '6.4',
                  '8.5'
                ],
                    furo : '39'         
            },
        
            {
                diametro : '42',
              At : '1120',
          wParafuso : '65',
                estilo : [
                null,
                null,
                    {
                    wPorca : '70',
                        hPorca : '42'
                        
                    }
                    
                ],
                    arruela : [
                    null   
                ],
                    furo : '45'         
            },
        
            {
                diametro : '48',
              At : '1470',
          wParafuso : '75',
                estilo : [
                null,
                null,
                    {
                    wPorca : '80',
                        hPorca : '48'
                        
                    }
                    
                ],
                    arruela : [
                    null   
                ],
                    furo : '52'         
            },
        
            {
                diametro : '56',
              At : '2030',
          wParafuso : '85',
                estilo : [
                null,
                null,
                    {
                    wPorca : '90',
                        hPorca : '56'
                        
                    }
                    
                ],
                    arruela : [
                    null   
                ],
                    furo : '62'         
            },
        
            {
                diametro : '64',
              At : '2680',
          wParafuso : '95',
                estilo : [
                null,
                null,
                    {
                    wPorca : '100',
                        hPorca : '64'
                        
                    }
                    
                ],
                    arruela : [
                    null   
                ],
                    furo : '70'         
            },
        
            {
                diametro : '72',
              At : '3460',
          wParafuso : '105',
                estilo : [
                null,
                null,
                    {
                    wPorca : '110',
                        hPorca : '72'
                        
                    }
                    
                ],
                    arruela : [
                    null   
                ],
                    furo : '78'         
            },
        
            {
                diametro : '80',
                At : '4340',
                wParafuso : '115',
                estilo : [
                null,
                null,
                    {
                    wPorca : '120',
                        hPorca : '80'
                        
                    }
                    
                ],
                    arruela : [
                    null   
                ],
                    furo : '86'         
            },
        
            {
                diametro : '90',
                At : '5590',
                wParafuso : '130',
                estilo : [
                null,
                null,
                    {
                    wPorca : '135',
                        hPorca : '90'
                        
                    }
                    
                ],
                    arruela : [
                    null   
                ],
                    furo : '96'         
            },
        
            {
                diametro : '100',
                At : '6990',
                wParafuso : '145',
                estilo : [
                null,
                null,
                    {
                    wPorca : '150',
                        hPorca : '100'
                        
                    }
                    
                ],
                    arruela : [
                    null   
                ],
                    furo : '107'         
            }
        ];

let calculo = {
    unidade: '',
    diametro:'',
    AreaRosqueada: '',
    qtdPlacas:1,
    qtdArruelas:1,
    posArruela:'cabeca',
    tipoArruela:'valor?',
    placa:[0, 1],
    arruela:[arruela],
    porca: porca
}

function calcTamanhoParafuso(calculo){
    let totalPlaca = 0;
    let totalArruela = 0;
    let L;
    for(let i; i < calculo.placa.length; i++){
        totalPlaca += calculo.placa[i].espessura;
    }

    for(let j; j < calculo.placa.length; j++){
        totalArruela += calculo.arruela[j].espessura;
    }

    switch(calculo.unidade){
        case 'm':
            L = totalPlaca + totalArruela + calculo.porca.m;
        break;
        case 'in':
            L = totalPlaca + totalArruela + calculo.porca.in;
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