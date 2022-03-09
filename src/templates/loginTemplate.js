import loginjQueryFunction from '../utils/dom/loginjQuery.js';

import { html } from 'https://unpkg.com/lit-element/lit-element.js?module';

export default function loginTemplate() {
  return html` ${loginjQueryFunction()} `;
}
