import registerjQuery from '../utils/dom/registerjQuery.js';

import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function registerTemplate() {
  return html` ${registerjQuery()} `;
}
