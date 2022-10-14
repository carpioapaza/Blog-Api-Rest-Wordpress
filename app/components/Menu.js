export function Menu() {
  const $menu = document.createElement('nav');
  $menu.classList.add('menu');
  $menu.innerHTML = `
  <a href="#/">Home</a>
  <a href="#/search">Busqueda</a>
  <a href="#/contacto">Contacto</a>
  <a  href="https://carpioapaza.github.io/portfolio" target="_blank">Portfolio</a>
  `;
  return $menu;
}
