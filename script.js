function funcion1() {

// Datos de inversión para Emmanuel Manosalva (ejemplo)
const inversionesEmmanuel = {
    semana23: 200,
    semana24: 200,
    semana25: 540,
    semana26: 300,
    semana27: 300,
    semana28: 800,
    semana29: 800,
    semana30: 800,
    semana31: 1800,
    semana32: 800,
    semana33: 800,
    semana34: 800,
    semana35: 800,
    semana36: 800,
    semana37: 1000,
    semana38: 1000,
    semana39: 200,
    semana40: 200,
    semana41: 200,
    semana42: 0,
    semana43: 0,
    semana44: 0,
    semana45: 0,
    semana46: 0,
    semana47: 0,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0,
    // ... Agrega más semanas
};


// Función para calcular el total de inversión
function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
}

// Actualiza el valor en la página (Emmanuel)
document.getElementById('semana-23').appendChild(crearNodoTexto(inversionesEmmanuel.semana23));
document.getElementById('semana-24').appendChild(crearNodoTexto(inversionesEmmanuel.semana24));
document.getElementById('semana-25').appendChild(crearNodoTexto(inversionesEmmanuel.semana25));
document.getElementById('semana-26').appendChild(crearNodoTexto(inversionesEmmanuel.semana26));
document.getElementById('semana-27').appendChild(crearNodoTexto(inversionesEmmanuel.semana27));
document.getElementById('semana-28').appendChild(crearNodoTexto(inversionesEmmanuel.semana28));
document.getElementById('semana-29').appendChild(crearNodoTexto(inversionesEmmanuel.semana29));
document.getElementById('semana-30').appendChild(crearNodoTexto(inversionesEmmanuel.semana30));
document.getElementById('semana-31').appendChild(crearNodoTexto(inversionesEmmanuel.semana31));
document.getElementById('semana-32').appendChild(crearNodoTexto(inversionesEmmanuel.semana32));
document.getElementById('semana-33').appendChild(crearNodoTexto(inversionesEmmanuel.semana33));
document.getElementById('semana-34').appendChild(crearNodoTexto(inversionesEmmanuel.semana34));
document.getElementById('semana-35').appendChild(crearNodoTexto(inversionesEmmanuel.semana35));
document.getElementById('semana-36').appendChild(crearNodoTexto(inversionesEmmanuel.semana36));
document.getElementById('semana-37').appendChild(crearNodoTexto(inversionesEmmanuel.semana37));
document.getElementById('semana-38').appendChild(crearNodoTexto(inversionesEmmanuel.semana38));
document.getElementById('semana-39').appendChild(crearNodoTexto(inversionesEmmanuel.semana39));
document.getElementById('semana-40').appendChild(crearNodoTexto(inversionesEmmanuel.semana40));
document.getElementById('semana-41').appendChild(crearNodoTexto(inversionesEmmanuel.semana41));
document.getElementById('semana-42').appendChild(crearNodoTexto(inversionesEmmanuel.semana42));
document.getElementById('semana-43').appendChild(crearNodoTexto(inversionesEmmanuel.semana43));
document.getElementById('semana-44').appendChild(crearNodoTexto(inversionesEmmanuel.semana44));
document.getElementById('semana-45').appendChild(crearNodoTexto(inversionesEmmanuel.semana45));
document.getElementById('semana-46').appendChild(crearNodoTexto(inversionesEmmanuel.semana46));
document.getElementById('semana-47').appendChild(crearNodoTexto(inversionesEmmanuel.semana47));
document.getElementById('semana-48').appendChild(crearNodoTexto(inversionesEmmanuel.semana48));


// Calcula y muestra el total (Emmanuel)
const totalInversionEmmanuel = calcularTotalInversion(inversionesEmmanuel);
console.log(`Total de inversión de Emmanuel: $${totalInversionEmmanuel}`);



function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`$${valor}`);
    return nodoTexto;
}



// Función para calcular el total de inversión por mes
function calcularTotalMes(inversiones, inicioSemana, finSemana) {
  const valoresMes = Object.values(inversiones).slice(inicioSemana - 23, finSemana - 52);
  return valoresMes.reduce((total, monto) => total + monto, 0);
}

// Calcula y muestra los totales mensuales
const totalJunio = calcularTotalMes(inversionesEmmanuel, 23, 27);
const totalJulio = calcularTotalMes(inversionesEmmanuel, 28, 31);
const totalAgosto = calcularTotalMes(inversionesEmmanuel, 32, 35);
const totalSeptiembre = calcularTotalMes(inversionesEmmanuel, 36, 40);
const totalOctubre = calcularTotalMes(inversionesEmmanuel, 41, 44);
const totalNoviembre = calcularTotalMes(inversionesEmmanuel, 45, 48);

document.getElementById('total-junio').appendChild(crearNodoTexto(`$${totalJunio}`));
document.getElementById('total-julio').appendChild(crearNodoTexto(`$${totalJulio}`));
document.getElementById('total-agosto').appendChild(crearNodoTexto(`$${totalAgosto}`));
document.getElementById('total-septiembre').appendChild(crearNodoTexto(`$${totalSeptiembre}`));
document.getElementById('total-octubre').appendChild(crearNodoTexto(`$${totalOctubre}`));
document.getElementById('total-noviembre').appendChild(crearNodoTexto(`$${totalNoviembre}`));

// Calcula el sub-total (suma de los totales mensuales)
const subTotalEmmanuel = totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre;

