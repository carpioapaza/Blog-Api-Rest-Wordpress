export function Post(props) {
  let { title, content, date } = props;
  let DateFormat = new Date(date).toLocaleString();
  return `
  <section class="post-page">
    <aside>
      <h2>${title.rendered}</h2>
      <time datetime="">${DateFormat}</time>
    </aside>
    <hr>
    <article>${content.rendered}</article>
  </section>
    `;
}
