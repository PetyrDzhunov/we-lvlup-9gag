/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable indent */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */

import { html } from '../lib.js';

const memesTemplate = () => html` <section>mememememesssss</section> `;

export async function memesPage(ctx) {
  ctx.render(memesTemplate());
}
