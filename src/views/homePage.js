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
    $('h1').text('Changed text').css('background-color', 'blue');
  });
}

const homeTemplate = () =>
  html`
    ${jQueryFunction()}
    <section>
      <h1>9GAG</h1>
    </section>
  `;

export async function homePage(ctx) {
  ctx.render(homeTemplate());
}
