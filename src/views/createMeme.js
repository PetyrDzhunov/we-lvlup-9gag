/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
import { html } from '../lib.js';

const createMemeTemplate = () => html` <section>createMeme page</section> `;

export async function createPage(ctx) {
  ctx.render(createMemeTemplate());
}