import homePageJqueryFunction from '../utils/dom/homejQuery.js';
import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function homeTemplate() {
  return html`
    <section>homepage</section>
    ${homePageJqueryFunction()}
  `;
}