// Interés (constante = 0)
const interesEmmanuel = 209.28;

// Total final (sub-total + interés)
const totalFinalEmmanuel = subTotalEmmanuel + interesEmmanuel;

// Muestra el sub-total
document.getElementById('emmanuel-subtotal').appendChild(crearNodoTexto(`${subTotalEmmanuel}`));

// Muestra el interés
document.getElementById('emmanuel-interes').appendChild(crearNodoTexto(`${interesEmmanuel}`));

// Muestra el total final
document.getElementById('emmanuel-total').appendChild(crearNodoTexto(`${totalFinalEmmanuel}`));



  // Password check (replace with server-side authentication)
  const password = prompt("Ingrese la contraseña:");
  if (password !== "20124815emml")
  if (password !== "20124815emml") {
    alert("Contraseña incorrecta. Acceso denegado.");
    
    return; // Prevent further code execution if password is wrong
  }
  
      
  
    
  // ... rest of your code to display investment data ...


document.getElementById("contenido").style.display = "block";


}



function funcion2() {

// Datos de inversión para Nurbis Urbáez (ejemplo)
const inversionesNurbis = {
    semana23: 200,
    semana24: 200,
    semana25: 200,
    semana26: 200,
    semana27: 200,
    semana28: 200,
    semana29: 200,
    semana30: 200,
    semana31: 200,
    semana32: 200,
    semana33: 200,
    semana34: 200,
    semana35: 200,
    semana36: 200,
    semana37: 200,
    semana38: 200,
    semana39: 200,
    semana40: 200,
    semana41: 200,
    semana42: 0,
    semana43: 0,
    semana44: 0,
    semana45: 0,
    semana46: 0,
    semana47: 0,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0,
    // ... Agrega más semanas
};


// Función para calcular el total de inversión
function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
}

// Actualiza el valor en la página (Nurbis)
document.getElementById('semana-23').appendChild(crearNodoTexto(inversionesNurbis.semana23));
document.getElementById('semana-24').appendChild(crearNodoTexto(inversionesNurbis.semana24));
document.getElementById('semana-25').appendChild(crearNodoTexto(inversionesNurbis.semana25));
document.getElementById('semana-26').appendChild(crearNodoTexto(inversionesNurbis.semana26));
document.getElementById('semana-27').appendChild(crearNodoTexto(inversionesNurbis.semana27));
document.getElementById('semana-28').appendChild(crearNodoTexto(inversionesNurbis.semana28));
document.getElementById('semana-29').appendChild(crearNodoTexto(inversionesNurbis.semana29));
document.getElementById('semana-30').appendChild(crearNodoTexto(inversionesNurbis.semana30));
document.getElementById('semana-31').appendChild(crearNodoTexto(inversionesNurbis.semana31));
document.getElementById('semana-32').appendChild(crearNodoTexto(inversionesNurbis.semana32));
document.getElementById('semana-33').appendChild(crearNodoTexto(inversionesNurbis.semana33));
document.getElementById('semana-34').appendChild(crearNodoTexto(inversionesNurbis.semana34));
document.getElementById('semana-35').appendChild(crearNodoTexto(inversionesNurbis.semana35));
document.getElementById('semana-36').appendChild(crearNodoTexto(inversionesNurbis.semana36));
document.getElementById('semana-37').appendChild(crearNodoTexto(inversionesNurbis.semana37));
document.getElementById('semana-38').appendChild(crearNodoTexto(inversionesNurbis.semana38));
document.getElementById('semana-39').appendChild(crearNodoTexto(inversionesNurbis.semana39));
document.getElementById('semana-40').appendChild(crearNodoTexto(inversionesNurbis.semana40));
document.getElementById('semana-41').appendChild(crearNodoTexto(inversionesNurbis.semana41));
document.getElementById('semana-42').appendChild(crearNodoTexto(inversionesNurbis.semana42));
document.getElementById('semana-43').appendChild(crearNodoTexto(inversionesNurbis.semana43));
document.getElementById('semana-44').appendChild(crearNodoTexto(inversionesNurbis.semana44));
document.getElementById('semana-45').appendChild(crearNodoTexto(inversionesNurbis.semana45));
document.getElementById('semana-46').appendChild(crearNodoTexto(inversionesNurbis.semana46));
document.getElementById('semana-47').appendChild(crearNodoTexto(inversionesNurbis.semana47));
document.getElementById('semana-48').appendChild(crearNodoTexto(inversionesNurbis.semana48));


// Calcula y muestra el total (Nurbis)
const totalInversionNurbis = calcularTotalInversion(inversionesNurbis);
console.log(`Total de inversión de Nurbis: $${totalInversionNurbis}`);



function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`$${valor}`);
    return nodoTexto;
}



// Función para calcular el total de inversión por mes
function calcularTotalMes(inversiones, inicioSemana, finSemana) {
  const valoresMes = Object.values(inversiones).slice(inicioSemana - 23, finSemana - 52);
  return valoresMes.reduce((total, monto) => total + monto, 0);
}

// Calcula y muestra los totales mensuales
const totalJunio = calcularTotalMes(inversionesNurbis, 23, 27);
const totalJulio = calcularTotalMes(inversionesNurbis, 28, 31);
const totalAgosto = calcularTotalMes(inversionesNurbis, 32, 35);
const totalSeptiembre = calcularTotalMes(inversionesNurbis, 36, 40);
const totalOctubre = calcularTotalMes(inversionesNurbis, 41, 44);
const totalNoviembre = calcularTotalMes(inversionesNurbis, 45, 48);

