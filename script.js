function calcularTransporte() {
    // Obtener valores iniciales
    let sandiasIniciales = parseInt(document.getElementById('sandias').value);
    let capacidadCamello = parseInt(document.getElementById('capacidad').value);
    
    // Verificar si los números son válidos
    if (isNaN(sandiasIniciales) || isNaN(capacidadCamello) || 
        sandiasIniciales < 1 || capacidadCamello < 1) {
        alert('Por favor, ingrese números válidos');
        return;
    }

    let sandiasRestantes = sandiasIniciales;
    let viajes = 0;
    let sandiasPerdidas = 0;
    let sandiasEntregadas = 0;
    let detallesViajes = [];

    // Calcular cada viaje
    while (sandiasRestantes > 0) {
        viajes++;
        
        // Determinar cuántas sandías se llevan en este viaje
        let sandiasEnViaje = Math.min(sandiasRestantes, capacidadCamello);
        sandiasRestantes -= sandiasEnViaje;
        
        // El camello consume una sandía por viaje de ida y vuelta
        sandiasPerdidas++;
        sandiasEnViaje--;
        
        // Agregar detalles del viaje
        if (sandiasEnViaje > 0) {
            detallesViajes.push(`Viaje ${viajes}: ${sandiasEnViaje} sandías entregadas (1 consumida por el camello)`);
            sandiasEntregadas += sandiasEnViaje;
        }
    }

    // Preparar el mensaje de resultado
    let mensaje = `
        Resultados del transporte:
        <br><br>
        Sandías iniciales: ${sandiasIniciales}
        <br>
        Número de viajes: ${viajes}
        <br>
        Sandías consumidas por el camello: ${sandiasPerdidas}
        <br>
        Sandías entregadas al mercado: ${sandiasEntregadas}
        <br><br>
        Detalles de los viajes:
        <br>
        ${detallesViajes.join('<br>')}
    `;
    
    // Mostrar el resultado
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.style.display = 'block';
}