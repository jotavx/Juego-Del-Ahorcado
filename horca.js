let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML"];
let tablero = document.getElementById("forca").getContext("2d");

let palabraEncontrada = "";
let palabraSecreta = "";
let letras = [];
let errores = 10;

function escojerPalabraSecreta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)];
  palabraSecreta = palabra;
  console.log(palabraSecreta);
}

function comprobarLetra(key) {
  let estado = false;
  if (
    (key >= 65 && letras.indexOf(key)) ||
    (key <= 90 && letras.indexOf(key))
  ) {
    letras.push(key);
    console.log(key);
    return estado;
  } else {
    estado = true;
    console.log(key);
    return estado;
  }
}

function anadirLetraIncorrecta() {
  errores -= 1;
  console.log(errores);
}

function dibujar(errores) {
  switch (errores) {
    case 9:
      muniecoSoga();
      break;
    case 8:
      muniecoCabeza();
      break;
    case 7:
      muniecoCuerpo();
      break;
    case 6:
      muniecoMano();
      break;
    case 5:
      muniecoManoIzquierda();
      break;
    case 4:
      muniecoPie();
      break;
    case 3:
      muniecoPieIzquierdo();
      break;
  }
}

const perdiste = () => {
  document.removeEventListener("keydown", onkeydown);
  document.getElementById("iniciar-juego").style.display = "block";
};

function iniciarJuego() {
  document.getElementById("iniciar-juego").style.display = "none";

  escojerPalabraSecreta();
  dibujarCanvas();
  dibujarLinea();

  document.onkeydown = (e) => {
    let letra = e.key.toUpperCase();

    if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
      for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
          escribirLetraCorrecta(i);
        }
      }
    } else {
      anadirLetraIncorrecta(letra);
      escribirLetraIncorrecta(letra, errores);
      dibujar(errores);
      if (errores === 2) perdiste();
    }
  };
}
