function toggle(element) {
  element.classList.toggle('aprobada');
  guardarEstado();
  actualizarProgreso();
}

function guardarEstado() {
  const materias = document.querySelectorAll('.materia');
  const estado = Array.from(materias).map(m => m.classList.contains('aprobada'));
  localStorage.setItem('estadoMaterias', JSON.stringify(estado));
}

function guardarNotas() {
  const notas = document.querySelectorAll('.nota');
  const valores = Array.from(notas).map(n => n.value);
  localStorage.setItem('notasMaterias', JSON.stringify(valores));
}

function cargarEstado() {
  const estado = JSON.parse(localStorage.getItem('estadoMaterias'));
  if (estado) {
    const materias = document.querySelectorAll('.materia');
    materias.forEach((m, i) => {
      if (estado[i]) m.classList.add('aprobada');
    });
  }
}

function cargarNotas() {
  const valores = JSON.parse(localStorage.getItem('notasMaterias'));
  if (valores) {
    const notas = document.querySelectorAll('.nota');
    notas.forEach((n, i) => {
      n.value = valores[i] || '';
    });
  }
}

function actualizarProgreso() {
  const materias = document.querySelectorAll('.materia');
  const total = materias.length;
  const aprobadas = Array.from(materias).filter(m => m.classList.contains('aprobada')).length;
  const porcentaje = Math.round((aprobadas / total) * 100);
  document.getElementById('progreso').textContent = `Progreso: ${porcentaje}%`;
}

window.onload = function () {
  cargarEstado();
  cargarNotas();
  actualizarProgreso();
};