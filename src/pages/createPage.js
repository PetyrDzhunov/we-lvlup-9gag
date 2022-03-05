/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const createMemeTemplate = () => html` <section>createMeme page</section> `;

export default async function createPage(ctx) {
  ctx.render(createMemeTemplate());
}