document.getElementById('total-junio').appendChild(crearNodoTexto(`$${totalJunio}`));
document.getElementById('total-julio').appendChild(crearNodoTexto(`$${totalJulio}`));
document.getElementById('total-agosto').appendChild(crearNodoTexto(`$${totalAgosto}`));
document.getElementById('total-septiembre').appendChild(crearNodoTexto(`$${totalSeptiembre}`));
document.getElementById('total-octubre').appendChild(crearNodoTexto(`$${totalOctubre}`));
document.getElementById('total-noviembre').appendChild(crearNodoTexto(`$${totalNoviembre}`));

// Calcula el sub-total (suma de los totales mensuales)
const subTotalNurbis = totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre;

// Interés (constante = 0)
const interesNurbis = 47.12;

// Total final (sub-total + interés)
const totalFinalNurbis = subTotalNurbis + interesNurbis;

// Muestra el sub-total
document.getElementById('nurbis-subtotal').appendChild(crearNodoTexto(`${subTotalNurbis}`));

// Muestra el interés
document.getElementById('nurbis-interes').appendChild(crearNodoTexto(`${interesNurbis}`));

// Muestra el total final
document.getElementById('nurbis-total').appendChild(crearNodoTexto(`${totalFinalNurbis}`));



  // Password check (replace with server-side authentication)
  const password = prompt("Ingrese la contraseña:");
  if (password !== "20124815emml")
  if (password !== "20374295") {
    alert("Contraseña incorrecta. Acceso denegado.");
    
    return; // Prevent further code execution if password is wrong
  }
  

  // ... rest of your code to display investment data ...


document.getElementById("contenido").style.display = "block";


}





function funcion3() {

// Datos de inversión para Nobis Amundarey (ejemplo)
const inversionesNobis = {
    semana23: 185,
    semana24: 185,
    semana25: 185,
    semana26: 185,
    semana27: 185,
    semana28: 185,
    semana29: 185,
    semana30: 185,
    semana31: 185,
    semana32: 185,
    semana33: 185,
    semana34: 185,
    semana35: 185,
    semana36: 185,
    semana37: 185,
    semana38: 185,
    semana39: 195,
    semana40: 195,
    semana41: 195,
    semana42: 200,
    semana43: 0,
    semana44: 0,
    semana45: 0,
    semana46: 0,
    semana47: 0,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0,
    // ... Agrega más semanas
};


// Función para calcular el total de inversión
function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
}

// Actualiza el valor en la página (Nobis)
document.getElementById('semana-23').appendChild(crearNodoTexto(inversionesNobis.semana23));
document.getElementById('semana-24').appendChild(crearNodoTexto(inversionesNobis.semana24));
document.getElementById('semana-25').appendChild(crearNodoTexto(inversionesNobis.semana25));
document.getElementById('semana-26').appendChild(crearNodoTexto(inversionesNobis.semana26));
document.getElementById('semana-27').appendChild(crearNodoTexto(inversionesNobis.semana27));
document.getElementById('semana-28').appendChild(crearNodoTexto(inversionesNobis.semana28));
document.getElementById('semana-29').appendChild(crearNodoTexto(inversionesNobis.semana29));
document.getElementById('semana-30').appendChild(crearNodoTexto(inversionesNobis.semana30));
document.getElementById('semana-31').appendChild(crearNodoTexto(inversionesNobis.semana31));
document.getElementById('semana-32').appendChild(crearNodoTexto(inversionesNobis.semana32));
document.getElementById('semana-33').appendChild(crearNodoTexto(inversionesNobis.semana33));
document.getElementById('semana-34').appendChild(crearNodoTexto(inversionesNobis.semana34));
document.getElementById('semana-35').appendChild(crearNodoTexto(inversionesNobis.semana35));
document.getElementById('semana-36').appendChild(crearNodoTexto(inversionesNobis.semana36));
document.getElementById('semana-37').appendChild(crearNodoTexto(inversionesNobis.semana37));
document.getElementById('semana-38').appendChild(crearNodoTexto(inversionesNobis.semana38));
document.getElementById('semana-39').appendChild(crearNodoTexto(inversionesNobis.semana39));
document.getElementById('semana-40').appendChild(crearNodoTexto(inversionesNobis.semana40));
document.getElementById('semana-41').appendChild(crearNodoTexto(inversionesNobis.semana41));
document.getElementById('semana-42').appendChild(crearNodoTexto(inversionesNobis.semana42));
document.getElementById('semana-43').appendChild(crearNodoTexto(inversionesNobis.semana43));
document.getElementById('semana-44').appendChild(crearNodoTexto(inversionesNobis.semana44));
document.getElementById('semana-45').appendChild(crearNodoTexto(inversionesNobis.semana45));
document.getElementById('semana-46').appendChild(crearNodoTexto(inversionesNobis.semana46));
document.getElementById('semana-47').appendChild(crearNodoTexto(inversionesNobis.semana47));
document.getElementById('semana-48').appendChild(crearNodoTexto(inversionesNobis.semana48));


// Calcula y muestra el total (Nobis)
const totalInversionNobis = calcularTotalInversion(inversionesNobis);
console.log(`Total de inversión de Nobis: $${totalInversionNobis}`);



function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`$${valor}`);
    return nodoTexto;
}



