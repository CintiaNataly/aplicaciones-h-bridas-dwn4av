//--------------------------------------------------------------Parte 1: Callbacks
/*
function task1(task1) {
    console.log(task1.innerText = "Funcion task 1");
}

function task2(task2) {
    console.log(task2.innerText = "Funcion task 2");
}

function task3(task3) {
    console.log(task3.innerText = "Funcion task 3");
}

function mainCallback(Callbacks) {
    setTimeout(() => {
        const data = "Funcion task";
    Callbacks(data)
    }, 1000)
}

mainCallback(task1);
mainCallback(task2);
mainCallback(task3);
*/



//--------------------------------------------------------------Parte 2: Promesas
/*
const primeraPromesa = new Promise((resolve) => setTimeout(resolve, 1000, "Task1"));
const segundaPromesa = new Promise((resolve) => setTimeout(resolve, 1000, "Task2"));
const terceraPromesa = new Promise((resolve) => setTimeout(resolve, 1000, "Task3"));

Promise.all([primeraPromesa, segundaPromesa, terceraPromesa]).then(resultado => {
    console.log(resultado);
}).catch(error => {
        console.log(error);
    });

*/
//--------------------------------------------------------------Parte 3: Async/Await
/*
function task1() {
    return new Promise((resolve, reject) => {
        const exito = true;
        if (exito) {
            resolve("Funcion task 1");
        } else {
            reject("Error al obtener task");
        }
    })
}

function task2() {
    return new Promise((resolve, reject) => {
        const exito = true;
        if (exito) {
            resolve("Funcion task 2");
        } else {
            reject("Error al obtener task");
        }
    })
}

function task3() {
    return new Promise((resolve, reject) => {
        const exito = true;
        if (exito) {
            resolve("Funcion task 3");
        } else {
            reject("Error al obtener task");
        }
    })
}


async function mainAsync() {
    try {
        const dato = await task1();
        console.log(dato)
        const datos = await task2();
        console.log(datos)
        const datoss = await task3();
        console.log(datoss)
    } catch (error) {
        console.log(error)
    }
}

mainAsync()
*/