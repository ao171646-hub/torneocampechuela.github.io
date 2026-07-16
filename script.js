fetch("data.json")
  .then(r => r.json())
  .then(data => {
    cargarEquipos(data.equipos);
    cargarPartidos(data.partidos);
    cargarGoleadores(data.goleadores);
  });

function cargarEquipos(equipos) {
  equipos.forEach(e => {
    e.dg = e.gf - e.gc;
    e.puntos = e.g * 3 + e.e;
  });

  equipos.sort((a, b) => {
    if (b.puntos !== a.puntos) return b.puntos - a.puntos;
    if (b.dg !== a.dg) return b.dg - a.dg;
    return b.gf - a.gf;
  });

  const tabla = document.getElementById("tabla-posiciones");
  tabla.innerHTML = "";

  equipos.forEach(e => {
    tabla.innerHTML += `
      <tr>
        <td>${e.nombre}</td>
        <td>${e.pj}</td>
        <td>${e.g}</td>
        <td>${e.e}</td>
        <td>${e.p}</td>
        <td>${e.gf}</td>
        <td>${e.gc}</td>
        <td>${e.dg}</td>
        <td>${e.puntos}</td>
      </tr>
    `;
  });
}

function cargarPartidos(partidos) {
  const lista = document.getElementById("lista-partidos");
  lista.innerHTML = "";

  partidos.forEach(p => {
    lista.innerHTML += `
      <div class="partido">
        <p><strong>${p.fecha}</strong> - ${p.hora}</p>
        <p>${p.local} vs ${p.visita}</p>
        <p>Cancha: ${p.cancha}</p>
      </div>
    `;
  });
}

function cargarGoleadores(goleadores) {
  goleadores.sort((a, b) => b.goles - a.goles);

  const tabla = document.getElementById("tabla-goleadores");
  tabla.innerHTML = "";

  goleadores.forEach(g => {
    tabla.innerHTML += `
      <tr>
        <td>${g.jugador}</td>
        <td>${g.equipo}</td>
        <td>${g.goles}</td>
      </tr>
    `;
  });
}