// Función para calcular el total de inversión por mes
function calcularTotalMes(inversiones, inicioSemana, finSemana) {
  const valoresMes = Object.values(inversiones).slice(inicioSemana - 23, finSemana - 52);
  return valoresMes.reduce((total, monto) => total + monto, 0);
}

// Calcula y muestra los totales mensuales
const totalJunio = calcularTotalMes(inversionesNobis, 23, 27);
const totalJulio = calcularTotalMes(inversionesNobis, 28, 31);
const totalAgosto = calcularTotalMes(inversionesNobis, 32, 35);
const totalSeptiembre = calcularTotalMes(inversionesNobis, 36, 40);
const totalOctubre = calcularTotalMes(inversionesNobis, 41, 44);
const totalNoviembre = calcularTotalMes(inversionesNobis, 45, 48);

document.getElementById('total-junio').appendChild(crearNodoTexto(`$${totalJunio}`));
document.getElementById('total-julio').appendChild(crearNodoTexto(`$${totalJulio}`));
document.getElementById('total-agosto').appendChild(crearNodoTexto(`$${totalAgosto}`));
document.getElementById('total-septiembre').appendChild(crearNodoTexto(`$${totalSeptiembre}`));
document.getElementById('total-octubre').appendChild(crearNodoTexto(`$${totalOctubre}`));
document.getElementById('total-noviembre').appendChild(crearNodoTexto(`$${totalNoviembre}`));

// Calcula el sub-total (suma de los totales mensuales)
const subTotalNobis = totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre;

// Interés (constante = 0)
const interesNobis = 47.12;

// Total final (sub-total + interés)
const totalFinalNobis = subTotalNobis + interesNobis;

// Muestra el sub-total
document.getElementById('nobis-subtotal').appendChild(crearNodoTexto(`${subTotalNobis}`));

// Muestra el interés
document.getElementById('nobis-interes').appendChild(crearNodoTexto(`${interesNobis}`));

// Muestra el total final
document.getElementById('nobis-total').appendChild(crearNodoTexto(`${totalFinalNobis}`));



  // Password check (replace with server-side authentication)
  const password = prompt("Ingrese la contraseña:");
  if (password !== "20124815emml")
  if (password !== "Alexander#2013") {
    alert("Contraseña incorrecta. Acceso denegado.");
    
    return; // Prevent further code execution if password is wrong
  }
  

  // ... rest of your code to display investment data ...


document.getElementById("contenido").style.display = "block";


}




function funcion4() {

// Datos de inversión para Yulibí López (ejemplo)
const inversionesYuli = {
    semana23: 190,
    semana24: 190,
    semana25: 185,
    semana26: 185,
    semana27: 185,
    semana28: 185,
    semana29: 185,
    semana30: 185,
    semana31: 185,
    semana32: 185,
    semana33: 185,
    semana34: 200,
    semana35: 185,
    semana36: 185,
    semana37: 370,
    semana38: 185,
    semana39: 185,
    semana40: 185,
    semana41: 205,
    semana42: 205,
    semana43: 205,
    semana44: 205,
    semana45: 430,
    semana46: 430,
    semana47: 0,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0,
    // ... Agrega más semanas
};


// Función para calcular el total de inversión
function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
}

// Actualiza el valor en la página (Yuli)
document.getElementById('semana-23').appendChild(crearNodoTexto(inversionesYuli.semana23));
document.getElementById('semana-24').appendChild(crearNodoTexto(inversionesYuli.semana24));
document.getElementById('semana-25').appendChild(crearNodoTexto(inversionesYuli.semana25));
document.getElementById('semana-26').appendChild(crearNodoTexto(inversionesYuli.semana26));
document.getElementById('semana-27').appendChild(crearNodoTexto(inversionesYuli.semana27));
document.getElementById('semana-28').appendChild(crearNodoTexto(inversionesYuli.semana28));
document.getElementById('semana-29').appendChild(crearNodoTexto(inversionesYuli.semana29));
document.getElementById('semana-30').appendChild(crearNodoTexto(inversionesYuli.semana30));
document.getElementById('semana-31').appendChild(crearNodoTexto(inversionesYuli.semana31));
document.getElementById('semana-32').appendChild(crearNodoTexto(inversionesYuli.semana32));
document.getElementById('semana-33').appendChild(crearNodoTexto(inversionesYuli.semana33));
document.getElementById('semana-34').appendChild(crearNodoTexto(inversionesYuli.semana34));
document.getElementById('semana-35').appendChild(crearNodoTexto(inversionesYuli.semana35));
document.getElementById('semana-36').appendChild(crearNodoTexto(inversionesYuli.semana36));
document.getElementById('semana-37').appendChild(crearNodoTexto(inversionesYuli.semana37));
document.getElementById('semana-38').appendChild(crearNodoTexto(inversionesYuli.semana38));
document.getElementById('semana-39').appendChild(crearNodoTexto(inversionesYuli.semana39));
document.getElementById('semana-40').appendChild(crearNodoTexto(inversionesYuli.semana40));
document.getElementById('semana-41').appendChild(crearNodoTexto(inversionesYuli.semana41));
document.getElementById('semana-42').appendChild(crearNodoTexto(inversionesYuli.semana42));
document.getElementById('semana-43').appendChild(crearNodoTexto(inversionesYuli.semana43));
document.getElementById('semana-44').appendChild(crearNodoTexto(inversionesYuli.semana44));
document.getElementById('semana-45').appendChild(crearNodoTexto(inversionesYuli.semana45));
document.getElementById('semana-46').appendChild(crearNodoTexto(inversionesYuli.semana46));
document.getElementById('semana-47').appendChild(crearNodoTexto(inversionesYuli.semana47));
document.getElementById('semana-48').appendChild(crearNodoTexto(inversionesYuli.semana48));


