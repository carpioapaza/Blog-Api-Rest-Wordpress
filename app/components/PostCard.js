export function PostCard(props) {
  let { date, slug, title, _embedded } = props;
  let dateFormat = new Date(date).toLocaleString(),
    urlPoster = _embedded['wp:featuredmedia']
      ? _embedded['wp:featuredmedia'][0].source_url
      : 'app/assets/blogIcon.svg';
  // console.log('props', props);
  return `
  <article class="post-card">
    <figure class="post-card-header">
      <img src="${urlPoster}" alt="${title.rendered}">
    </figure>
    <div class="post-card-body">
    <h2>${title.rendered}</h2>
     <p>
       <time datetime="${date}">${dateFormat}</time>
       <a href="#/${slug}">Ver Publicación</a>
     </p>
   </div>
  </article>
`;
}
