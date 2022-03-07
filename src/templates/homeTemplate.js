import homePageJqueryFunction from "../jQuery/homejQuery.js";
import { html } from "https://unpkg.com/lit-element/lit-element.js?module";

export default function homeTemplate() {
  return html`
    <section>
      <h1>9GAG</h1>
      <button class="test__part1">Toggle h1</button>
    </section>
    ${homePageJqueryFunction()}
  `;
}
