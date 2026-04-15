// En este ejercicio, vamos a crear una lista de videos que queremos ver. Cada video 
// será representado como un objeto con varias propiedades, como el título, la URL, 
// un resumen, etiquetas, si lo hemos visto o no, y su dificultad.

const miLista = [
    {
        titulo:"Introducción a la programación - Primera parte",
        url:"https://www.youtube.com/watch?v=Mv8bLY8wRQI&t=25s",
        resumen:"Este vivo estará dedicado a todas las personas que quieren entender cómo funciona una computadora, un lenguaje de programación y algunos conceptos teóricos y técnicos. También vamos a tratar de entender cómo el código es la materia prima de una industria y cómo genera dinero. No es un curso práctico si no más bien algo para ver y tomar notas si quieren. El objetivo es que tengan una mínima introducción y se pregunten si es algo que les gustaría hacer.",
        tags:["JavaScript,Arrays,Programacion,Objetos"],
        visto:true,
        dificultad:3
    },
    {
        titulo:"Quiero aprender a programar, ¿por dónde empiezo?",
        url:"https://www.youtube.com/watch?v=0Js_juHVL6M",
        resumen:"Si estás pensando en aprender a programar, en este video te cuento algunas cosas que tenés que tener en cuenta para meterte en este mundo.",
        tags:["JavaScript,Arrays,Programacion,Objetos"],
        visto:false,
        dificultad:2
    },
    {
        titulo:"Vivo Q&A - Estudiantes dan sus opiniones sobre la carrera de desarrollo web fullstack de apx",
        url:"https://www.youtube.com/watch?v=A3a8IxnqGTY",
        resumen:"Descubre lo que otras personas opinaron sobre este video mientras se transmitía en vivo.",
        tags:["JavaScript,Arrays,Programacion,Objetos"],
        visto:true,
        dificultad:1
    }
];

// Para ver el contenido de mi lista de videos, podemos imprimirla en la consola.

console.log(miLista);

// Para acceder a la información de un video específico, podemos usar su índice en el array.
// Por ejemplo, para acceder al primer video, podemos usar el índice 0, ya que los índices
//  de los arrays comienzan en cero.

console.log("La cantidad de videos guardados", miLista.length);
console.log("URL del primer video", miLista[0].url);
console.log("Resumen de mi primer video", miLista[0].resumen);

// Para acceder al último video, podemos usar la propiedad length del array para obtener 
// su índice sin necesidad de crear un nuevo array o variable. El índice del último elemento 
// de un array es siempre igual a su longitud menos uno, ya que los índices comienzan en cero.

const ultimoVideo = miLista[miLista.length - 1];
console.log("El título del último video es", ultimoVideo.titulo);
console.log("Url de ultimo video", ultimoVideo.url);
console.log("Resumen del ultimo video", ultimoVideo.resumen);