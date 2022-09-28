function dibujarCanvas() {
  tablero.LineWidth = 8;
  tablero.LineCap = "round";
  tablero.LineJoin = "round";
  tablero.fillStyle = "#fff";
  tablero.strokeStyle = "#8A3871";

  tablero.fillRect(0, 0, 1200, 860);
  tablero.beginPath();
  tablero.moveTo(150, 350);
  tablero.lineTo(345, 350);
  tablero.stroke();
  tablero.closePath();
}

function dibujarLinea() {
  tablero.LineWidth = 6;
  tablero.LineCap = "round";
  tablero.LineJoin = "round";
  tablero.fillStyle = "#0A3871";
  tablero.strokeStyle = "#000";

  let anchura = 600 / palabraSecreta.length;
  for (let i = 0; i < palabraSecreta.length; i++) {
    tablero.moveTo(500 + anchura * i, 640);
    tablero.lineTo(550 + anchura * i, 640);
  }
  tablero.stroke();
  tablero.closePath();
}

function escribirLetraCorrecta(index) {
  tablero.font = "bold 52px Inter";
  tablero.LineWidth = 6;
  tablero.LineCap = "round";
  tablero.LineJoin = "round";
  tablero.fillStyle = "#000";

  let anchura = 600 / palabraSecreta.length;
  tablero.fillText(palabraSecreta[index], 505 + anchura * index, 620);
  tablero.stroke();
}

function escribirLetraIncorrecta(letra, errorsLeft) {
  tablero.font = "bold 33px Inter";
  tablero.LineWidth = 6;
  tablero.LineCap = "round";
  tablero.LineJoin = "round";
  tablero.fillStyle = "#000";
  tablero.fillText(letra, 535 + 40 * (10 - errorsLeft), 710, 40);
}

function muniecoSoga() {
  tablero.beginPath();
  tablero.lineWidth = 1;
  tablero.moveTo(245, 30);
  tablero.lineTo(245, 150);
  tablero.strokeStyle = "#000";
  tablero.stroke();
}

function muniecoCabeza() {
  tablero.fillStyle = "#000";
  tablero.beginPath();
  tablero.arc(245, 160, 22, 0, 2 * Math.PI);
  tablero.fill();
}

function muniecoCuerpo() {
  tablero.beginPath();
  tablero.lineWidth = 25;
  tablero.moveTo(245, 180);
  tablero.lineTo(245, 230);
  tablero.strokeStyle = "#000";
  tablero.stroke();
}

function muniecoMano() {
  tablero.beginPath();
  tablero.lineWidth = 10;
  tablero.moveTo(245, 180);
  tablero.lineTo(295, 175);
  tablero.strokeStyle = "#000";
  tablero.stroke();
}

function muniecoManoIzquierda() {
  tablero.beginPath();
  tablero.lineWidth = 10;
  tablero.moveTo(245, 180);
  tablero.lineTo(195, 175);
  tablero.strokeStyle = "#000";
  tablero.stroke();
}

function muniecoPie() {
  tablero.beginPath();
  tablero.lineWidth = 15;
  tablero.moveTo(245, 230);
  tablero.lineTo(295, 300);
  tablero.strokeStyle = "#000";
  tablero.stroke();
}

function muniecoPieIzquierdo() {
  tablero.beginPath();
  tablero.lineWidth = 15;
  tablero.moveTo(245, 230);
  tablero.lineTo(195, 300);
  tablero.strokeStyle = "#000";
  tablero.stroke();
}
