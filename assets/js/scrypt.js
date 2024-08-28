/********************************************* 
**********************************************
//////////////// PARTE UNO ///////////////////
********************************************** 
*********************************************/
const imagen = document.getElementById("miImagen");

imagen.addEventListener("click", () => {
  imagen.style.border === ""
    ? (imagen.style.border = "4px outset red")
    : (imagen.style.border = "");
  console.log(imagen.style.border);
});

/********************************************* 
**********************************************
//////////////// PARTE DOS ///////////////////
********************************************** 
*********************************************/
const inputUno = document.getElementById("input-1");
const inputDos = document.getElementById("input-2");
const inputTres = document.getElementById("input-3");

inputUno.value = 0;
inputDos.value = 0;
inputTres.value = 0;

const Validar = document.getElementById("validar");
const output = document.getElementById("output");

Validar.addEventListener("click", () => {
  //Inicio flujo de validación de datos
  //Valido tipo de datos input 1
  if (isNaN(inputUno.value) || inputUno.value.trim() === "") {
    inputUno.value = 0;
    alert("Por favor, introduce un número en el recuadro de la primera imagen");
  }
  //Valido tipo de datos input 2
  if (isNaN(inputDos.value) || inputDos.value.trim() === "") {
    inputDos.value = 0;
    alert(
      "Por favor, introduce un número en el recuadro de la segunda imagen."
    );
  }
  //Valido tipo de datos input 3
  if (isNaN(inputTres.value) || inputTres.value.trim() === "") {
    inputTres.value = 0;
    alert(
      "Por favor, introduce un número en el recuadro de la tercera imagen."
    );
  }
  //Finaliza flujo de validación de datos.
  const Resultado =
    Number(inputUno.value) + Number(inputDos.value) + Number(inputTres.value);
  console.log(Resultado);
  Resultado > 10
    ? (output.innerHTML = `No puede llevar más de 10 sticker`)
    : (output.innerHTML = `Usted lleva ${Resultado} Stickers`);
});

/********************************************* 
**********************************************
//////////////// PARTE TRES //////////////////
********************************************** 
*********************************************/

const buttonPassw = document.getElementById("buttonPassw");
const outputDos = document.getElementById("outputDos");

buttonPassw.addEventListener("click", () => {
  const selectUno = document.getElementById("selectUno");
  const selectDos = document.getElementById("selectDos");
  const SelectTres = document.getElementById("SelectTres");

  const passw = selectUno.value + selectDos.value + SelectTres.value;

  switch (passw) {
    case "911":
      outputDos.innerHTML = "Password 1 correcto";
      break;
    case "714":
      outputDos.innerHTML = "Password 2 correcto";
      break;
    default:
      outputDos.innerHTML = "Password incorrecto";
  }
});
