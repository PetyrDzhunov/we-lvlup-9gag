import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

const freshMemesTemplate = () => html` <section>freshMemes page</section> `;

export default async function freshPage(ctx) {
  ctx.render(freshMemesTemplate());
}
