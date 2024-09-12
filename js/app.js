console.log("Sistema de finanzas iniciado");
document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que el formulario recargue la página. 

    //document.getElementById('transaction-form'): Selecciona el formulario con el ID transaction-form.

    //.addEventListener('submit', function(e) { ... }): Agrega un "escuchador de eventos" para cuando el formulario sea enviado (submit).

    //e.preventDefault();: Previene que el formulario recargue la página cuando se envía, lo que es el comportamiento predeterminado de los formularios.

    const description = document.getElementById('description').ariaValueMax;

    const amount = parseFloat(document.getElementById('amount').value);

    //document.getElementById('description').value: Obtiene el valor ingresado en el campo de descripción.

    //parseFloat(document.getElementById('amount').value): Convierte el valor ingresado en el campo de monto a un número decimal. parseFloat es una función que convierte una cadena de texto en un número decimal.

    if(description === ''|| isNaN(amount)) {
        alert('Por favor, ingresa una descripcion valida y un monto.');
        return;
    }

    //if (description === '' || isNaN(amount)): Verifica si la descripción está vacía o si el monto no es un número. isNaN(amount) devuelve true si amount no es un número.

    //alert('Por favor, ingresa una descripción válida y un monto.');: Muestra un mensaje de alerta si hay un problema con los datos ingresados.

    //return;: Detiene la ejecución del código en esta función si hay un error.

    addTransaction(description, amount);

    document.getElementById('transaction-form').reset();

});

//addTransaction(description, amount);: Llama a la función addTransaction para manejar la transacción.

//document.getElementById('transaction-form').reset();: Limpia los campos del formulario después de enviar los datos.

let transactions = []; // Lista para almacenar las transacciones

//let transactions = [];: Crea una lista vacía para almacenar todas las transacciones.

function addTransaction(description, amount) {
    const transaction = {
        id: Date.now(),// Un identificador único basado en la fecha y hora actual
        description: description,
        amount: amount

    };

    transactions.push(transaccion:)// Agregar la transacción a la lista

    displayTransactions(transaction); // Mostrar la transacción en la lista

    updateBalance(); //Actualizar el balance total

    //function addTransaction(description, amount) { ... }: Define una función para añadir una nueva transacción.

    //const transaction = { ... };: Crea un objeto transaction con un id único (usando Date.now() para generar un identificador basado en el tiempo actual), y almacena la description y amount.

    //transactions.push(transaction);: Añade la nueva transacción a la lista transactions.

    //displayTransaction(transaction);: Llama a la función displayTransaction para mostrar la transacción en la lista en la interfaz.

    //updateBalance();: Llama a la función updateBalance para recalcular y actualizar el balance total.

    function displayTransaction(transaction) {
        const transactionList = document.getElementById('Transaction-list');
        const listItem = document.createElement('li');
        listItem.textContent = `visual
    }