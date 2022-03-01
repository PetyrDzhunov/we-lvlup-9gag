/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
import { html } from '../lib.js';

const homeTemplate = () => html` <section>homePage</section> `;

export async function homePage(ctx) {
  ctx.render(homeTemplate());
}
