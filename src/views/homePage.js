/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
import { html } from '../lib.js';

function jQueryFunction() {
  $(function () {
    // eslint-disable-next-line no-alert
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

export async function homePage(ctx) {
  ctx.render(homeTemplate());
}
