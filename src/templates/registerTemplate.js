import registerjQuery from "../jQuery/registerjQuery.js";

import { html } from "https://unpkg.com/lit-element/lit-element.js?module";

export default function loginTemplate() {
  return html`
    <section>
      <p>Register Page</p>
      <button class="toggle">Toggle p</button>
    </section>
    ${registerjQuery()}
  `;
}
