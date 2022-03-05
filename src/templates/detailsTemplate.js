import detailsJqueryFunction from '../jQuery/detailsjQuery.js';

import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function detailsTemplate() {
  return html`
    <section>
      <h1>details</h1>
      <button class="toggle">Toggle details</button>
    </section>
    ${detailsJqueryFunction()}
  `;
}
