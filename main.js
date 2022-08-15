//Base de datos de actividades del club
class act {
  constructor(categoria, actividad, profe, modo, precio) {
    this.categoria = categoria;
    this.actividad = actividad;
    this.profe = profe;
    this.modo = modo;
    this.precio = precio;
  }
}
let act1 = new act(
  "infantil",
  "Mini Handbol",
  "Juan Smith",
  "presencial",
  3000
);
let act2 = new act(
  "infantil",
  "Natación delfin",
  "Lorena Matos",
  "presencial",
  3500
);
let act3 = new act(
  "infantil",
  "Gimnasia artística",
  "Natalia Perez",
  "presencial",
  2000
);
let act4 = new act(
  "infantil",
  "Expresión Corporal",
  "Valeria Sosa",
  "presencial",
  2500
);
let act5 = new act(
  "infantil",
  "Juegos recreativos",
  "Jhony Paredes",
  "virtual",
  1500
);

let act6 = new act("juvenil", "Voley", "Pablo Gomez", "presencial", 2000);
let act7 = new act(
  "juvenil",
  "Natación Tiburón",
  "Carlos Bona",
  "presencial",
  3500
);
let act8 = new act("juvenil", "Hockey", "Raul Careye", "presencial", 1500);
let act9 = new act("juvenil", "Crossfit", "Valeria Memes", "presencial", 2500);
let act10 = new act("juvenil", "Eutonía", "Marcela Gazcón", "virtual", 2500);

let act11 = new act("adulto", "Futbol", "Ricardo Calderón", "presencial", 2000);
let act12 = new act("adulto", "Meditación", "Lorena Perez", "virtual", 1500);
let act13 = new act(
  "adulto",
  "Gimnasia adultos",
  "Jimena Britos",
  "presencial",
  2500
);
let act14 = new act("adulto", "Newcom", "Horacio Tebes", "presencial", 3500);
let act15 = new act(
  "adulto",
  "Atletismo",
  "Carolina Fernández",
  "presencial",
  2500
);

const actividades = [];
actividades.push(
  act1,
  act2,
  act3,
  act4,
  act5,
  act6,
  act7,
  act8,
  act9,
  act10,
  act11,
  act12,
  act13,
  act14,
  act15
);

//Listado de funciones

function noSocio() {
  alert(
    "Para poder disfrutar del club debés ser socio/a \nNos interesa comunicarnos con vos para coordinar el modo de asociarte"
  );
  let contacto = Number(prompt("Datos un teléfono de contacto: "));
  listaNoSocios = contacto;
}

function buscar() {
  let busc = Number(
    prompt(
      "Vamos a filtrar tu actividad, marcá: \n" +
        "1 si querés presencial \n" +
        "2 si querés virtual \n" +
        "3 si buscás categoria infantil \n" +
        "4 si buscas categoría juvenil \n" +
        "5 si buscas categoría adulto"
    )
  );
  switch (busc) {
    case 1:
      let busc1 = actividades.filter((act) => act.modo == "presencial");
      console.log(busc1);
      break;
    case 2:
      let busc2 = actividades.filter((act) => act.modo == "virtual");
      console.log(busc2);
      break;
    case 3:
      let busc3 = actividades.filter((act) => act.categoria == "infantil");
      console.log(busc3);
      break;
    case 4:
      let busc4 = actividades.filter((act) => act.categoria == "juvenil");
      console.log(busc4);
      break;
    case 5:
      let busc5 = actividades.filter((act) => act.categoria == "adulto");
      console.log(busc5);
      break;
    default:
      console.log("Error - número no válido");
      break;
  }
}
function completo() {
  let comp = alert(
    "Ahora verás el listado completo, recordá que para filtrarlo debés elegir otra opción"
  );
  console.log(actividades);
}

let listaNoSocios;
function saludo() {
  let nombre = prompt("Hola! ¿Cuál es tu nombre?");
  //let socio = confirm("¿Sos socio/a del club");
  let socio = prompt(nombre + " ¿Sos socio/a del club?").toLowerCase();
  if (socio == "si") {
    alert("Fantástico! veamos que podés hacer en el club");
  } else {
    noSocio();
    console.log("El teléfono de " + nombre + " es " + listaNoSocios);
  }
}

//inicio de interacción

saludo();

let pregunta = prompt(
  "Tenemos una actividad para vos. Marcá 1 si querés ver el listado completo o 2 si querés buscarla"
);

if (pregunta == 1) {
  completo();
} else buscar();

let final = prompt(
  "¿Querés buscar otra vez?. Marcá 1 si querés filtrar resultados o 2 si querés salir"
);

if (final == 1) {
  buscar();
  console.log("Gracias por visitarnos!!");
} else console.log("Gracias por visitarnos!!");
