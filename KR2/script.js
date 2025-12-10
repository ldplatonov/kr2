
document.addEventListener('DOMContentLoaded', function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    if (href === path || href.endsWith(path)) {
      a.classList.add('active');
    }
  });


  const grid = document.getElementById('grid');
  if (grid) {
    const legends = [
      {name: "Коби Брайант", number: 24, img: "Kobe.webp"},
      {name: "Леброн Джеймс", number: 23, img: "Lebron.webp"},
      {name: "Шакил О'Нил", number: 34, img: "Shaq.jpg"},
      {name: "Карим Абдул-Джаббар", number: 33, img: "Kareem.jpg"},
      {name: "Мэджик Джонсон", number: 32, img: "Magic.jpg"},
      {name: "Джерри Уэст", number: 44, img: "West.jpeg"},
      {name: "Элджин Бейлор", number: 22, img: "Elgin.jpg"},
      {name: "Джеймс Уорти", number: 42, img: "James.jpg"}
    ];

    legends.forEach(l => {
      const col = document.createElement('div');
      col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
      col.innerHTML = `
        <article class="legend-card">
          <img src="${l.img}" alt="${l.name}" class="img-fluid">
          <h5 class="mt-2">${l.name}</h5>
          <p class="legend-number">#${l.number}</p>
        </article>`;
      grid.appendChild(col);
    });
  }
});

