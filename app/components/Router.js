import api from '../helpers/wp_api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById('main');

  let { hash } = location;
  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash == '#/') {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        // console.log(posts);
        let html = '';
        posts.forEach((post) => (html += PostCard(post)));
        d.querySelector('.loader').style.display = 'none';
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes('#/search')) {
    $main.innerHTML = '<h2>Sección del Buscador</h2>';
    // d.querySelector('.loader').style.display = 'none';
  } else if (hash === '#contacto') {
    $main.innerHTML = '<h2>Sección contacto/h2>';
    // d.querySelector('.loader').style.display = 'none';
  } else {
    $main.innerHTML =
      '<h2>Aquí cargará el contenido del Post previamante seleccionado</h2>';
    // d.querySelector('.loader').style.display = 'none';
  }
  d.querySelector('.loader').style.display = 'none';
}
/* Software ASS */
