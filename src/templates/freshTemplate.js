import freshjQueryFunction from '../jQuery/freshjQuery.js';

import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function createMemeTemplate() {
  return html`
    <section>
      <p>Fresh Memes Page</p>
      <button class="toggle">Toggle p</button>
    </section>
    ${freshjQueryFunction()}
  `;
}