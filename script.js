// Equipos del torneo
const equipos = [
  { nombre: "Real Campechuela", pj: 3, g: 2, e: 1, p: 0, gf: 6, gc: 2 },
  { nombre: "Atlético Granma", pj: 3, g: 2, e: 0, p: 1, gf: 5, gc: 3 },
  { nombre: "Deportivo Pueblo", pj: 3, g: 1, e: 1, p: 1, gf: 3, gc: 4 },
  { nombre: "Juventud FC", pj: 3, g: 0, e: 0, p: 3, gf: 1, gc: 6 }
];

// Calcula puntos y diferencia de gol
equipos.forEach(e => {
  e.dg = e.gf - e.gc;
  e.puntos = e.g * 3 + e.e * 1;
});

// Ordenar tabla por puntos, luego DG, luego GF
equipos.sort((a, b) => {
  if (b.puntos !== a.puntos) return b.puntos - a.puntos;
  if (b.dg !== a.dg) return b.dg - a.dg;
  return b.gf - a.gf;
});

// Renderizar tabla de posiciones
const tablaPosiciones = document.getElementById("tabla-posiciones");

equipos.forEach(e => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${e.nombre}</td>
    <td>${e.pj}</td>
    <td>${e.g}</td>
    <td>${e.e}</td>
    <td>${e.p}</td>
    <td>${e.gf}</td>
    <td>${e.gc}</td>
    <td>${e.dg}</td>
    <td>${e.puntos}</td>
  `;
  tablaPosiciones.appendChild(tr);
});

// Calendario de partidos
const partidos = [
  { fecha: "20/07/2026", hora: "16:00", local: "Real Campechuela", visita: "Atlético Granma", cancha: "Estadio Municipal" },
  { fecha: "21/07/2026", hora: "16:00", local: "Deportivo Pueblo", visita: "Juventud FC", cancha: "Cancha del Parque" },
  { fecha: "24/07/2026", hora: "17:00", local: "Real Campechuela", visita: "Deportivo Pueblo", cancha: "Estadio Municipal" },
  { fecha: "25/07/2026", hora: "17:00", local: "Atlético Granma", visita: "Juventud FC", cancha: "Cancha del Parque" }
];

const listaPartidos = document.getElementById("lista-partidos");

partidos.forEach(p => {
  const div = document.createElement("div");
  div.className = "partido";
  div.innerHTML = `
    <p><strong>${p.fecha}</strong> - ${p.hora}</p>
    <p>${p.local} vs ${p.visita}</p>
    <p>Cancha: ${p.cancha}</p>
  `;
  listaPartidos.appendChild(div);
});

// Tabla de goleadores
const goleadores = [
  { jugador: "Carlos Pérez", equipo: "Real Campechuela", goles: 4 },
  { jugador: "Luis Gómez", equipo: "Atlético Granma", goles: 3 },
  { jugador: "Miguel Díaz", equipo: "Deportivo Pueblo", goles: 2 },
  { jugador: "José Herrera", equipo: "Real Campechuela", goles: 2 }
];

// Ordenar por goles
goleadores.sort((a, b) => b.goles - a.goles);

const tablaGoleadores = document.getElementById("tabla-goleadores");

goleadores.forEach(g => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${g.jugador}</td>
    <td>${g.equipo}</td>
    <td>${g.goles}</td>
  `;
  tablaGoleadores.appendChild(tr);
});
// Formulario para agregar goleadores
document.getElementById("form-goleador").addEventListener("submit", function(e) {
  e.preventDefault();

  const jugador = document.getElementById("nuevo-jugador").value;
  const equipo = document.getElementById("nuevo-equipo").value;
  const goles = parseInt(document.getElementById("nuevo-goles").value);

  goleadores.push({ jugador, equipo, goles });

  // Ordenar nuevamente
  goleadores.sort((a, b) => b.goles - a.goles);

  // Limpiar tabla
  tablaGoleadores.innerHTML = "";

  // Renderizar tabla actualizada
  goleadores.forEach(g => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${g.jugador}</td>
      <td>${g.equipo}</td>
      <td>${g.goles}</td>
    `;
    tablaGoleadores.appendChild(tr);
  });

  // Limpiar formulario
  document.getElementById("form-goleador").reset();
});