// Calcula y muestra el total (Yuli)
const totalInversionYuli = calcularTotalInversion(inversionesYuli);
console.log(`Total de inversión de Yuli: $${totalInversionYuli}`);



function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`$${valor}`);
    return nodoTexto;
}



// Función para calcular el total de inversión por mes
function calcularTotalMes(inversiones, inicioSemana, finSemana) {
  const valoresMes = Object.values(inversiones).slice(inicioSemana - 23, finSemana - 52);
  return valoresMes.reduce((total, monto) => total + monto, 0);
}

// Calcula y muestra los totales mensuales
const totalJunio = calcularTotalMes(inversionesYuli, 23, 27);
const totalJulio = calcularTotalMes(inversionesYuli, 28, 31);
const totalAgosto = calcularTotalMes(inversionesYuli, 32, 35);
const totalSeptiembre = calcularTotalMes(inversionesYuli, 36, 40);
const totalOctubre = calcularTotalMes(inversionesYuli, 41, 44);
const totalNoviembre = calcularTotalMes(inversionesYuli, 45, 48);

document.getElementById('total-junio').appendChild(crearNodoTexto(`$${totalJunio}`));
document.getElementById('total-julio').appendChild(crearNodoTexto(`$${totalJulio}`));
document.getElementById('total-agosto').appendChild(crearNodoTexto(`$${totalAgosto}`));
document.getElementById('total-septiembre').appendChild(crearNodoTexto(`$${totalSeptiembre}`));
document.getElementById('total-octubre').appendChild(crearNodoTexto(`$${totalOctubre}`));
document.getElementById('total-noviembre').appendChild(crearNodoTexto(`$${totalNoviembre}`));

// Calcula el sub-total (suma de los totales mensuales)
const subTotalYuli = totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre;

// Interés (constante = 0)
const interesYuli = 47.12;

// Total final (sub-total + interés)
const totalFinalYuli = subTotalYuli + interesYuli;

// Muestra el sub-total
document.getElementById('yuli-subtotal').appendChild(crearNodoTexto(`${subTotalYuli}`));

// Muestra el interés
document.getElementById('yuli-interes').appendChild(crearNodoTexto(`${interesYuli}`));

// Muestra el total final
document.getElementById('yuli-total').appendChild(crearNodoTexto(`${totalFinalYuli}`));



  // Password check (replace with server-side authentication)
  const password = prompt("Ingrese la contraseña:");
  if (password !== "20124815emml")
  if (password !== "Mano*985412") {
    alert("Contraseña incorrecta. Acceso denegado.");
    
    return; // Prevent further code execution if password is wrong
  }
  

  // ... rest of your code to display investment data ...


document.getElementById("contenido").style.display = "block";


}




function funcion5() {

// Datos de inversión para Yulmis Manosalva (ejemplo)
const inversionesYulmis = {
    semana23: 185,
    semana24: 185,
    semana25: 185,
    semana26: 185,
    semana27: 185,
    semana28: 185,
    semana29: 185,
    semana30: 185,
    semana31: 185,
    semana32: 190,
    semana33: 185,
    semana34: 185,
    semana35: 370,
    semana36: 394,
    semana37: 370,
    semana38: 370,
    semana39: 400,
    semana40: 400,
    semana41: 400,
    semana42: 400,
    semana43: 400,
    semana44: 400,
    semana45: 400,
    semana46: 400,
    semana47: 660,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0,
    // ... Agrega más semanas
};


// Función para calcular el total de inversión
function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
}

// Actualiza el valor en la página (Yulmis)
document.getElementById('semana-23').appendChild(crearNodoTexto(inversionesYulmis.semana23));
document.getElementById('semana-24').appendChild(crearNodoTexto(inversionesYulmis.semana24));
document.getElementById('semana-25').appendChild(crearNodoTexto(inversionesYulmis.semana25));
document.getElementById('semana-26').appendChild(crearNodoTexto(inversionesYulmis.semana26));
document.getElementById('semana-27').appendChild(crearNodoTexto(inversionesYulmis.semana27));
document.getElementById('semana-28').appendChild(crearNodoTexto(inversionesYulmis.semana28));
document.getElementById('semana-29').appendChild(crearNodoTexto(inversionesYulmis.semana29));
document.getElementById('semana-30').appendChild(crearNodoTexto(inversionesYulmis.semana30));
document.getElementById('semana-31').appendChild(crearNodoTexto(inversionesYulmis.semana31));
document.getElementById('semana-32').appendChild(crearNodoTexto(inversionesYulmis.semana32));
document.getElementById('semana-33').appendChild(crearNodoTexto(inversionesYulmis.semana33));
document.getElementById('semana-34').appendChild(crearNodoTexto(inversionesYulmis.semana34));
document.getElementById('semana-35').appendChild(crearNodoTexto(inversionesYulmis.semana35));
document.getElementById('semana-36').appendChild(crearNodoTexto(inversionesYulmis.semana36));
document.getElementById('semana-37').appendChild(crearNodoTexto(inversionesYulmis.semana37));
document.getElementById('semana-38').appendChild(crearNodoTexto(inversionesYulmis.semana38));
document.getElementById('semana-39').appendChild(crearNodoTexto(inversionesYulmis.semana39));
document.getElementById('semana-40').appendChild(crearNodoTexto(inversionesYulmis.semana40));
document.getElementById('semana-41').appendChild(crearNodoTexto(inversionesYulmis.semana41));
document.getElementById('semana-42').appendChild(crearNodoTexto(inversionesYulmis.semana42));
document.getElementById('semana-43').appendChild(crearNodoTexto(inversionesYulmis.semana43));
document.getElementById('semana-44').appendChild(crearNodoTexto(inversionesYulmis.semana44));
document.getElementById('semana-45').appendChild(crearNodoTexto(inversionesYulmis.semana45));
document.getElementById('semana-46').appendChild(crearNodoTexto(inversionesYulmis.semana46));
document.getElementById('semana-47').appendChild(crearNodoTexto(inversionesYulmis.semana47));
document.getElementById('semana-48').appendChild(crearNodoTexto(inversionesYulmis.semana48));


