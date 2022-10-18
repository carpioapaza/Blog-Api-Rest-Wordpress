export function PostCard(props) {
  let { date, id, slug, title, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded['wp:featuredmedia']
      ? _embedded['wp:featuredmedia'][0].source_url
      : 'app/assets/blogIcon.svg';
  // console.log('props', props);
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.post-card a')) return false;
    localStorage.setItem('wpPostId', e.target.dataset.id);
  });
  return `
  <article class="post-card">
    <figure class="post-card-header">
      <img src="${urlPoster}" alt="${title.rendered}">
    </figure>
    <div class="post-card-body">
    <h2>${title.rendered}</h2>
     <p>
       <time datetime="${date}">${dateFormat}</time>
       <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
     </p>
   </div>
  </article>
`;
}
