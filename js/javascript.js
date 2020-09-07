let radiologia = [{
    hora:"11:00", 
    especialista:"IGNACIO SCHULZ", 
    paciente:"FRANCISCA ROJAS", 
    RUT:"9878782-1", 
    prevision:"FONASA"},

    {
    hora:"11:30", 
    especialista:"FEDERICO SUBERCASEAUX", 
    paciente:"PAMELA ESTRADA", 
    rUT:"15345241-3", 
    prevision:"Isapre"    
    },

    {
    hora:"15:00", 
    especialista:"FERNANDO WURTHZ", 
    paciente:"ARMANDO LUNA", 
    RUT:"16445345-9", 
    prevision:"Isapre"    
    },

    {
    hora:"15:30", 
    especialista:"ANA MARIA GODOY", 
    paciente:"MANUEL GODOY", 
    RUT:"17666419-0", 
    prevision:"Fonasa"    
    },

    {
    hora:"16:00", 
    especialista:"PATRICIA SUAZO", 
    paciente:"RAMON ULLOA", 
    RUT:"14989389-K", 
    prevision:"FONASA"    
    }
];
    
document.write('<b>Cantidad de atenciones para Radiología: </b>' + (radiologia.length))
document.write('<p>Primera atención: ', radiologia[0].paciente + ' - ', radiologia[0].prevision + ' | ' + 'Última atención: ', radiologia[4].paciente + ' - ', radiologia[4].prevision);
console.log(radiologia.length)
console.log(radiologia[0])
console.log(radiologia[4])

radiologia.push({hora:"09:00", especialista: "René Poblete", paciente: "ANA GELLONA", RUT: "13123329-7", prevision: "ISAPRE"},
{hora: "09:30", especialista: "María Solar", paciente: "RAMIRO ANDRADE", RUT: "12221451-K", prevision: "Fonasa"},
{hora: "10:00", especialista: "Raúl Loyola", paciente: "CARMEN ISLA", RUT: "10112348-3", prevision: "Isapre"},
{hora: "10:30", especialista: "Antonio Larenas", paciente: "PABLO LOAYZA", RUT: "13453234-1", prevision: "Isapre"},
{hora: "12:00", especialista: "Matías Aravena", paciente: "SUSANA POBLETE", RUT: "14345656-6", prevision: "Isapre"});
radiologia.shift();
radiologia.pop();
console.log(radiologia)

let traumatologia = [{
    hora: "08:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    RUT: "15554774-5",
    prevision: "FONASA"
    },
    {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    prevision: "ISAPRE"
    },
    {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    RUT: "17879423-9",
    prevision: "ISAPRE"
    },
    {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    RUT: "1547423-6",
    prevision: "ISAPRE"
    },
    {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    RUT: "16554741-K",
    prevision: "FONASA"
    },
    {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    RUT: "9747535-8",
    prevision: "ISAPRE"
    },
    {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    RUT: "11254785-5",
    prevision: "ISAPRE"
    }
];
document.write('<p><b>Cantidad de atenciones para Traumatología: </b>' + (traumatologia.length));
document.write('<p>Primera atención: ', traumatologia[0].paciente + ' - ', traumatologia[0].prevision + ' | ' + 'Última atención: ', traumatologia[6].paciente + ' - ', traumatologia[6].prevision);
console.log(traumatologia.length);
console.log(traumatologia[0]);
console.log(traumatologia[6]);

let dental = [{
    hora: "08:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    RUT: "11123425-6",
    prevision: "ISAPRE"
    },
    {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    RUT: "9878789-2",
    prevision: "ISAPRE"
    },
    {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    RUT: "7998789-5",
    prevision: "FONASA"
    },
    {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    RUT: "18887662-K",
    prevision: "FONASA"
    },
    {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    RUT: "17665461-4",
    prevision: "FONASA"
    },
    {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    RUT: "14441281-0",
    prevision: "ISAPRE"
    }
];
document.write('<p><b>Cantidad de atenciones para Dental: </b>' + (dental.length));
document.write('<p>Primera atención: ', dental[0].paciente + ' - ', dental[0].prevision + ' | ' + 'Última atención: ', dental[5].paciente + ' - ', dental[5].prevision);
console.log(dental.length);
console.log(dental[0]);
console.log(dental[5]);

for (let i = 0; i < dental.length; i++) {
    document.write(`<p>${dental[i].hora} - ${dental[i].especialista} - ${dental[i].paciente} - ${dental[i].RUT} - ${dental[i].prevision} <br>`);
}
document.write('<p><b>Listado de todos los pacientes<p></b>')
for (let i = 0; i < radiologia.length; i++) {
    document.write(`${radiologia[i].paciente}<br>`);
  }
  for (let i = 0; i < traumatologia.length; i++) {
    document.write(`${traumatologia[i].paciente} <br>`);
  }
  for (let i = 0; i < dental.length; i++) {
    document.write(`${dental[i].paciente}<br>`);
  }
  
document.write('<p><b>Consultas dentales por previsión<p></b>')
let fonasa = 'FONASA';
let isapre = 'ISAPRE'
  for (let i = 0; i < dental.length; i++) {
    if(dental[i].prevision == fonasa){
      document.write(`${dental[i].paciente} - ${isapre} <br>`);
    }
    else{
      document.write(`${dental[i].paciente} - ${fonasa} <br>`);
    }
  }

