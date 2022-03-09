import homePageJqueryFunction from '../utils/DOM/homejQuery.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function homeTemplate() {
  return html`
    <section>
      <p>ASDASD</p>
      <button class="test__part1">Toggle h1</button>
      <button class="test__part1">Toggle h1</button>
      <button class="test__part1">Toggle h1</button>
      <button class="test__part1">Toggle h1</button>
    </section>
    ${homePageJqueryFunction()}
  `;
}