// Calcula y muestra el total (Yulmis)
const totalInversionYulmis = calcularTotalInversion(inversionesYulmis);
console.log(`Total de inversión de Yulmis: $${totalInversionYulmis}`);



function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`$${valor}`);
    return nodoTexto;
}



// Función para calcular el total de inversión por mes
function calcularTotalMes(inversiones, inicioSemana, finSemana) {
  const valoresMes = Object.values(inversiones).slice(inicioSemana - 23, finSemana - 52);
  return valoresMes.reduce((total, monto) => total + monto, 0);
}

// Calcula y muestra los totales mensuales
const totalJunio = calcularTotalMes(inversionesYulmis, 23, 27);
const totalJulio = calcularTotalMes(inversionesYulmis, 28, 31);
const totalAgosto = calcularTotalMes(inversionesYulmis, 32, 35);
const totalSeptiembre = calcularTotalMes(inversionesYulmis, 36, 40);
const totalOctubre = calcularTotalMes(inversionesYulmis, 41, 44);
const totalNoviembre = calcularTotalMes(inversionesYulmis, 45, 48);

document.getElementById('total-junio').appendChild(crearNodoTexto(`$${totalJunio}`));
document.getElementById('total-julio').appendChild(crearNodoTexto(`$${totalJulio}`));
document.getElementById('total-agosto').appendChild(crearNodoTexto(`$${totalAgosto}`));
document.getElementById('total-septiembre').appendChild(crearNodoTexto(`$${totalSeptiembre}`));
document.getElementById('total-octubre').appendChild(crearNodoTexto(`$${totalOctubre}`));
document.getElementById('total-noviembre').appendChild(crearNodoTexto(`$${totalNoviembre}`));

// Calcula el sub-total (suma de los totales mensuales)
const subTotalYulmis = totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre;

// Interés (constante = 0)
const interesYulmis = 47.12;

// Total final (sub-total + interés)
const totalFinalYulmis = subTotalYulmis + interesYulmis;

// Muestra el sub-total
document.getElementById('yulmis-subtotal').appendChild(crearNodoTexto(`${subTotalYulmis}`));

// Muestra el interés
document.getElementById('yulmis-interes').appendChild(crearNodoTexto(`${interesYulmis}`));

// Muestra el total final
document.getElementById('yulmis-total').appendChild(crearNodoTexto(`${totalFinalYulmis}`));



  // Password check (replace with server-side authentication)
  const password = prompt("Ingrese la contraseña:");
  if (password !== "20124815emml")
  if (password !== "25415222yulmis") {
    alert("Contraseña incorrecta. Acceso denegado.");
    
    return; // Prevent further code execution if password is wrong
  }
  

  // ... rest of your code to display investment data ...


document.getElementById("contenido").style.display = "block";


}




function funcion6() {

// Datos de inversión para Isaías Manosalva (ejemplo)
const inversionesIsaias = {
    semana23: 185,
    semana24: 185,
    semana25: 185,
    semana26: 185,
    semana27: 185,
    semana28: 185,
    semana29: 185,
    semana30: 185,
    semana31: 185,
    semana32: 185,
    semana33: 185,
    semana34: 185,
    semana35: 185,
    semana36: 185,
    semana37: 210,
    semana38: 210,
    semana39: 186,
    semana40: 185,
    semana41: 185,
    semana42: 185,
    semana43: 0,
    semana44: 0,
    semana45: 0,
    semana46: 0,
    semana47: 0,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0,
    // ... Agrega más semanas
};


// Función para calcular el total de inversión
function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
}

