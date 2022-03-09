import freshjQueryFunction from '../utils/DOM/freshjQuery.js';

import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function freshMemeTemplate() {
  return html`
    <section>
      <button class="toggle">Toggle p</button>
    </section>
    ${freshjQueryFunction()}
  `;
}
