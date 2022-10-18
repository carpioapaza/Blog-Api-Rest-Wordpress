export function Main() {
  const $main = document.createElement('main');
  $main.id = 'main';
  if (!location.hash.includes('search')) {
    $main.classList.add('grid-fluid-posts');
  }
  $main.classList.add('grid-fluid-result');
  return $main;
}