// Actualiza el valor en la página (Isaías)
document.getElementById('semana-23').appendChild(crearNodoTexto(inversionesIsaias.semana23));
document.getElementById('semana-24').appendChild(crearNodoTexto(inversionesIsaias.semana24));
document.getElementById('semana-25').appendChild(crearNodoTexto(inversionesIsaias.semana25));
document.getElementById('semana-26').appendChild(crearNodoTexto(inversionesIsaias.semana26));
document.getElementById('semana-27').appendChild(crearNodoTexto(inversionesIsaias.semana27));
document.getElementById('semana-28').appendChild(crearNodoTexto(inversionesIsaias.semana28));
document.getElementById('semana-29').appendChild(crearNodoTexto(inversionesIsaias.semana29));
document.getElementById('semana-30').appendChild(crearNodoTexto(inversionesIsaias.semana30));
document.getElementById('semana-31').appendChild(crearNodoTexto(inversionesIsaias.semana31));
document.getElementById('semana-32').appendChild(crearNodoTexto(inversionesIsaias.semana32));
document.getElementById('semana-33').appendChild(crearNodoTexto(inversionesIsaias.semana33));
document.getElementById('semana-34').appendChild(crearNodoTexto(inversionesIsaias.semana34));
document.getElementById('semana-35').appendChild(crearNodoTexto(inversionesIsaias.semana35));
document.getElementById('semana-36').appendChild(crearNodoTexto(inversionesIsaias.semana36));
document.getElementById('semana-37').appendChild(crearNodoTexto(inversionesIsaias.semana37));
document.getElementById('semana-38').appendChild(crearNodoTexto(inversionesIsaias.semana38));
document.getElementById('semana-39').appendChild(crearNodoTexto(inversionesIsaias.semana39));
document.getElementById('semana-40').appendChild(crearNodoTexto(inversionesIsaias.semana40));
document.getElementById('semana-41').appendChild(crearNodoTexto(inversionesIsaias.semana41));
document.getElementById('semana-42').appendChild(crearNodoTexto(inversionesIsaias.semana42));
document.getElementById('semana-43').appendChild(crearNodoTexto(inversionesIsaias.semana43));
document.getElementById('semana-44').appendChild(crearNodoTexto(inversionesIsaias.semana44));
document.getElementById('semana-45').appendChild(crearNodoTexto(inversionesIsaias.semana45));
document.getElementById('semana-46').appendChild(crearNodoTexto(inversionesIsaias.semana46));
document.getElementById('semana-47').appendChild(crearNodoTexto(inversionesIsaias.semana47));
document.getElementById('semana-48').appendChild(crearNodoTexto(inversionesIsaias.semana48));


// Calcula y muestra el total (Isaías)
const totalInversionIsaias = calcularTotalInversion(inversionesIsaias);
console.log(`Total de inversión de Isaias: $${totalInversionIsaias}`);



function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`$${valor}`);
    return nodoTexto;
}



// Función para calcular el total de inversión por mes
function calcularTotalMes(inversiones, inicioSemana, finSemana) {
  const valoresMes = Object.values(inversiones).slice(inicioSemana - 23, finSemana - 52);
  return valoresMes.reduce((total, monto) => total + monto, 0);
}

// Calcula y muestra los totales mensuales
const totalJunio = calcularTotalMes(inversionesIsaias, 23, 27);
const totalJulio = calcularTotalMes(inversionesIsaias, 28, 31);
const totalAgosto = calcularTotalMes(inversionesIsaias, 32, 35);
const totalSeptiembre = calcularTotalMes(inversionesIsaias, 36, 40);
const totalOctubre = calcularTotalMes(inversionesIsaias, 41, 44);
const totalNoviembre = calcularTotalMes(inversionesIsaias, 45, 48);

document.getElementById('total-junio').appendChild(crearNodoTexto(`$${totalJunio}`));
document.getElementById('total-julio').appendChild(crearNodoTexto(`$${totalJulio}`));
document.getElementById('total-agosto').appendChild(crearNodoTexto(`$${totalAgosto}`));
document.getElementById('total-septiembre').appendChild(crearNodoTexto(`$${totalSeptiembre}`));
document.getElementById('total-octubre').appendChild(crearNodoTexto(`$${totalOctubre}`));
document.getElementById('total-noviembre').appendChild(crearNodoTexto(`$${totalNoviembre}`));

// Calcula el sub-total (suma de los totales mensuales)
const subTotalIsaias = totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre;

// Interés (constante = 0)
const interesIsaias = 47.12;

// Total final (sub-total + interés)
const totalFinalIsaias = subTotalIsaias + interesIsaias;

// Muestra el sub-total
document.getElementById('isaias-subtotal').appendChild(crearNodoTexto(`${subTotalIsaias}`));

// Muestra el interés
document.getElementById('isaias-interes').appendChild(crearNodoTexto(`${interesIsaias}`));

// Muestra el total final
document.getElementById('isaias-total').appendChild(crearNodoTexto(`${totalFinalIsaias}`));



  // Password check (replace with server-side authentication)
  const password = prompt("Ingrese la contraseña:");
  if (password !== "20124815emml")
  if (password !== "Mano*9854") {
    alert("Contraseña incorrecta. Acceso denegado.");
    
    return; // Prevent further code execution if password is wrong
  }
  

  // ... rest of your code to display investment data ...


document.getElementById("contenido").style.display = "block";


}




