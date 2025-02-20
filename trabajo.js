
document.addEventListener("DOMContentLoaded",
    function () {
   const menuIcon = 
   document.getElementById("menuIcon");
   const dropdownMenu = 
   document.getElementById("dropdownMenu");

   if (!menuIcon || !dropdownMenu) {
       console.error("No se encontraron los elementos del menú");
       return;
   }

   menuIcon.addEventListener("click", 
       function (event) {
       event.stopPropagation();
       dropdownMenu.classList.toggle("show");
   });

   document.addEventListener("click",
        function (event) {
       if (!
           menuIcon.contains(event.target) && !
           dropdownMenu.contains(event.target)) {
           dropdownMenu.classList.remove("show");
   }
});
});


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















