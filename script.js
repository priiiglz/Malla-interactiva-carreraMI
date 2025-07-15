function toggle(element) {
  element.classList.toggle('aprobada');
  guardarEstado();
  actualizarProgreso();
}

function actualizarProgreso() {
  const materias = document.querySelectorAll('.materia');
  const total = materias.length;
  const aprobadas = document.querySelectorAll('.materia.aprobada').length;
  const porcentaje = Math.round((aprobadas / total) * 100);
  document.getElementById('progreso').textContent = `Progreso: ${porcentaje}% - ${aprobadas} de ${total} materias`;
}

function guardarEstado() {
  const estados = [];
  document.querySelectorAll('.materia').forEach(m => {
    estados.push(m.classList.contains('aprobada'));
  });
  localStorage.setItem('materiasEstado', JSON.stringify(estados));
}

function cargarEstado() {
  const estados = JSON.parse(localStorage.getItem('materiasEstado'));
  if (estados) {
    document.querySelectorAll('.materia').forEach((m, i) => {
      if (estados[i]) {
        m.classList.add('aprobada');
      }
    });
  }
  actualizarProgreso();
}

function guardarNotas() {
  const notas = [];
  document.querySelectorAll('.materia input.nota').forEach(n => {
    notas.push(n.value);
  });
  localStorage.setItem('materiasNotas', JSON.stringify(notas));
}

function cargarNotas() {
  const notas = JSON.parse(localStorage.getItem('materiasNotas'));
  if (notas) {
    document.querySelectorAll('.materia input.nota').forEach((n, i) => {
      n.value = notas[i] || '';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  cargarEstado();
  cargarNotas();
});