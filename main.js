console.log("%c¡Bienvenido a la Prueba Final del Módulo 3!", "color: #61dafb; font-size: 20px; font-weight: bold;");
console.log("Sigue las instrucciones en pantalla para comenzar.");



function getUserInfo() {
    let name = prompt("¡Hola! ¿Cuál es tu nombre?");


    if (name === null || name.trim() === "") {
        name = "Usuario";
        alert("¡Bienvenido, Usuario!");
    } else {
        alert("¡Bienvenido/a, " + name + "!");
    }

    console.log("%cUsuario autenticado: " + name, "color: green; font-weight: bold;");
    return name;
}

function performMathOperations() {
    console.group("Operaciones Matemáticas");
    console.log("Iniciando calculadora básica...");


    let num1Str = prompt("Ingresa el primer número para operar:");
    let num2Str = prompt("Ingresa el segundo número para operar:");


    let num1 = parseFloat(num1Str);
    let num2 = parseFloat(num2Str);


    if (isNaN(num1) || isNaN(num2)) {
        console.error("Error: Uno o ambos valores ingresados no son números válidos.");
        alert("Por favor ingresa números válidos la próxima vez.");
    } else {
        console.log("Números ingresados: " + num1 + " y " + num2);


        let sum = num1 + num2;
        let diff = num1 - num2;
        let prod = num1 * num2;

        console.log(`Suma: ${num1} + ${num2} = ${sum}`);
        console.log(`Resta: ${num1} - ${num2} = ${diff}`);
        console.log(`Multiplicación: ${num1} * ${num2} = ${prod}`);


        if (num2 !== 0) {
            let div = num1 / num2;
            console.log(`División: ${num1} / ${num2} = ${div.toFixed(2)}`);
        } else {
            console.warn("División: No es posible dividir por cero.");
        }
    }
    console.groupEnd();
}



function manageLists() {
    console.group("Gestión de Arrays y Bucles");
    console.log("--- Trabajando con listas ---");


    let fruits = ["Manzana", "Banana", "Cereza", "Durazno"];
    console.log("Lista inicial:", fruits);


    console.log("Mostrando frutas con bucle 'for':");
    for (let i = 0; i < fruits.length; i++) {
        console.log(`Fruta ${i + 1}: ${fruits[i]}`);
    }


    let newFruit = prompt("Ingresa el nombre de una fruta para agregar a la lista:");
    if (newFruit) {
        fruits.push(newFruit);
        console.log(`Fruta '${newFruit}' agregada.`);
    }


    console.log("Filtrando frutas que contengan la letra 'a' (bucle while simulado con filter):");

    let filteredFruits = [];
    let k = 0;
    while (k < fruits.length) {
        if (fruits[k].toLowerCase().includes('a')) {
            filteredFruits.push(fruits[k]);
        }
        k++;
    }
    console.log("Frutas con 'a':", filteredFruits);
    console.groupEnd();
}


function manageObjects() {
    console.group("Objetos y Métodos");


    const book = {
        title: "El Quijote",
        author: "Miguel de Cervantes",
        year: 1605,
        getInfo: function () {
            return `${this.title} escrito por ${this.author}`;
        }
    };

    console.log("Objeto simple:", book.getInfo());


    let products = [
        { id: 1, name: "Laptop", price: 1000, category: "Tech" },
        { id: 2, name: "Mouse", price: 25, category: "Tech" },
        { id: 3, name: "Teclado", price: 50, category: "Tech" },
        { id: 4, name: "Silla", price: 150, category: "Muebles" }
    ];

    console.log("Inventario de productos:", products);


    console.log("Lista de precios (usando map):");
    const prices = products.map(product => {
        return `${product.name}: $${product.price}`;
    });
    console.log(prices);


    console.log("Detalles de productos (usando forEach):");
    products.forEach(p => {
        console.log(`- Item: ${p.name} (${p.category})`);
    });

    console.groupEnd();
}


function init() {
    console.clear();
    console.log("%c Proyecto prueba final Módulo 3 - Iniciado ", "background: #222; color: #bada55; padding: 5px;");


    const userName = getUserInfo();


    const wantMath = confirm("¿Deseas realizar operaciones matemáticas básicas?");
    if (wantMath) {
        performMathOperations();
    }



    manageLists();



    manageObjects();

    console.log("%c\n¡Ejecución finalizada! Gracias por usar la aplicación.", "color: #61dafb; font-weight: bold;");
}


init();
