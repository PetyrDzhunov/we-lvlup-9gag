import createMemejQueryFunction from "../jQuery/createjQuery.js";

import { html } from "https://unpkg.com/lit-element/lit-element.js?module";

export default function createMemeTemplate() {
  return html`
    <section>
      <p>Create Meme Page</p>
      <button class="toggle">Toggle p</button>
    </section>
    ${createMemejQueryFunction()}
  `;
}