function funcion7() {

// Datos de inversión para Manuel Gordillo (ejemplo)
const inversionesManuel = {
    semana23: 185,
    semana24: 180,
    semana25: 180,
    semana26: 190,
    semana27: 190,
    semana28: 185,
    semana29: 185,
    semana30: 185,
    semana31: 185,
    semana32: 185,
    semana33: 185,
    semana34: 190,
    semana35: 190,
    semana36: 200,
    semana37: 200,
    semana38: 200,
    semana39: 200,
    semana40: 200,
    semana41: 200,
    semana42: 200,
    semana43: 214,
    semana44: 220,
    semana45: 220,
    semana46: 0,
    semana47: 0,
    semana48: 0,
    semana49: 0,
    semana50: 0,
    semana51: 0,
    semana52: 0,
    // ... Agrega más semanas
};


// Función para calcular el total de inversión
function calcularTotalInversion(inversiones) {
    return Object.values(inversiones).reduce((total, monto) => total + monto, 0);
}

// Actualiza el valor en la página (Isaías)
document.getElementById('semana-23').appendChild(crearNodoTexto(inversionesManuel.semana23));
document.getElementById('semana-24').appendChild(crearNodoTexto(inversionesManuel.semana24));
document.getElementById('semana-25').appendChild(crearNodoTexto(inversionesManuel.semana25));
document.getElementById('semana-26').appendChild(crearNodoTexto(inversionesManuel.semana26));
document.getElementById('semana-27').appendChild(crearNodoTexto(inversionesManuel.semana27));
document.getElementById('semana-28').appendChild(crearNodoTexto(inversionesManuel.semana28));
document.getElementById('semana-29').appendChild(crearNodoTexto(inversionesManuel.semana29));
document.getElementById('semana-30').appendChild(crearNodoTexto(inversionesManuel.semana30));
document.getElementById('semana-31').appendChild(crearNodoTexto(inversionesManuel.semana31));
document.getElementById('semana-32').appendChild(crearNodoTexto(inversionesManuel.semana32));
document.getElementById('semana-33').appendChild(crearNodoTexto(inversionesManuel.semana33));
document.getElementById('semana-34').appendChild(crearNodoTexto(inversionesManuel.semana34));
document.getElementById('semana-35').appendChild(crearNodoTexto(inversionesManuel.semana35));
document.getElementById('semana-36').appendChild(crearNodoTexto(inversionesManuel.semana36));
document.getElementById('semana-37').appendChild(crearNodoTexto(inversionesManuel.semana37));
document.getElementById('semana-38').appendChild(crearNodoTexto(inversionesManuel.semana38));
document.getElementById('semana-39').appendChild(crearNodoTexto(inversionesManuel.semana39));
document.getElementById('semana-40').appendChild(crearNodoTexto(inversionesManuel.semana40));
document.getElementById('semana-41').appendChild(crearNodoTexto(inversionesManuel.semana41));
document.getElementById('semana-42').appendChild(crearNodoTexto(inversionesManuel.semana42));
document.getElementById('semana-43').appendChild(crearNodoTexto(inversionesManuel.semana43));
document.getElementById('semana-44').appendChild(crearNodoTexto(inversionesManuel.semana44));
document.getElementById('semana-45').appendChild(crearNodoTexto(inversionesManuel.semana45));
document.getElementById('semana-46').appendChild(crearNodoTexto(inversionesManuel.semana46));
document.getElementById('semana-47').appendChild(crearNodoTexto(inversionesManuel.semana47));
document.getElementById('semana-48').appendChild(crearNodoTexto(inversionesManuel.semana48));


// Calcula y muestra el total (Manuel)
const totalInversionManuel = calcularTotalInversion(inversionesManuel);
console.log(`Total de inversión de Manuel: $${totalInversionManuel}`);



function crearNodoTexto(valor) {
    const nodoTexto = document.createTextNode(`$${valor}`);
    return nodoTexto;
}



// Función para calcular el total de inversión por mes
function calcularTotalMes(inversiones, inicioSemana, finSemana) {
  const valoresMes = Object.values(inversiones).slice(inicioSemana - 23, finSemana - 52);
  return valoresMes.reduce((total, monto) => total + monto, 0);
}

// Calcula y muestra los totales mensuales
const totalJunio = calcularTotalMes(inversionesManuel, 23, 27);
const totalJulio = calcularTotalMes(inversionesManuel, 28, 31);
const totalAgosto = calcularTotalMes(inversionesManuel, 32, 35);
const totalSeptiembre = calcularTotalMes(inversionesManuel, 36, 40);
const totalOctubre = calcularTotalMes(inversionesManuel, 41, 44);
const totalNoviembre = calcularTotalMes(inversionesManuel, 45, 48);

document.getElementById('total-junio').appendChild(crearNodoTexto(`$${totalJunio}`));
document.getElementById('total-julio').appendChild(crearNodoTexto(`$${totalJulio}`));
document.getElementById('total-agosto').appendChild(crearNodoTexto(`$${totalAgosto}`));
document.getElementById('total-septiembre').appendChild(crearNodoTexto(`$${totalSeptiembre}`));
document.getElementById('total-octubre').appendChild(crearNodoTexto(`$${totalOctubre}`));
document.getElementById('total-noviembre').appendChild(crearNodoTexto(`$${totalNoviembre}`));

// Calcula el sub-total (suma de los totales mensuales)
const subTotalManuel = totalJunio + totalJulio + totalAgosto + totalSeptiembre + totalOctubre + totalNoviembre;

// Interés (constante = 0)
const interesManuel = 47.12;

// Total final (sub-total + interés)
const totalFinalManuel = subTotalManuel + interesManuel;

// Muestra el sub-total
document.getElementById('manuel-subtotal').appendChild(crearNodoTexto(`${subTotalManuel}`));

// Muestra el interés
document.getElementById('manuel-interes').appendChild(crearNodoTexto(`${interesManuel}`));

// Muestra el total final
document.getElementById('manuel-total').appendChild(crearNodoTexto(`${totalFinalManuel}`));



  // Password check (replace with server-side authentication)
  const password = prompt("Ingrese la contraseña:");
  if (password !== "20124815emml")
  if (password !== "9854manuel") {
    alert("Contraseña incorrecta. Acceso denegado.");
    
    return; // Prevent further code execution if password is wrong
  }
  

  // ... rest of your code to display investment data ...


document.getElementById("contenido").style.display = "block";


}






console.log('¡Bienvenido al Fondo de Inversión Vida!')
