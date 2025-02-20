document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("startBtn").addEventListener("click", function () {
        let introScreen = document.getElementById("introScreen");
        let mainContent = document.getElementById("mainContent");


        // Agregar clase para animación de salida
        introScreen.classList.add("fade-out");


        setTimeout(() => {
            introScreen.style.display = "none"; // Ocultar el contenido de bienvenida
            mainContent.classList.add("fade-in"); // Mostrar el nuevo contenido con animación
        }, 700);
    });


    // // Mostrar fecha actual
    // function updateDate() {
    //     const dateElement = document.getElementById("currentDate");
    //     if (dateElement) {
    //         const today = new Date();
    //         const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    //         dateElement.textContent = today.toLocaleDateString("es-ES", options);
    //     }
    // }


    // updateDate();
});
// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');


const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};
const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};


const changeTaskState = event => {
    event.target.classList.toggle('done');
};


const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}


const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}


setDate();

//sesion de codigo aleatorio 
const generateBtn = document.getElementById('generateBtn');
const codeDisplay = document.getElementById('codeDisplay');
const codeExplanation = document.getElementById('codeExplanation');

// Array de códigos y sus explicaciones
const codes = [
    { code: 'HTML', explanation: 'Lenguaje de marcado de hipertexto utilizado para crear páginas web.' },
    { code: 'CSS', explanation: 'Lenguaje de hojas de estilo en cascada utilizado para diseñar páginas web.' },
    { code: 'JS', explanation: 'JavaScript, un lenguaje de programación utilizado para crear contenido web dinámico.' },
    { code: 'Python', explanation: 'Lenguaje de programación de alto nivel y propósito general.' },
    { code: 'SQL', explanation: 'Lenguaje de consulta estructurada utilizado para gestionar bases de datos.' }
];

// Función para generar un código aleatorio
function generateRandomCode() {
    const randomIndex = Math.floor(Math.random() * codes.length);
    const randomCode = codes[randomIndex];
    codeDisplay.textContent = randomCode.code;
    codeExplanation.textContent = randomCode.explanation;
}

// Evento de clic para el botón de generar código
generateBtn.addEventListener('click', generateRandomCode);
