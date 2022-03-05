import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

function jQueryFunction() {
  $(function jQuery() {
    $('h1').text('Changed text').css('color', 'blue');
    $('.toggle').click(function () {
      $('h1').toggle();
    });
  });
}

const homeTemplate = () => html`
  <section>
    <h1>9GAG</h1>
    <button class="toggle">Toggle h1</button>
  </section>
  ${jQueryFunction()}
`;

export default async function homePage(ctx) {
  ctx.render(homeTemplate());
}
