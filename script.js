function toggle(element) {
  element.classList.toggle('aprobada');

  const materias = document.querySelectorAll('.materia');
  const estado = Array.from(materias).map(m => m.classList.contains('aprobada'));
  localStorage.setItem('estadoMaterias', JSON.stringify(estado));
}

window.onload = function () {
  const estado = JSON.parse(localStorage.getItem('estadoMaterias'));
  if (estado) {
    const materias = document.querySelectorAll('.materia');
    materias.forEach((m, i) => {
      if (estado[i]) m.classList.add('aprobada');
    });
  }
}
