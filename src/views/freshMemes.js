/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
import { html } from '../lib.js';

const freshMemesTemplate = () => html` <section>freshMemes page</section> `;

export async function freshPage(ctx) {
  ctx.render(freshMemesTemplate());
}
